'use server';
// NOTE: Featured products data fetch

// NOTE: WooCommerce API Query Parameters
export type ProductQueryProps = {
	per_page?: number;
	page?: number;
	search?: string;
	category?: number;
	tag?: string;
	min_price?: string;
	max_price?: string;
	on_sale?: boolean;
	featured?: boolean;
	status?: string;
	sku?: string;
	slug?: string;
	category_operator?: string;
	tag_operator?: string;
	attribute?: string;
	attribute_term?: any;
	attribute_operator?: string;
	attribute_value?: string;
	attribute_visibility?: string;
	type?: string;
	in_stock?: boolean;
	in_stock_operator?: string;
	orderby?: string;
	order?: string;
	stock_status?: string;
	tax_class?: string;
	shipping_class?: string;
	shipping_class_operator?: string;
	date_on_sale_from?: string;
	date_on_sale_from_gmt?: string;
	date_on_sale_to?: string;
	date_on_sale_to_gmt?: string;
	date_modified?: string;
	date_modified_gmt?: string;
	date_created?: string;
	date_created_gmt?: string;
	parent?: string;
	parent_operator?: string;
	exclude?: number[];
	include?: number[];
}

const initialQuery = {
	per_page: 10,
	orderby: 'date',
	order: 'desc',
	status: 'publish',
}

export const getProducts = async (query?: ProductQueryProps, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache', revalidate?: number) => {
	const newQuery = query ? query : initialQuery

	// map the query object to use on api url
	const queryStr =
		Object.entries(newQuery)
			.map(([key, value]) => `${key}=${value}`)
			.join('&') || ''

	// Define your WooCommerce API endpoint URL
	const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/?${queryStr}`;

	// Define your WooCommerce API credentials (consumer_key and consumer_secret)
	const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
	const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

	// Generate the authorization string for Basic Auth
	const authString = btoa(`${consumerKey}:${consumerSecret}`);

	// Set up the headers for the API call
	const headers = {
		Authorization: `Basic ${authString}`,
	};

	// Make the API call using fetch and force cache
	const response = await fetch(apiUrl, {
		headers,
		...{
			...(revalidate ? {} : { cache }),
			...(revalidate ? {
				next: {
					revalidate: revalidate
				}
			} : {}),
		}
	});

	const total = response.headers.get('x-wp-total');
	const totalPages = response.headers.get('x-wp-totalpages');

	// Parse the JSON response
	const data = await response.json();

	// Check for errors in the response
	if (response.ok) {
		// Process the data as needed
		const featuredProducts = data?.map((Product: any) => ({
			id: Product?.id,
			name: Product?.name,
			slug: Product?.slug,
			type: Product?.type,
			externalUrl: Product?.external_url,
			price: Product?.price,
			image: Product?.images,
			description: Product?.description,
			short_description: Product?.short_description,
			categories: Product?.categories,
			tags: Product?.tags,
			attributes: Product?.attributes,
			defaultAttributes: Product?.default_attributes,
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
			data: featuredProducts, // Assuming you want to return an array of products
			error: null,
			total: Number(total),
			totalPages: Number(totalPages),
		};
	} else {
		// Handle errors
		const error = {
			status: response.status,
			message: data.message || 'Unknown error',
		};

		return {
			data: [],
			error: error,
			total: 0,
			totalPages: 0,
		};
	}
};
