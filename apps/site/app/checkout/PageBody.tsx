"use client";

import { useGlobalContext } from "@/context/store";
import { checkoutPolicyData, checkoutSignUpData, companyPolicyData } from "@/data/CheckoutData";
import { ILineItems } from "@/types";
import { BreadcrumbOne, Checkout, Gap } from "@/ui";
import { postOrderHandler } from "@/utils/order.utils";
import { getCustomer } from "lib/woocommerce/getCustomers";
import Link from "next/link";
import { Fragment, useEffect, useState, useTransition } from "react";
import toast from 'react-hot-toast';

const CheckoutPageBody = ({ userId }: { userId?: string }) => {
	const { cartData, mutateCart, cartLoader, dictionaries } = useGlobalContext()
	const [, startTransition] = useTransition();

	// const [loading, setLoading] = useState(false);
	const [formLoader, setFormLoader] = useState(false);

	// checkout-text data
	const textType = dictionaries?.checkout?.textType as 'en' | 'ar' | 'es'
	const policyText = checkoutPolicyData[textType] || checkoutPolicyData['en']
	const companyPolicyText = companyPolicyData[textType] || companyPolicyData['en']
	const checkoutSignUpText = checkoutSignUpData[textType] || checkoutSignUpData['en']

	// cart summary data for checkout
	const cartSummaryData = {
		total: Number(cartData?.totals?.total) / 100,
		subtotal: Number(cartData?.totals?.subtotal) / 100,
		discount: Number(cartData?.totals?.discount_total)
	}

	const lineItemsData = cartData?.items.map((item: any) => {
		return {
			product_id: item.id,
			quantity: item.quantity.value
		}
	}) as ILineItems[]


	const productToast = (message: string, type: any) => {
		if (type == 'success') {
			toast.success(`${message}`);
		} else if (type == 'error') {
			toast.error(`${message}`);
		}
	};

	const [userData, setUserData] = useState<{ billing: any, id: number } | null>(null);

	// NOTE: This is for user data for order after login
	useEffect(() => {
		if (userId) {
			setFormLoader(true)
			const closeId = setTimeout(() => {
				startTransition(() => {
					getCustomer(userId).then((res) => {
						setUserData(res.data);
						setFormLoader(false)
					});
				})
			}, 100);
			return () => clearTimeout(closeId);
		}
	}, [userId]);

	// submit the wp order
	const onSubmit = async (data: any) => {
		try {
			await postOrderHandler(data, lineItemsData, setFormLoader, productToast, startTransition, mutateCart, userData?.id);
		} catch (error) {
			productToast("Sorry ! Something went wrong", "error");
		}
	};

	return (
		<Fragment>
			<BreadcrumbOne title={dictionaries?.checkout?.breadcrumb?.title} />

			{cartData?.items?.length === 0 ? (
				<div className="grid justify-center">
					<p className="text-base sm:text-2xl font-semibold text-primary py-10 text-center">
						There are no items in your cart yet.
					</p>
					<Link href={"/shop/shop-left-sidebar"}>
						<button
							className="flex justify-center mx-auto text-sm sm:text-base font-medium cursor-pointer mt-10 px-4 sm:px-6 py-3 sm:py-4 rounded-md bg-primary text-white hover:opacity-70 transition duration-300 ease-in-out">
							Back to Shop
						</button>
					</Link>
				</div>
			) : (
				<Checkout
					// text-data
					summaryTextData={dictionaries?.checkout?.summaryTextData}
					billingTextData={dictionaries?.checkout?.billingTextData}
					policyData={policyText}
					companyPolicyData={companyPolicyText}
					signUpData={checkoutSignUpText}

					loading={cartLoader}
					formLoader={formLoader}
					formSubmit={onSubmit}
					summeryData={cartSummaryData}
					cartData={cartData?.items}
					autoFill
					userData={userData?.billing}
					userLogin={userData?.billing}
				/>
			)}
			<Gap />
		</Fragment>
	);
};
export default CheckoutPageBody;
