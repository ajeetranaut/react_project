'use server';
// NOTE: Featured products data fetch
import { wooToken } from "../utils/woocommerce";

export const getSearchProducts = async (searchWord: string, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
	// Define your WooCommerce API endpoint URL
	const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products?search=${searchWord}`;

	// Set up the headers for the API call
	const headers = {
		Authorization: `Basic ${wooToken}`,
	};

	// Make the API call using fetch and force cache
	const response = await fetch(apiUrl, { headers, cache });

	// total products
	const total = response.headers.get('x-wp-total');
	const totalPages = response.headers.get('x-wp-totalpages');

	// Parse the JSON response
	const data = await response.json();

	if (response.ok) {
		const featuredProducts = data?.map((Product: any) => ({
			id: Product?.id,
			name: Product?.name,
			slug: Product?.slug,
			price: Product?.price,
			image: Product?.images,
			description: Product?.description,
			short_description: Product?.short_description,
			categories: Product?.categories,
			tags: Product?.tags,
			attributes: Product?.attributes,
			rating: Product?.average_rating,
			reviews: Product?.rating_count,
			createdDate: Product?.date_created,
			modifiedDate: Product?.date_modified,
			stock: Product?.stock_status,
			on_sale: Product?.on_sale,
			sale_price: Product?.sale_price,
			regular_price: Product?.regular_price,
			discount: (100 * (Product?.regular_price - Product?.price)) / Product?.regular_price,
		}));

		return {
			data: featuredProducts,
			error: null,
			total: total,
			totalPages: totalPages,
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
		total: total,
		totalPages: totalPages,
	}
}