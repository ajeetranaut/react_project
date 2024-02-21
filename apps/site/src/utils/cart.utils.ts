
import { setCookie } from "cookies-next";
import { addCartItem } from "../../lib/coCart/addToCart";
import { removeCartItem, updateCartItem } from "../../lib/coCart/itemInCart";

/**
 *add to cart function
 * @returns productToast
 * @param data
 * @param attributesValue
 * @param setLoading
 * @param count
 * @param productToast
 * @param cartKey
 * @param startTransition
 * @param mutateCart
 */
export const addToCartHandler = async (
	data: any,
	attributesValue: any,
	setLoading: any,
	count: number,
	productToast?: any,
	cartKey?: any,
	startTransition?: any,
	mutateCart?: any,
) => {
	setLoading(true);
	let productVariables = {}
	if (data?.type === "variable") {
		productVariables = {
			variation: {
				...attributesValue
			}
		}
	}

	const cartBody = {
		id: `${data?.id}`,
		quantity: `${count}`,
		...productVariables
	};
	startTransition(() => {
		addCartItem(cartBody, cartKey).then((res: any) => {
			if (!res?.error) {
				setCookie("cart_key", res?.data?.cart_key)
				mutateCart().then(() => {
					productToast("Product added to cart", "success");
					setLoading(false);
				})
			} else {
				productToast(res?.message || "Something went wrong", "error");
				setLoading(false);
			}
		})
	})
};

/**
 *cart & buy now function
 * @returns productToast
 * @param data
 * @param attributesValue
 * @param setbuyLoading
 * @param count
 * @param productToast
 * @param router
 * @param cartKey
 * @param startTransition
 * @param mutateCart
 */
export const addBuyNowHandler = async (
	data: any,
	attributesValue: any,
	setbuyLoading: any,
	count: number,
	productToast: any,
	router: any,
	cartKey?: any,
	startTransition?: any,
	mutateCart?: any,
) => {
	setbuyLoading(true);
	let productVariables = {}
	if (data?.type === "variable") {
		productVariables = {
			variation: {
				...attributesValue
			}
		}
	}
	const cartBody = {
		id: `${data?.id}`,
		quantity: `${count}`,
		...productVariables
	};
	startTransition(() => {
		addCartItem(cartBody, cartKey).then((res: any) => {
			if (!res?.error) {
				setCookie("cart_key", res?.data?.cart_key)
				mutateCart().then(() => {
					setbuyLoading(false);
					router.push("/checkout");
					productToast("Product added to cart", "success");
				})
			} else {
				productToast("Something went wrong", "error");
				setbuyLoading(false);
			}
		})
	})
};

/**
 *  remove from cart function
 * @param itemKey
 * @param cartKey
 * @param productToast
 * @param startTransition
 * @param mutateCart
 */
export const removeCartItemHandler = async (itemKey: any, cartKey: any, productToast: any, startTransition: any, mutateCart: any) => {
	try {
		startTransition(() => {
			removeCartItem(itemKey, cartKey).then((res: any) => {
				if (!res?.error) {
					setCookie("cart_key", res?.data?.cart_key)
					mutateCart().then(() => {
						productToast("Product Successfully Removed from the cart", "success");
					})
				} else {
					productToast("Something went wrong", "error");
				}
			})
		})
	} catch (error) {
		productToast("Sorry ! Something went wrong", "error");
	}
};

/**
 *  update  cart function
 * @returns productToast
 * @param itemKey
 * @param cartKey
 * @param count
 * @param productToast
 * @param startTransition
 * @param mutateCart
 */
export const updateCartItemHandler = async (itemKey: any, cartKey: any, count: number, productToast: any, startTransition: any, mutateCart: any) => {
	const cartBody = {
		quantity: `${count}`,
	};
	try {
		startTransition(() => {
			updateCartItem(itemKey, cartKey, cartBody).then((res: any) => {
				if (!res?.error) {
					mutateCart().then(() => {
						productToast("Product Successfully updated", "success");
					})
				} else {
					productToast("Sorry ! Something went wrong", "error");
				}
			})
		})

	} catch (error) {
		productToast("Sorry ! Something went wrong", "error");
	}
};
