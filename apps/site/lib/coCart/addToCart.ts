'use server';
/**
 * Add to cart using coCart.
 * @param  cartBody | id, quantity amd coCart available props
 * @param  cartKey
 * @returns  { data, message,error }
 */
export const addCartItem = async (cartBody: any, cartKey?: any) => {
	try {
		// if no cart key is available, call api to create a new cart
		if (!cartKey) {
			const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart/add-item`, {
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
					message: "Successfully added to cart",
					data: data,
					error: null
				};
			} else {
				const resData = await res.json()
				return {

					message: resData?.message || "Failed added to cart",
					data: null,
					error: true,
				};
			}
		} else {
			// if cart key is available, call api to add into existing cart
			const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart/add-item?cart_key=${cartKey}`, {
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
					message: "Successfully added to cart",
					data: data,
				};
			} else {
				const resData = await res.json()
				return {
					message: resData?.message || "Failed added to cart",
					data: null,
					error: true,
				};
			}
		}
	} catch (error: any) {
		throw error;
	}
};

