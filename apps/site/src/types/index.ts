// Product Type Definition
export interface IProduct {
	image: {
		src: string;
		alt: string;
	}[];
	discount: number;
	id: number;
	name: string;
	type: string;
	externalUrl: string;
	short_description: string;
	description: string;
	regular_price: string;
	sale_price: string;
	price: string;
	stock: string;
	rating: number;
	reviews: number;
	attributes: {
		name: string;
		options: [string]
	}[];
	defaultAttributes: {
		name: string;
		option: string;
	}[];
}

// Blogs Type Definition
export interface IBlog {
	id: number;
	title: string;
	slug: string;
	featuredmedia: {
		sourceUrl: string;
		alt: string;
	};
	category: {
		name: string;
	}[]
	content: string;
	author: string;
	authorId: number;
	publishTime: string;
	tags: ITag[];
}

// Category Type Definition
export interface ICategory {
	name: string;
	count: number;
	slug: string;
}

// Tag Type Definition
export interface ITag {
	name: string;
	slug: string;
}

// cart Type Definition
export interface ICart {
	items: {
		id: number;
		title: string;
		slug: string;
		item_key: string;
		featured_image: string;
		price: string;
		quantity: {
			value: number;
		}
		totals: {
			total: number;
			subtotal: string;
		}
	}[],
	totals: {
		total: number;
		subtotal: string;
		discount_total: string;
	}
}

// cart Type Definition
export interface ICartTotals {
	total: number;
	subtotal: string;
}

// cart Type Definition
export interface ILineItems {
	product_id: number;
	quantity: number;
}

// cart Type Definition
export interface ICheckoutBillings {
	address_1: string;
	city: string;
	company: string;
	country: string;
	email: string;
	first_name: string;
	last_name: string;
	phone: string;
	postcode: string;
	state: string;
}

/**
 * Shipping Type Definition
 */
export type ShippingProps = {
	address_1: string;
	address_2: string;
	city: string;
	company: string;
	country: string;
	first_name: string;
	last_name: string;
	postcode: string;
	state: string;
	phone: string;
}

/**
 * Order History Type Definition
 */
export type IOrderHistoryData = {
	id: number;
	date: string;
	itemLength: number;
	total: number;
	status: string;
}

/**
 * Order Details Type Definition
 */
export type IOrderDetailsData = {
	billing: {
		address_1: string;
		email: string;
		phone: string;
	};
	shipping: {
		address_1: string;
		phone: string;
	};
	orderInfo: {
		id: number;
		payment_method: string;
		subtotal: string;
		discount_total: string;
		shipping_total: string;
		total: string;
	};
	line_items: {
		id: number;
		name: string;
		image: {
			id: number;
			src: string;
		};
		price: number;
		quantity: number;
		total: string;
	}[];
}

/**
 * Product Category Type Definition
 */
export type IProductCategory = {
	id: number;
	count: number;
	image: string;
	name: string;
	slug: string;
}