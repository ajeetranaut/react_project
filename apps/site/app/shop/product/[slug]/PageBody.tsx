"use client";

import { useGlobalContext } from "@/context/store";
import { BrandData } from "@/data/BrandData";
import { Brands, Gap, ProductDescription, ProductDetails, RecentlyViewed } from "@/ui";
import { getCookie, setCookie } from "cookies-next";
import { getProducts } from "lib/woocommerce/getProducts";
import { Fragment, useEffect, useState, useTransition } from "react";

const ProductPageBody = ({ slug, }: { slug: string }) => {
	const { dictionaries } = useGlobalContext();
	const [productData, setProductData] = useState<any | null>(null)
	const [recentViewData, setRecentViewData] = useState<[] | null>(null)
	const [loading, setLoading] = useState(true)
	const [, startTransition] = useTransition();
	// *** store the product id in cookie ***
	const getRecentlyViewed = getCookie("metashop:recentlyViewed");

	// *** fetch the product data by slug ***
	useEffect(() => {
		startTransition(() => {
			getProducts({
				slug: slug,
			}, 'no-cache', 60).then((res) => {
				if (res.error) {
					setProductData(null);
					setLoading(false)
					return;
				}
				setProductData(res.data[0]);
				setLoading(false)
			});
		});

		return () => {
			setProductData(null);
			setLoading(true)
		};
	}, [slug]);

	// *** fetch the recently viewed products data ***
	useEffect(() => {
		if (getRecentlyViewed && productData) {
			// *** get the recently viewed products from cookie ***
			const recentlyViewed = JSON.parse(getRecentlyViewed as string);
			let include: number[] = [];
			if (!recentlyViewed.includes(productData?.id)) {
				// *** if recentlyViewed.length is greater than 20 then remove the last item ***
				if (recentlyViewed.length > 20) {
					recentlyViewed.pop();
				}

				// *** add the product id to the recently viewed array ***
				const updatedRecentlyViewed = [productData?.id, ...recentlyViewed];
				setCookie("metashop:recentlyViewed", JSON.stringify(updatedRecentlyViewed));
			}

			// *** add the recently viewed product id to the include array without the current product id ***
			recentlyViewed?.forEach((id: number) => {
				if (id !== productData?.id) {
					include.push(id);
				}
			});

			// *** fetch recently viewed products without the current product ***
			if (include.length > 0) {
				startTransition(() => {
					getProducts({
						include: include,
					}).then((res) => {
						if (res.error) {
							setRecentViewData(null);
							return;
						}

						setRecentViewData(res.data);
					});
				});
			} else {
				setRecentViewData([]);
			}
		}

		// *** if recently viewed cookie is not available then create one ***
		if (!getRecentlyViewed && productData) {
			setCookie("metashop:recentlyViewed", JSON.stringify([productData?.id]));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [productData]);

	return (
		<>
			<Gap className="mt-14 md:mt-20" />
			<ProductDetails
				// @ts-ignore
				data={productData}
				// @ts-ignore
				buttonText={dictionaries?.product?.cartButton}
				// @ts-ignore
				detailsText={dictionaries?.product?.detailsText}
				isLoading={loading}
			/>
			<Gap className="mt-14 md:mt-20" />
			<ProductDescription
				// @ts-ignore
				data={productData}
				// @ts-ignore
				headingTitle={dictionaries?.product?.tabHeaders}
				// @ts-ignore
				reviewInputText={dictionaries?.product?.reviewInput}

			/>
			<Gap className="mt-14 md:mt-20" />
			{recentViewData && recentViewData?.length > 0 && (
				<Fragment>
					<RecentlyViewed
						title={dictionaries?.product?.recently_viewed?.title}
						buttonText={dictionaries?.product?.recently_viewed?.btnText}
						data={recentViewData}
					/>
					<Gap className="mt-14 md:mt-20" />
				</Fragment>
			)}
			<Brands data={BrandData} />
			<Gap className="mt-14 md:mt-20" />
		</>
	);
};
export default ProductPageBody;
