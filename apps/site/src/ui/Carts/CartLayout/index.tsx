"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import { useGlobalContext } from "@/context/store";
import { CartItems, CartSummary } from "@/ui";
import { removeCartItemHandler, updateCartItemHandler } from "@/utils/cart.utils";
import { getCookie } from "cookies-next";
import { useTransition } from "react";
import toast from 'react-hot-toast';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	cartItemsData: {
		title: string;
		slug: string;
		item_key: string;
		featured_image: string;
		price: string;
		quantity: {
			value: number;
		}
		totals: {
			total: number;
			subtotal: string;
		}
	}[];
	cartItemsText?: {
		product: string;
		price: string;
		quantity: string;
		subtotal: string;
	}
	cartSummaryData: {
		subtotal: string;
		total: string;
	};
	cartSummaryText?: {
		headerText: string;
		subtotalText: string;
		shippingText: string;
		shippingValue: string;
		totalText: string;
		buttonText: string;
	}
};

export const CartLayout = ({ cartItemsData, cartItemsText, cartSummaryData, cartSummaryText }: ComponentProps) => {
	const [, startTransition] = useTransition();
	const { mutateCart, cartLoader } = useGlobalContext()

	const productToast = (message: string, type: any) => {
		if (type == 'error') {
			toast.error(`${message}`);
		} else {
			toast.success(`${message}`);
		}
	};

	const onRemoveCartItem = (itemKey: string) => {
		const cartKey = getCookie("cart_key");
		// @ts-ignore
		removeCartItemHandler(itemKey, cartKey, productToast, startTransition, mutateCart);
	};
	const onUpdateCartItem = (itemKey: string, count: number) => {
		const cartKey = getCookie("cart_key");
		// @ts-ignore
		updateCartItemHandler(itemKey, cartKey, count, productToast, startTransition, mutateCart);
	};
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 mx-auto gap-7">
			<div className="lg:col-span-8 relative">
				{cartLoader && (
					<div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex items-center justify-center">
						<FormLoader color="text-primary" size="w-7 h-7" />
					</div>
				)}
				<CartItems itemsData={cartItemsData ? cartItemsData : []} headerText={cartItemsText} onRemoveCartItem={onRemoveCartItem} onUpdateCartItem={onUpdateCartItem} />
			</div>
			<div className="lg:col-span-4 relative">
				{cartLoader && (
					<div className="absolute top-0 left-0 w-full h-full backdrop-blur-sm z-50 flex items-center justify-center">
						<FormLoader color="text-primary" size="w-7 h-7" />
					</div>
				)}
				<CartSummary summaryData={cartSummaryData} textData={cartSummaryText} />
			</div>
		</div>
	);
}

// NOTE: This is the default data that you can use to test this component
CartLayout.defaultProps = defaultData;