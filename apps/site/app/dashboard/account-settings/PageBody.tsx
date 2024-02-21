"use client";
import { useGlobalContext } from "@/context/store";
import { AccountSettings, } from "@/ui";
import { userRevalidate } from "lib/userRevalidate";
import { updateUser } from "lib/woocommerce/user/getUser";
import { useSession } from "next-auth/react";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

type Props = {
	session: any;
};

const AccountSettingsBody = ({ session }: Props) => {
	const { dictionaries } = useGlobalContext();
	const [updateClickLoading, SetUpdateClickSetLoading] = useState(false);
	const { update } = useSession();
	const [, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors, isDirty },
	} = useForm({
		mode: "onChange",
		defaultValues: {
			first_name: session?.user?.first_name,
			last_name: session?.user?.last_name,
			email: session?.user?.email,
			avatar_url: session?.user?.avatar_urls[96],
			username: session?.user?.username,
		},
	});

	/* -------------------------------------------------------------------------- */
	/*                               start basic info                              */
	/* -------------------------------------------------------------------------- */
	// basic info
	const [userInfoUpdate, setUserInfoUpdate] = useState<any>({
		first_name: "",
		last_name: "",
		username: "",
		email: "",
		avatar_url: "",
	});

	// basic info on submit
	const handleUpdateClick = async (data: {
		first_name: string;
		last_name: string;
		email: string;
		avatar_url: string;
		username: string;
	}) => {
		SetUpdateClickSetLoading(true);

		// check if email field is not have any space
		if (userInfoUpdate.email.includes(" ")) {
			toast.error('Email field can not have any space');
			SetUpdateClickSetLoading(false);
			return;
		}

		startTransition(() => {
			// *** User update from woocommerce ***
			updateUser({
				first_name: data.first_name,
				last_name: data.last_name
			}, session.user.id).then((res) => {
				if (!res.data.code) {
					// *** User update from next-auth ***
					update({
						first_name: data.first_name,
						last_name: data.last_name,
					}).then(() => {
						toast.success('Profile updated successfully');
						SetUpdateClickSetLoading(false);

						// *** revalidate user data ***
						setTimeout(() => {
							userRevalidate('/dashboard/account-settings', 'layout');
						}, 1000);
					});
				} else {
					toast.error(res.data.message);
					SetUpdateClickSetLoading(false);
				}
			})
		});
	};

	// basic info on load
	useEffect(() => {
		if (session) {
			setUserInfoUpdate({
				first_name: session?.user?.first_name,
				last_name: session?.user?.last_name,
				email: session?.user?.email,
				avatar_url: session?.user?.avatar_urls[96],
				username: session?.user?.username,
			});
			setValue("first_name", session?.user?.first_name);
			setValue("last_name", session?.user?.last_name);
			setValue("email", session?.user?.email);
			setValue("avatar_url", session?.user?.avatar_urls[96]);
			setValue("username", session?.user?.username);
			// setImagePreview(session?.user?.avatar_url);
		}

	}, [session, setValue]);


	return (
		<div className="grow">
			<AccountSettings
				textData={dictionaries?.dashboard_settings?.textData}
				// **  user info update ***
				userInfoUpdate={userInfoUpdate}

				// *** Form Submit ***
				onFormSubmit={handleUpdateClick}
				loader={updateClickLoading}

				// ** register form ***
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
				isDirty={isDirty}
			/>
		</div>
	);
};
export default AccountSettingsBody;
