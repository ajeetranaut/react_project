"use client";

import { Fragment } from "react";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	textData: {
		titleText: string;
		fromText: {
			firstNamePlaceholder: string;
			lastNamePlaceholder: string;
			usernamePlaceholder: string;
			emailPlaceholder: string;
			buttonText: string;
		}
	}
	// basic info
	onFormSubmit?: (data: any) => void;
	userInfoUpdate?: any;
	loader?: boolean;
	// register form info
	register?: any;
	handleSubmit?: any;
	errors?: any;
	isDirty?: any;
};

export const AccountSettings = ({
	// basic info update
	onFormSubmit,
	loader,
	userInfoUpdate,
	// register form
	register,
	handleSubmit,
	errors,
	isDirty,
	textData
}: ComponentProps) => {

	return (
		<Fragment>
			{/******** * Basic Info **********/}
			<div className="p-5 sm:p-10 rounded-2xl border">
				<h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-secondary">
					{textData?.titleText}
				</h3>
				<div className="lg:relative">
					<form onSubmit={handleSubmit(onFormSubmit)}>
						<div className="flex flex-wrap lg:flex-nowrap items-start gap-5 lg:gap-10 mt-6">
							<div className="grow space-y-5">
								{/* NOTE: First Name and Last Name are required fields. */}
								<div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
									<input
										type="text"
										placeholder={textData?.fromText.firstNamePlaceholder}
										className={`focus:outline-none border rounded-lg px-5 h-12 w-full focus:shadow-lg focus:shadow-outline ${errors?.first_name ? "border-red-500" : ""
											}`}
										{...register("first_name", { required: true })}
										defaultValue={userInfoUpdate.first_name}
									/>
									<input
										type="text"
										placeholder={textData?.fromText.lastNamePlaceholder}
										className={`focus:outline-none border rounded-lg px-5 h-12 w-full focus:shadow-lg focus:shadow-outline ${errors?.last_name ? "border-red-500" : ""
											}`}
										{...register("last_name", { required: true })}
										defaultValue={userInfoUpdate.last_name}
									/>
								</div>
								{/* NOTE: Username and Email Address are here to preview only. */}
								<div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
									<input
										type="text"
										placeholder={textData?.fromText.usernamePlaceholder}
										className="focus:outline-none border rounded-lg cursor-not-allowed px-5 h-12 w-full focus:shadow-lg focus:shadow-outline"
										name="username"
										readOnly={true}
										disabled={true}
										value={userInfoUpdate.username}
									/>
									<input
										type="email"
										placeholder={textData?.fromText.emailPlaceholder}
										className="focus:outline-none border rounded-lg cursor-not-allowed px-5 h-12 w-full focus:shadow-lg focus:shadow-outline"
										name="email"
										readOnly={true}
										disabled={true}
										value={userInfoUpdate.email}
									/>
								</div>
							</div>
						</div>
						<div className="w-fit mt-8">
							<button
								type="submit"
								className={`bg-primary text-white transition duration-700 font-medium text-base leading-6 px-7 py-4 rounded-md ease-in-out flex items-center gap-2 ${loader ? "bg-secondary" : ''} ${!isDirty ? "cursor-not-allowed bg-base-200" : "hover:bg-secondary"
									}`}
								disabled={loader || !isDirty}
							>
								{loader && (
									<svg
										className={`ml-2 animate-spin h-5 w-5 text-white`}
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										/>
									</svg>
								)}
								{textData?.fromText.buttonText}
							</button>
						</div>
					</form>
				</div>
			</div>
		</Fragment>
	);
}

// NOTE: This is the default data that you can use to test this component
AccountSettings.defaultProps = defaultData;