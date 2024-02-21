"use client";

import { FormLoader, LoaderGrowing } from "@/components/formLoader/FormLoader";
import { Country, State } from "country-state-city";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { EmptyCart } from "./EmptyCart";
import { IBillingTextData, ICartDataInterface, IUserDataInterface } from "./checkoutTypes";
import TwoCheckoutLogo from './icons/2checkout_logo.png';

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	cartData?: ICartDataInterface[];
	loading?: boolean;
	billingTextData?: IBillingTextData;
	formSubmit?: (data: any) => void;
	formLoader?: boolean;
	autoFill?: boolean;
	userData?: IUserDataInterface;
	userLogin?: boolean;
};

export const OrderForm = (
	{
		cartData,
		loading,
		billingTextData,
		formSubmit,
		formLoader,
		autoFill,
		userData,
		userLogin,
	}: ComponentProps) => {
	const country = Country.getAllCountries();
	const [state, setState] = useState(State.getAllStates());

	// billing form register hook
	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors, isValid },
	} = useForm({
		mode: "onBlur",
	});

	/* -------------------------------------------------------------------------- */
	/*                           state watch for country                          */
	/* -------------------------------------------------------------------------- */
	useEffect(() => {
		if (watch("country")) {
			setState(State.getStatesOfCountry(watch("country")));
			// if autoFill is true then auto set the state value
			if (autoFill && userData) {
				setValue("state", userData.state, { shouldValidate: true });
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [watch("country"), autoFill, userData]);

	/* -------------------------------------------------------------------------- */
	/*      if autoFill is true then auto fill the form using useEffect hook      */
	/* -------------------------------------------------------------------------- */
	useEffect(() => {
		if (autoFill && userData) {
			// react hook form setValue
			Object.keys(userData).forEach((key) => {
				// if country is true then set the state
				if (key === "country") setState(State.getStatesOfCountry(userData.country));
				// @ts-ignore
				setValue(key, userData[key], { shouldValidate: true });
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [autoFill, userData, userLogin]);

	/* -------------------------------------------------------------------------- */
	/*                             form submit handler                            */
	/* -------------------------------------------------------------------------- */
	const onSubmit = async (data: any) => {
		// form data console
		if (formSubmit) {
			formSubmit(data);
		} else {
			console.log("formSubmit", data);
		}
	};

	return (
		<div className="2xl:w-3/4 lg:w-2/3 w-11/12 mx-auto">
			<div className="bg-white shadow-md rounded-xl overflow-hidden p-6 relative">
				{/* Form Loader */}
				{(!cartData || loading) && <LoaderGrowing />}
				<div className="grid lg:gap-3 gap-8">
					{/* Form Title */}
					<div className="flex p-2.5 bg-info-content rounded font-medium text-xl text-base-content mb-6">
						<h3 className="w-full md:w-4/12 sm:w-5/12 ml-2">{billingTextData?.headerText}</h3>
					</div>
					{/* Form input lists */}
					{cartData && cartData.length > 0 && (
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="w-full grid gap-8">
								{/* First Name & Last Name */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									{/* First Name */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.first_name ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="first_name"
											>
												{billingTextData?.fromText?.firstNamePlaceholder}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 ${errors.first_name ? "border-red-400" : "border-[#DDE6F5]"
													} text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline`}
												type="text"
												placeholder={billingTextData?.fromText?.firstNamePlaceholder}
												id="first_name"
												{...register("first_name", {
													required: "First Name is required",
												})}
											/>
										</div>
									</div>
									{/* Last Name */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.last_name ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="last_name"
											>
												{billingTextData?.fromText?.lastNamePlaceholder}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.last_name ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="text"
												placeholder={billingTextData?.fromText?.lastNamePlaceholder}
												id="last_name"
												{...register("last_name", {
													required: "Last Name is required",
												})}
											/>
										</div>
									</div>
								</div>
								{/* company name & country */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									{/* Company name */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label className="absolute -top-2 text-[#85929E] left-3 bg-white text-xs" htmlFor="company">
												{billingTextData?.fromText?.companyPlaceholder} ({billingTextData?.fromText?.optionalText})
											</label>
											<input
												className="appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
												type="text"
												placeholder={billingTextData?.fromText?.companyPlaceholder}
												id="company"
												{...register("company")}
											/>
										</div>
									</div>
									{/* Country / Region */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.country ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="country"
											>
												{billingTextData?.fromText?.countryLabel}
											</label>
											<select
												title="Country"
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.country ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												id="country"
												{...register("country", {
													required: "Country is required",
												})}
											>
												<option value="">{billingTextData?.fromText?.countryPlaceholder}</option>
												{country.map((item, index) => (
													<option key={index} value={item.isoCode}>
														{item.flag} {item.name}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								{/* Street address */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									<div className="w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.address_1 ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="address_1"
											>
												{billingTextData?.fromText?.addressLabel}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.address_1 ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="text"
												placeholder={billingTextData?.fromText?.addressPlaceholder}
												id="address_1"
												{...register("address_1", {
													required: "Address is required",
												})}
											/>
										</div>
									</div>
								</div>
								{/* Town / City & District */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									{/* Town / City */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.city ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="city"
											>
												{billingTextData?.fromText?.cityLabel}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.city ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="text"
												placeholder={billingTextData?.fromText?.cityPlaceholder}
												id="city"
												{...register("city", {
													required: "City is required",
												})}
											/>
										</div>
									</div>
									{/* State */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.state ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="state"
											>
												{billingTextData?.fromText?.stateLabel}
											</label>
											<select
												title="state"
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.state ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												id="state"
												{...register("state", {
													required: "State is required",
												})}
											>
												<option value="">{billingTextData?.fromText?.statePlaceholder}</option>
												{state.map((item: any, index: any) => (
													<option key={index} value={item.value}>
														{item.name}
													</option>
												))}
											</select>
										</div>
									</div>
								</div>
								{/* Postcode / ZIP & Phone */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									{/* Postcode / ZIP */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.postcode ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="postcode"
											>
												{billingTextData?.fromText?.postCodeLabel}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.postcode ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="text"
												placeholder={billingTextData?.fromText?.postCodePlaceholder}
												id="postcode"
												{...register("postcode", {
													required: "Postcode is required",
												})}
											/>
										</div>
									</div>
									{/* Phone */}
									<div className="sm:w-1/2 w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.phone ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="phone"
											>
												{billingTextData?.fromText?.phoneLabel}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.phone ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="tel"
												placeholder={billingTextData?.fromText?.phonePlaceholder}
												id="phone"
												{...register("phone", {
													required: "Phone is required",
												})}
											/>
										</div>
									</div>
								</div>
								{/* Email address */}
								<div className="sm:flex grid sm:gap-5 gap-8">
									<div className="w-full">
										<div className="relative">
											<label
												className={`absolute -top-2 ${errors.email ? "text-red-400" : "text-[#85929E]"
													} left-3 bg-white text-xs`}
												htmlFor="email"
											>
												{billingTextData?.fromText?.emailLabel}
											</label>
											<input
												className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.email ? "border-red-400" : "border-[#DDE6F5]"
													}`}
												type="email"
												placeholder={billingTextData?.fromText?.emailPlaceholder}
												id="email"
												{...register("email", {
													required: "Email is required",
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message: "invalid email address",
													},
												})}
											/>
										</div>
									</div>
								</div>
								{/* Account Policy checkbox */}
								{/* {!userLogin && (
                                    <div className="sm:flex grid sm:gap-5 gap-8">
                                        <div className="w-full">
                                            <div className="relative">
                                                <div
                                                    className={`border rounded-md w-full flex gap-3 py-3.5 px-5 ${errors.accountPolicy
                                                        ? "text-error border-error"
                                                        : "border-[#DDE6F5] text-[#85929E]"
                                                        } leading-tight`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        {...register("accountPolicy", {
                                                            required: "Account Policy is required",
                                                        })}
                                                        defaultChecked={!userLogin}
                                                        id="accountPolicy"
                                                        className="flex-none form-check-input h-4 w-4 mt-1 border border-gray-300 rounded-sm bg-white checked:bg-accent checked:border-accent focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer group"
                                                    />
                                                    <label htmlFor="accountPolicy">
                                                        You are not logged in. We will automatically create a new account with your email
                                                        address. We will send you an email with your account details. If you already have an
                                                        account, please log in.
                                                    </label>
                                                </div>
                                                <label
                                                    className={`absolute -top-2 ${errors.accountPolicy ? "text-error" : "text-[#85929E]"
                                                        } left-3 bg-white text-xs`}
                                                >
                                                    Account Policy
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )} */}
							</div>
							<div>
								{/* Order Button */}
								<button
									id="buy-button"
									type="submit"
									className={`${isValid
										? formLoader
											? "bg-gray-800 shadow-md text-white cursor-not-allowed"
											: "bg-primary shadow-4xl text-white hover:opacity-70 cursor-pointer"
										: "bg-primary text-white cursor-not-allowed opacity-50"
										} transition-all duration-300 ease-in-out flex justify-center items-center gap-4 rounded-md text-base font-semibold font-Roboto capitalize py-4 px-7 mt-6`}
									disabled={!isValid || formLoader}
								>
									{formLoader ? billingTextData?.fromText?.processButtonText : billingTextData?.fromText?.orderButtonText}
									{formLoader && <FormLoader color="text-white" />}
								</button>
								{/* Add a image  */}
								<div className="flex justify-center mt-6 w-1/3">
									<Image
										src={TwoCheckoutLogo}
										alt="payment icon"
										width="300"
										height="100"
										priority
										placeholder="blur"
										blurDataURL={`${TwoCheckoutLogo}`}
									/>
								</div>
								{/* Return to cart */}
								<div className="flex justify-between mt-6">
									<a
										href="/cart"
										className="flex items-center font-semibold text-base-300/80 hover:text-red-500 text-base transition hover:duration-300 group"
									>
										<svg
											className="mr-2.5 fill-base-300/80 group-hover:fill-red-500 transition hover:duration-300"
											width="16"
											height="10"
											viewBox="0 0 16 10"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292892 5.70711C-0.097633 5.31658 -0.0976329 4.68342 0.292892 4.29289L4.29289 0.292892C4.68342 -0.0976324 5.31658 -0.0976324 5.70711 0.292893C6.09763 0.683416 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z"
											/>
										</svg>
										{billingTextData?.returnCartText}
									</a>
								</div>
							</div>
						</form>
					)}
					{/* Cart Empty */}
					{(!cartData || cartData?.length === 0) && (
						<EmptyCart emptyText={billingTextData?.emptyText} />
					)}
				</div>
			</div>
		</div>
	);
};
