import type { Metadata } from "next";
import { Fragment } from "react";
import ProductPageBody from "./PageBody";

import parse from 'html-react-parser';
import { getSeoHead } from "lib/rankmath/getHead";
import { arrangeSeoData } from "lib/rankmath/utils";
import { getProducts } from "lib/woocommerce/getProducts";

/**
 * get seo data from rank-math
 * @param url
 * @returns
 * @constructor
 * rank-math seo docs:
 * @see https://rankmath.com/kb/headless-cms-support/
 */

export const dynamicParams = true

export async function generateMetadata({ params }: any): Promise<Metadata> {
	const url = process.env.API_URL as string
	// *** fetch the rank-math seo data ***
	const seoData = await getSeoHead(`${url}/product/${params?.slug}`)

	// *** parse and filter seo data ***
	const parseSeoData = parse(seoData?.head || '') as any
	const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

	// *** arrange the seo array into required object ***
	const seoObject = arrangeSeoData(filterEmptySeoData)

	return {
		...seoObject,
	}
}

const ProductPage = ({ params }: { params: { slug: string } }) => {

	return (
		<Fragment>
			<ProductPageBody slug={params?.slug} />
		</Fragment>
	);
};
export default ProductPage;

export async function generateStaticParams() {

	const { data: productData } = await getProducts({
		per_page: 100,
	})


	return productData.map((post: any) => ({
		slug: post.slug,
	}))
}
