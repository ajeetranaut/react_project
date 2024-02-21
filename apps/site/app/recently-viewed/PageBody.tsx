"use client";

import { useGlobalContext } from "@/context/store";
import { BreadcrumbOne, TrendingProductCard, } from "@/ui";
import { getCookie } from "cookies-next";
import { getProducts } from "lib/woocommerce/getProducts";
import { Fragment, useEffect, useState, useTransition } from "react";

const RecentlyViewedBody = () => {
	const { dictionaries } = useGlobalContext();
	const [data, setData] = useState<[] | null>(null);
	const [, startTransition] = useTransition();
	// *** store the product id in cookie ***
	const getRecentlyViewed = getCookie("metashop:recentlyViewed");

	// *** fetch the recently viewed products ***
	useEffect(() => {
		if (getRecentlyViewed) {
			// *** get the recently viewed products from cookie ***
			const recentlyViewed = JSON.parse(getRecentlyViewed as string);
			let include: number[] = [];

			// *** add the recently viewed product id to the include array without the current product id ***
			recentlyViewed?.forEach((id: number) => {
				include.push(id);
			});

			// *** fetch recently viewed products without the current product ***
			if (include.length > 0) {
				startTransition(() => {
					getProducts({
						per_page: 20,
						include: include,
					}).then((res) => {
						if (res.error) {
							setData(null);
							return;
						}

						setData(res.data);
					});
				});
			} else {
				setData([]);
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Fragment>
			<BreadcrumbOne title={dictionaries?.recently_viewed?.breadcrumb?.title} loading={data ? false : true} />
			<div className="my-14 lg:my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 justify-items-center container mx-auto">
				{data && data.map((singleData: any, index: number) => (
					<TrendingProductCard
						key={index}
						data={singleData}
					/>
				))}

				{/* Loading */}
				{!data && Array(4).fill(0).map((_, index) => (
					<TrendingProductCard
						key={index}
						data={_}
					/>
				))}
			</div>
		</Fragment>
	);
};
export default RecentlyViewedBody;
