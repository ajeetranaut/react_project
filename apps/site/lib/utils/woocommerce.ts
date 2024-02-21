import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
// *** create woocommerce instance
/**
 * Create a woocommerce instance.
 * @param  url
 * @param  consumerKey
 * @param  consumerSecret
 * @param  version
 * @param  queryStringAuth
 */
export const WooCommerce = new WooCommerceRestApi({
	url: `${process.env.API_URL}`,
	consumerKey: `${process.env.WOOCOMMERCE_CONSUMER_KEY}`,
	consumerSecret: `${process.env.WOOCOMMERCE_CONSUMER_SECRET}`,
	version: "wc/v3",
	queryStringAuth: true,
});

// *** create token by woocommerce api key and secret
/**
 * Create a token by woocommerce api key and secret.
 */
export const wooToken = Buffer.from(
	`${process.env.WOOCOMMERCE_CONSUMER_KEY}:${process.env.WOOCOMMERCE_CONSUMER_SECRET}`
).toString('base64')