import parse from 'html-react-parser';
import { getSeoHead } from "lib/rankmath/getHead";
import { arrangeSeoData } from "lib/rankmath/utils";
import type { Metadata } from "next";
import { Fragment } from "react";
import ProductCategoryBody from "./PageBody";

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
  const seoData = await getSeoHead(`${url}/product-category/${params?.category}`)

  // *** parse and filter seo data ***
  const parseSeoData = parse(seoData?.head || '') as any
  const filterEmptySeoData = parseSeoData?.filter((n: any) => n && n?.type)

  // *** arrange the seo array into required object ***
  const seoObject = arrangeSeoData(filterEmptySeoData)

  return {
    ...seoObject,
  }
}

const ProductCategoryPage = ({ params }: { params: { category: string } }) => {

  return (
    <Fragment>
      <ProductCategoryBody slug={params.category} />
    </Fragment>
  );
};
export default ProductCategoryPage;