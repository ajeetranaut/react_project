import parse from 'html-react-parser';
import { getSeoHead } from "lib/rankmath/getHead";
import { arrangeSeoData } from "lib/rankmath/utils";
import { getTags } from 'lib/wordpress/getTags';
import type { Metadata } from "next";
import { Fragment } from "react";
import BlogCategoryBody from "./PageBody";

/**
 * get seo data from rank-math
 * @param url
 * @returns
 * @constructor
 * rank-math seo docs:
 * @see https://rankmath.com/kb/headless-cms-support/
 */
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const url = process.env.NEXT_PUBLIC_API_URL as string
	// *** fetch the rank-math seo data ***
	const seoData = await getSeoHead(`${url}/tag/${params?.slug}`)

	// *** parse and filter seo data ***
	const parseSeoData = parse(seoData?.head || '') as any
	const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

	// *** arrange the seo array into required object ***
	const seoObject = arrangeSeoData(filterEmptySeoData)

	return {
		...seoObject,
	}
}

const BlogTagPage = ({ params }: { params: { slug: string } }) => {

	return (
		<Fragment>
			<BlogCategoryBody slug={params?.slug} />
		</Fragment>
	);
};
export default BlogTagPage;

export async function generateStaticParams() {

	const { data: tagsData } = await getTags({
		per_page: 100,
	})

	return tagsData.map((post: any) => ({
		slug: post.slug,
	}))
}