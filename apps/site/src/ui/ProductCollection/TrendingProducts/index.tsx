"use client";;
import { TrendingProductCard } from "@/ui";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { ProductQueryProps, getProducts } from "../../../../lib/woocommerce/getProducts";
import { productData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type TrendingProductsProps = {
	tabData: {
		title: string;
		query: ProductQueryProps;
	}[];
	btn: {
		title: string;
		link: string;
		target: string;
	};
};

export const TrendingProducts = ({ tabData, btn }: TrendingProductsProps) => {
	const [active, setActive] = useState(0);
	const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
	const [, startTransition] = useTransition();

	// NOTE: Get products data from WooCommerce API
	/**
	 * @param {ProductQueryProps} query
	 * @returns {Promise<any>}
	 * @description This function will return a promise with products data from WooCommerce API. It's a server side function.
	 * @example getProducts({per_page: 4, featured: true})
	 */
	useEffect(() => {
		startTransition(() => {
			setData(Array(8).fill(1));
			const activeQuery = tabData[active].query;
			getProducts(activeQuery).then((res) => {
				if (res.error) {
					setData(Array(8).fill(1));
					return;
				}
				setData(res.data);
			});
		});

		return () => {
			setData([]);
		};
	}, [active, tabData]);

	const cardData = data?.length > 0 ? data.slice(0, 8) : [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<section className="container mx-auto px-5 md:px-0">
			{/* section-tab  */}
			<div className="bg-secondary-content px-5 flex flex-col w-full justify-center">
				<div className="w-full mx-auto md:w-fit">
					<div className="flex items-center gap-6 md:gap-10 overflow-x-auto w-full">
						{tabData?.map((singleData: any, index: number) => (
							<div className="w-full" key={index} onClick={() => {
								setActive(index)
							}}>
								<p
									className={`${active === index
										? "text-primary border-b-[3px] border-primary "
										: "text-base-200 border-b-[3px] border-secondary-content"
										} py-5 cursor-pointer whitespace-nowrap font-normal text-lg`}
								>
									{singleData.title}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className=" mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 justify-items-center">
				{cardData?.map((singleData: any, index: number) => <TrendingProductCard key={index} data={singleData} />)}
			</div>
			<div className="mt-10 flex items-center justify-center">
				<Link
					href={btn.link}
					target={btn.target}
					className="font-medium text-base bg-secondary text-white hover:bg-primary hover:text-white transition hover:duration-700 leading-6 px-7 py-4 cursor-pointer rounded-full ease-in-out"
				>
					{btn.title}
				</Link>
			</div>
		</section>
	);
};

// NOTE: This is the default data that you can use to test this component
TrendingProducts.defaultProps = productData;
