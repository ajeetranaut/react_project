import type { Metadata } from "next";

import parse from 'html-react-parser';
import { getSeoHead } from "lib/rankmath/getHead";
import { arrangeSeoData } from "lib/rankmath/utils";
import PageBody from "./PageBody";

/**
 * get seo data from rank-math
 * @param url
 * @returns
 * @constructor
 * rank-math seo docs:
 * @see https://rankmath.com/kb/headless-cms-support/
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const url = process.env.API_URL as string
	// *** fetch the rank-math seo data ***
	const seoData = await getSeoHead(`${url}/about-us`)

	// *** parse and filter seo data ***
	const parseSeoData = parse(seoData?.head || '') as any
	const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

	// *** arrange the seo array into required object ***
	const seoObject = arrangeSeoData(filterEmptySeoData)

	return {
		...seoObject,
	}
}

const Page = () => {
	return (
		<PageBody />
	);
};

export default Page;
