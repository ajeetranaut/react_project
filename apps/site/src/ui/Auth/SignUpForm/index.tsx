"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import React, { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { createUser } from "../../../../lib/woocommerce/user/getUser";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	setActive: (value: any) => void;
	dictionary: any;
}

type FormValues = {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	onSubmit: (data?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>;
};

export const SignUpForm = ({ setActive, dictionary }: ComponentProps) => {
	const [loading, setLoading] = useState(false)
	const [, startTransition] = useTransition()
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		setLoading(true)
		// Format data
		const formattedData = {
			first_name: data.firstName,
			last_name: data.lastName,
			email: data.email,
			username: data.username,
			password: data.password,
			confirm_password: data.confirmPassword,
		}
		startTransition(() => {
			createUser(formattedData).then((res) => {
				const { error } = res

				if (error) {
					toast.error(error.message)
					setLoading(false)
					return
				}
				toast.success('User created successfully')
				setLoading(false)
				reset()
				setActive(0)
			}).catch((err) => {
				toast.error(err)
				setLoading(false)
			})
		})
	};

	return (
		<div>
			<h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-center text-secondary">{dictionary?.sign_up?.title}</h3>
			<p className="font-normal text-base text-center text-base-200 mt-1">{dictionary?.sign_up?.subtitle}</p>
			<div className=" mt-7">
				<form action="" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex gap-3">
						{/*	First Name */}
						<input
							type="text"
							id="firstName"
							className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full ${errors.username ? "border-red-500" : "border-base-100"
								}`}
							placeholder={dictionary?.sign_up?.firstNamePlaceholder}
							{...register("firstName", { required: true })}
						/>
						{/* Last Name */}
						<input
							type="text"
							id="lastName"
							className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full ${errors.username ? "border-red-500" : "border-base-100"
								}`}
							placeholder={dictionary?.sign_up?.lastNamePlaceholder}
							{...register("lastName", { required: true })}
						/>
					</div>
					{/* Username */}
					<input
						type="text"
						id="username"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full mt-6 ${errors.username ? "border-red-500" : "border-base-100"
							}`}
						placeholder={dictionary?.sign_up?.usernamePlaceholder}
						{...register("username", { required: true })}
					/>
					{/* Email */}
					<input
						type="email"
						id="email"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full mt-6 ${errors.email ? "border-red-500" : "border-base-100"
							}`}
						placeholder={dictionary?.sign_up?.emailPlaceholder}
						{...register("email", { required: true })}
					/>
					<input
						type="password"
						id="password"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full mt-6 ${errors.password ? "border-red-500" : "border-base-100"
							}`}
						placeholder={dictionary?.sign_up?.passwordPlaceholder}
						{...register("password", { required: true })}
					/>
					<input
						type="password"
						id="confirmPassword"
						className={`px-5 py-3 rounded-lg outline-none border bg-white text-xl  placeholder:text-lg w-full mt-6 ${errors.confirmPassword ? "border-red-500" : "border-base-100"
							}`}
						placeholder={dictionary?.sign_up?.confirmPasswordPlaceholder}
						{...register("confirmPassword", { required: true })}
					/>
					<button
						className={`font-medium cursor-pointer text-base leading-6 px-7 py-4 rounded-md transition hover:duration-700 flex gap-4 items-center justify-center w-full mt-6  ease-in-out text-white ${loading ? "bg-secondary" : "bg-primary hover:bg-secondary"}`}
					>
						{loading && <FormLoader />}
						{loading ? dictionary?.sign_up?.btnLoadingText : dictionary?.sign_up?.btnText}
					</button>
				</form>
			</div>
		</div>
	)
}
