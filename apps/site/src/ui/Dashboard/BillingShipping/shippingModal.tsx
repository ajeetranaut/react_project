'use client';
import { ShippingProps } from '@/types';
import { updateUser } from 'lib/woocommerce/user/getUser';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { textData } from './type';

type Props = {
	textData?: textData
	shipping: ShippingProps;
	modal: number;
	setModal: (modal: number) => void;
	country: {
		name: string;
		isoCode: string;
		flag: string;
	}[];
	setCountry: (country: {
		name: string;
		isoCode: string;
		flag: string;
	}[]) => void;
}

const ShippingModal = ({
	textData,
	shipping,
	modal,
	setModal,
	country,
}: Props) => {
	// ** auth user session
	const { data: user } = useSession()
	// ** This is the loader state
	const [loader, setLoader] = useState(false)
	// *** Server side data calling
	const [, startTransition] = useTransition()
	// ** Form register by react-hook-form
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm({
		defaultValues: shipping
	})

	// ** This is the handle billing on submit
	const shippingOnSubmit = async (data: any) => {
		setLoader(true)
		startTransition(() => {
			updateUser({
				shipping: data
			}, Number(user?.user?.id), '/dashboard', 'page').then((res) => {
				const { error } = res

				if (error) {
					toast.error(error?.message)
					return
				}
				toast.success('Shipping updated successfully')
				setModal(0)
				reset()
				setLoader(false)
			}).catch((err) => {
				toast.error(err?.data?.message)
				setLoader(false)
			})
		})
	}

	return (
		<div className={`fixed inset-0 z-50 overflow-y-auto ${modal === 2 ? "block" : "hidden"}`}>
			<div onClick={() => setModal(0)} className="fixed inset-0 transition-opacity">
				<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
			</div>
			<div className="absolute left-0 right-0 top-0 bottom-0 rounded-lg transform transition-all max-w-3xl w-full h-fit m-auto overflow-y-auto">
				<div className="bg-white p-4 w-full rounded-lg">
					<div className="flex items-center justify-between">
						<h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-secondary">
							{textData?.shippingText}
						</h3>
						<div
							onClick={() => setModal(0)}
							className="flex items-center justify-center rounded-full w-7 h-7 cursor-pointer shadow-lg"
						>
							<RxCross2 />
						</div>
					</div>
					<form onSubmit={handleSubmit(shippingOnSubmit)}>
						<div className="space-y-2 sm:space-y-5 mt-6 w-full">
							<div className="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-5">
								{" "}
								<input
									type="text"
									placeholder={textData?.fromText?.firstNamePlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.first_name ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.first_name}
									{...register("first_name", { required: true })}
								/>
								<input
									type="text"
									placeholder={textData?.fromText?.lastNamePlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.last_name ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.last_name}
									{...register("last_name", { required: true })}
								/>
								<input
									type="text"
									placeholder={textData?.fromText?.companyPlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.company ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.company}
									{...register("company")}
								/>
							</div>
							<div className="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-5">
								<select
									title="country"
									className={`appearance-none border rounded-md w-full h-11 px-5 text-base-300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon ${errors?.country ? "border-red-400 text-red-400" : ""
										}`}
									{...register("country", { required: true })}
								>
									<option value="">{shipping?.country === "" ? textData?.fromText?.countryPlaceholder : shipping?.country}</option>
									{country.map((item, index) => (
										<option key={index} value={item.isoCode} selected={item.isoCode === shipping?.country}>
											{item.flag} {item.name}
										</option>
									))}
								</select>
								<input
									type="text"
									placeholder={textData?.fromText?.phonePlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${errors?.phone ? "border-red-400 text-red-400" : ""
										}`}
									defaultValue={shipping?.phone}
									{...register("phone", { required: true })}
								/>
								<input
									type="text"
									placeholder={textData?.fromText?.address1Placeholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.address_1 ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.address_1}
									{...register("address_1", { required: true })}
								/>
							</div>
							<div className="flex  items-center gap-2 sm:gap-5">
								<input
									type="text"
									placeholder={textData?.fromText?.address2Placeholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.address_2 ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.address_2}
									{...register("address_2")}
								/>
								<input
									type="text"
									placeholder={textData?.fromText?.statePlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.state ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.state}
									{...register("state", { required: true })}
								/>
							</div>
							<div className="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-5">
								<input
									type="text"
									placeholder={textData?.fromText?.cityPlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.city ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.city}
									{...register("city", { required: true })}
								/>
								<input
									type="text"
									placeholder={textData?.fromText?.postCodePlaceholder}
									className={`focus:outline-none border rounded-md px-5 h-11 w-full focus:shadow-lg focus:shadow-outline placeholder:text-sm ${
										// @ts-ignore
										errors?.postcode ? 'border-red-400 text-red-400' : ''
										}`}
									defaultValue={shipping?.postcode}
									{...register("postcode", { required: true })}
								/>
							</div>
							<div className="w-fit">
								<button
									type='submit'
									className={`bg-primary text-white hover:bg-secondary transition hover:duration-700 text-base leading-6 px-6 py-2.5 font-medium  rounded-md ease-in-out flex items-center gap-2 ${loader && "bg-secondary"}`}
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
									{textData?.fromText?.buttonText}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ShippingModal