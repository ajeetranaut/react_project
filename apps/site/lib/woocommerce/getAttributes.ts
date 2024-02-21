'use server';
// NOTE: Featured products data fetch
import { wooToken } from "../utils/woocommerce";

export const getAttributes = async (cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
	// Define your WooCommerce API endpoint URL
	const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/attributes`;

	// Set up the headers for the API call
	const headers = {
		Authorization: `Basic ${wooToken}`,
	};

	// Make the API call using fetch and force cache
	const response = await fetch(apiUrl, { headers, cache });

	// Parse the JSON response
	const data = await response.json();

	if (response.ok) {
		return {
			data: data,
			error: null
		}
	}

	const error = {
		status: response.status,
		message: data.message || 'Unknown error',
	};

	return {
		data: [],
		error: error,
	}
}

// NOTE: Attributes terms data fetch
export const getAttributesTerms = async (attributeId: number, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
	if (attributeId > 0) {
		// Define your WooCommerce API endpoint URL
		const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/attributes/${attributeId}/terms?per_page=100`;

		// Set up the headers for the API call
		const headers = {
			Authorization: `Basic ${wooToken}`,
		};

		// Make the API call using fetch and force cache
		const response = await fetch(apiUrl, { headers, cache });

		// Parse the JSON response
		const data = await response.json();


		if (response.ok) {
			const terms = data?.map((Attribute: any) => ({
				value: Attribute?.id,
				name: Attribute?.name,
			}));

			return {
				data: data,
				error: null
			}
		}

		// Handle errors
		const error = {
			status: response.status,
			message: data.message || 'Unknown error',
		};

		return {
			data: [],
			error: error,
		};
	}

	return {
		data: [],
		error: {
			message: "Attribute Id is required"
		},
	};
}