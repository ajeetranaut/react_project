"use client";

import { useGlobalContext } from "@/context/store";
import { BreadcrumbTwo, ContactForm, ContactInfo, Gap } from "@/ui";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactBody = () => {
	const { dictionaries } = useGlobalContext();
	const [loader, setLoader] = useState(false);
	// *** From register by react-hook-form ***
	const { register, handleSubmit, formState: { errors }, } = useForm({
		mode: "onChange",
		defaultValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
	});

	// handle click form
	const onSubmitHandler = (data: any) => {
		setLoader(true);
		/**
		 * Add your API logic integration here
		 * This is just a UI for form submission
		 */
		setTimeout(() => {
			toast.success("Your message function is working, check console log");
			console.log("Contact Form Info:", data)
			setLoader(false);
		}, 3000);
	};

	return (
		<Fragment>
			<BreadcrumbTwo title={dictionaries?.contact_us?.breadcrumb.title} description={dictionaries?.contact_us?.breadcrumb.description} />
			<Gap />
			<ContactInfo
				textType={dictionaries?.contact_us?.textType}
			// data={contactData}
			/>
			<Gap />
			<ContactForm
				// *** basic info ***
				src={`/image/Map.png`}
				formText={dictionaries?.contact_us?.contactFormText}

				// ** From submit handle ***
				onSubmitForm={onSubmitHandler}
				loader={loader}

				// *** From register by react-hook-form ***
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
			/>
			<Gap />
		</Fragment>
	);
};
export default ContactBody;
