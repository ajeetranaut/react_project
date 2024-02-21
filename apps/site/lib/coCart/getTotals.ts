'use server';
/**
 * Get cart totals from coCart.
 * @returns  { data, error }
 * @param cartKey
 */
export const getCartTotals = async (cartKey: string) => {

	const res = await fetch(`${process.env.API_URL}/wp-json/cocart/v2/cart/totals?cart_key=${cartKey}`,
		{
			cache: 'no-cache'
		}
	)
	if (res.ok) {
		const cartTotals = await res.json()
		return {
			data: cartTotals,
			error: null
		};

	} else {
		return {
			data: [],
			error: true,
		};
	}

};