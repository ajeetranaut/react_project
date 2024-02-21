"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import { useGlobalContext } from "@/context/store";
import { getCookie } from "cookies-next";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import * as process from "process";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	dictionary: any;
}

type FormValues = {
	username?: string;
	password?: string;
	remember?: boolean;
	onSubmit: (data?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
	setLoginModalOn?: any;
};

export const LoginForm = ({ dictionary }: ComponentProps) => {
	const { direction } = useGlobalContext()
	const searchParams = useSearchParams()
	let get_form_info: any = getCookie("created__user__info");
	if (get_form_info) {
		get_form_info = JSON.parse(get_form_info);
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const [loading, setLoading] = React.useState(false);
	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		setLoading(true);
		const callbackUrl = searchParams.get("callbackUrl")
		await signIn("credentials", {
			username: data.username,
			password: data.password,
			redirect: true,
			callbackUrl: callbackUrl ? callbackUrl : process.env.NEXTAUTH_URL
		})
	};

	return (
		<div>
			<h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-center text-secondary">
				{dictionary?.sign_in?.title}
			</h3>
			<p className="font-normal text-base text-center text-base-200 mt-1">
				{dictionary?.sign_in?.subtitle}
			</p>
			<div className="mt-7">
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						id="email"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full ${errors.username ? "border-red-500" : "border-base-100"
							}`}
						defaultValue={get_form_info?.username}
						placeholder={dictionary?.sign_in?.emailPlaceholder}
						{...register("username", { required: true })}
					/>
					<input
						type="password"
						id="password"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full mt-6 ${errors.password ? "border-red-500" : "border-base-100"
							}`}
						placeholder={dictionary?.sign_in?.passwordPlaceholder}
						{...register("password", { required: true })}
					/>
					<div className="my-6 flex items-center justify-between">
						<label className="text-base cursor-pointer">
							<input type="checkbox" className="w-4 h-4 cursor-pointer" id="remember" {...register("remember")} />
							<span className={`${direction === 'ltr' ? 'ml-2' : 'mr-2'}`}>
								{dictionary?.sign_in?.remember_me}
							</span>
						</label>
						{/* <BodyText size="md" className=" text-primary cursor-pointer">
              Forgot Password?
            </BodyText> */}
					</div>
					<button
						className={`font-medium cursor-pointer text-base leading-6 px-7 py-4 rounded-md transition hover:duration-700 flex gap-4 items-center justify-center w-full mt-6  ease-in-out text-white ${loading ? "bg-secondary" : "bg-primary hover:bg-secondary"}`}
					>
						{loading ? <FormLoader /> : ""}
						{loading ? dictionary?.sign_in?.btnLoadingText : dictionary?.sign_in?.btnText}
					</button>

				</form>
			</div>
		</div>
	)
}
