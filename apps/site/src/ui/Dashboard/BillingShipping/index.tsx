"use client";

import { ShippingProps } from "@/types";
import { Country } from "country-state-city";
import dynamic from "next/dynamic";
import { useState } from "react";
import defaultData from "./data.json";
import { textData } from "./type";

const BillingModal = dynamic(() => import('./billingModal'))
const ShippingModal = dynamic(() => import('./shippingModal'))

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	// billings props
	billing: {
		email: string;
		phone: string;
	} & ShippingProps;
	// shipping props
	shipping: ShippingProps;
	// text-data
	textData?: textData
};

export const BillingShipping = ({
	textData,
	// billings props
	billing,
	// shipping props
	shipping,
}: ComponentProps) => {
	const [modal, setModal] = useState<number>(0);
	const [country, setCountry] = useState<
		{
			name: string;
			isoCode: string;
			flag: string;
		}[]
	>(Country.getAllCountries());

	return (
		<section>
			{/*************************  some Billing and Shipping Info **********************/}
			<div className="flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-7">
				<div className="w-full md:w-1/2 p-7 border border-neutral-content rounded-2xl">
					<div className=" flex items-center justify-between">
						<p className="font-medium text-lg text-secondary ">
							{textData?.billingText}
						</p>
						<p onClick={() => setModal(1)} className="text-xs sm:text-sm text-primary cursor-pointer">
							{textData?.editText}
						</p>
					</div>
					{(billing?.first_name || billing?.last_name) && (
						<p className="font-medium text-base mt-4 text-base-300 ">
							{`${billing?.first_name} ${billing?.last_name}`}
						</p>
					)}
					{(billing?.address_1 || billing?.address_2) && (
						<p className="font-normal text-xs sm:text-sm mt-2 text-base-200 ">
							{`${billing?.address_1} ${billing?.address_2 ? `, ${billing.address_2}` : ''}`} <br />
							{`${billing?.state} ${billing?.city ? `, ${billing.city}` : ''}`} <br />
						</p>
					)}
					{(billing?.email || billing?.phone) && (
						<p className="font-normal text-xs sm:text-sm mt-5 text-base-300 ">
							{`${billing?.email}`} <br />
							{`${billing?.phone}`}
						</p>
					)}

					{/* Empty message */}
					{billing?.first_name === "" && billing?.last_name === "" && billing?.address_1 === "" && billing?.address_2 === "" && billing?.state === "" && billing?.city === "" && billing?.email === "" && billing?.phone === "" && (
						<p className="font-normal text-center mt-3 text-base-200 ">
							{textData?.noResultText}
						</p>
					)}
				</div>
				<div className="w-full md:w-1/2 p-7 border border-neutral-content rounded-2xl">
					<div className=" flex items-center justify-between">
						<p className="font-medium text-lg text-secondary ">
							{textData?.shippingText}
						</p>
						<p onClick={() => setModal(2)} className="text-xs sm:text-sm text-primary cursor-pointer">
							{textData?.editText}
						</p>
					</div>
					{(shipping?.first_name || shipping?.last_name) && (
						<p className="font-medium text-base mt-4 text-base-300 ">
							{`${shipping?.first_name} ${shipping?.last_name}`}
						</p>
					)}
					{(shipping?.address_1 || shipping?.address_2) && (
						<p className="font-normal text-xs sm:text-sm mt-2 text-base-200 ">
							{`${shipping?.address_1} ${shipping?.address_2 ? `, ${shipping.address_2}` : ''}`} <br />
							{`${shipping?.state} ${shipping?.city ? `, ${shipping.city}` : ''}`}
						</p>
					)}
					{shipping?.phone && (
						<p className="font-normal text-xs sm:text-sm mt-5 text-base-300 ">
							{`${shipping?.phone}`}
						</p>
					)}

					{/* Empty message */}
					{shipping?.first_name === "" && shipping?.last_name === "" && shipping?.address_1 === "" && shipping?.address_2 === "" && shipping?.state === "" && shipping?.city === "" && (
						<p className="font-normal text-center mt-3 text-base-200 ">
							{textData?.noResultText}
						</p>
					)}
				</div>
			</div>

			{/* TODO: This two form should register by react-hook-form */}

			{/*************************  overlay Billing Info edit modal   **********************/}
			<BillingModal
				modal={modal}
				setModal={setModal}
				textData={textData}
				billing={billing}
				country={country}
				setCountry={setCountry}
			/>
			{/*************************  overlay Shipping Address info edit modal   **********************/}
			<ShippingModal
				modal={modal}
				setModal={setModal}
				textData={textData}
				shipping={shipping}
				country={country}
				setCountry={setCountry}
			/>
		</section>
	);
}

// NOTE: This is the default data that you can use to test this component
BillingShipping.defaultProps = defaultData;