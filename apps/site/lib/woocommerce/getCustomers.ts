'use server';
// NOTE: Featured products data fetch
import {WooCommerce} from "../utils/woocommerce";

export const getCustomer = async (user_id: string | number) => {
	const {data, error} = await WooCommerce.get(`customers/${user_id}`);
	
	if (!error) {
		
		return {
			data: data,
			error: null
		}
	}
	
	return {
		data: [],
		error: error
	}
}