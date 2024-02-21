"use client";

import { useGlobalContext } from "@/context/store";
import { BlockLayout, BreadcrumbOne, CartLayout, Gap } from "@/ui";
import Link from "next/link";
import { Fragment } from "react";

const CartPageBody = () => {
	const { cartData, cartTotals: cartTotalsData, dictionaries } = useGlobalContext()

	return (
		<Fragment>
			<BreadcrumbOne title={dictionaries?.cart?.breadcrumb.title} />
			<Gap className="mt-14 md:mt-20" />
			<BlockLayout>
				{cartData?.items?.length === 0 ? (
					<div className="grid justify-center">
						<p className="text-base sm:text-2xl font-semibold text-primary py-10 text-center">
							There are no items in your cart yet.
						</p>
						<Link href={"/shop/shop-left-sidebar"}>
							<button
								className="flex justify-center mx-auto text-sm sm:text-base font-medium cursor-pointer mt-10 px-4 sm:px-6 py-3 sm:py-4 rounded-md bg-primary text-white hover:opacity-70 transition duration-300 ease-in-out">
								Back to Shop
							</button>
						</Link>
					</div>
				) : (
					<CartLayout
						cartItemsText={dictionaries?.cart?.cartItemsText}
						cartSummaryText={dictionaries?.cart?.cartSummaryText}
						cartItemsData={cartData?.items}
						cartSummaryData={cartTotalsData}
					/>
				)}
			</BlockLayout>
			<Gap />
		</Fragment>
	);
};
export default CartPageBody;
