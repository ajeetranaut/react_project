'use server';
/**
 * Get cart totals from coCart.
 * @returns  { data, error }
 * @param itemKey
 * @param cartKey
 */
export const removeCartItem = async (itemKey: any, cartKey: string) => {
	try {
		const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart/item/${itemKey}?cart_key=${cartKey}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-cache',
		})

		if (res.ok) {
			const data = await res.json()
			return {
				message: "Successfully updated cart",
				data: data,
			};
		} else {
			return {
				message: "Failed added to updated cart",
				data: null,
				error: true
			};
		}

	} catch (error: any) {

		throw error;
	}
};

/**
 * Update cart item from coCart.
 * @param itemKey
 * @param cartKey
 * @param cartBody
 */
export const updateCartItem = async (itemKey: string, cartKey: string, cartBody: any) => {
	try {
		// if cart key is available, call api to add into existing cart
		const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart/item/${itemKey}?cart_key=${cartKey}`, {
			method: 'POST',
			body: JSON.stringify(cartBody),
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-cache',
		})

		if (res.ok) {
			const data = await res.json()
			return {
				message: "Successfully updated cart",
				data: data,
			};
		} else {
			return {
				message: "Failed added to cart",
				data: null,
				error: true
			};
		}
	} catch (error: any) {
		throw error;
	}
};
