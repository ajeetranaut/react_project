'use server';

/**
 * Get cart data from coCart.
 * @param cartKey
 * @returns  { data, error }
 */
export const getCartData = async (cartKey: string) => {
	const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart?cart_key=${cartKey}`,
		{
			cache: 'no-cache'
		}
	)

	if (res.ok) {
		const cartData = await res.json()
		return {
			data: cartData,
			error: null
		};

	} else {
		return {
			data: {},
			error: true,
		};
	}

};