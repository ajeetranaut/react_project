import {ICheckoutBillings, ILineItems} from "@/types";
import {deleteCookie} from "cookies-next";
import {createOrder} from "lib/woocommerce/getOrders";

/**
 *create order function
 * @returns productToast
 */
export const postOrderHandler = async (
	data: ICheckoutBillings,
	lineItemsData: ILineItems[],
	setLoading: (value: boolean) => void,
	productToast: (msg: string, val: string) => void,
	startTransition: (callback: () => void) => void,
	mutateCart: () => Promise<any>,
	customerId?: number,
) => {
	setLoading(true)
	if (!lineItemsData || lineItemsData?.length < 1) {
		setLoading(false);
		return productToast("Line Items Data Missing", "error");
	}
	const orderData = {
		billing: data,
		shipping: data,
		line_items: lineItemsData,
		customer_id: customerId
	};
	try {
		startTransition(() => {
			createOrder(orderData).then((res: any) => {
				if (!res?.error) {
					mutateCart().then(() => {
						deleteCookie("cart_key");
						setLoading(false)
						productToast("Your order is complete!", "success");
					})
				} else {
					setLoading(false);
					productToast("Sorry ! Something went wrong", "error");
				}
			})
		})
	} catch (error) {
		setLoading(false);
		productToast("Sorry ! Something went wrong", "error");
	}
};