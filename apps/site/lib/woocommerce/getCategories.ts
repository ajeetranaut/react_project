'use server';
// NOTE: Featured products data fetch
import { wooToken } from "../utils/woocommerce";

// NOTE: WooCommerce API Query Parameters
export type CategoriesQueryProps = {
	context?: string;
	page?: number;
	per_page?: number;
	search?: string;
	exclude?: string;
	include?: string;
	offset?: number;
	order?: 'asc' | 'desc';
	orderby?: 'id' | 'include' | 'name' | 'slug' | 'term_group' | 'description' | 'count';
	hide_empty?: boolean;
	parent?: number;
	product?: number;
	slug?: string;
}

const initialQuery = {
	orderby: 'name',
	order: 'desc',
} as CategoriesQueryProps

export const getCategories = async (query?: CategoriesQueryProps, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
	const newQuery = query ? query : initialQuery

	// map the query object to use on api url
	const queryStr =
		Object.entries(newQuery)
			.map(([key, value]) => `${key}=${value}`)
			.join('&') || ''

	// Define your WooCommerce API endpoint URL
	const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/categories?${queryStr}`;

	// Set up the headers for the API call
	const headers = {
		Authorization: `Basic ${wooToken}`,
	};

	// get x-wp-total from headers
	const response = await fetch(apiUrl, { headers, cache });

	// Parse the JSON response
	const data = await response.json();

	if (response.ok) {
		const productCategories = data?.map((ProductCategory: any) => ({
			id: ProductCategory?.id,
			name: ProductCategory?.name,
			slug: ProductCategory?.slug,
			count: ProductCategory?.count,
			image: ProductCategory?.image?.src,
		}));

		return {
			data: productCategories,
			error: null
		}
	}

	const error = {
		status: response.status,
		message: data.message || 'Unknown error',
	};

	return {
		data: [],
		error: error
	}
}