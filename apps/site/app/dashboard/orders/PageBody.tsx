"use client";
import { FormLoader } from "@/components/formLoader/FormLoader";
import { useGlobalContext } from "@/context/store";
import { OrdersTabsData } from "@/data/OrdersTabData";
import { IOrderHistoryData } from "@/types";
import { OrderHistory, } from "@/ui";
import { getOrders } from "lib/woocommerce/getOrders";
import { useEffect, useState, useTransition } from "react";

const OrderPageBody = ({ data, userId }: { userId: number, data: IOrderHistoryData[] }) => {
	const { dictionaries } = useGlobalContext();
	const [, startTransition] = useTransition();

	const [isLoading, setIsLoading] = useState(false);
	const [orders, setOrders] = useState<IOrderHistoryData[] | null>(data);
	const [status, setStatus] = useState<
		"pending" | "processing" | "completed" | "cancelled" | "refunded" | "failed" | "on-hold" | string
	>("completed");
	const [perPage, setPerPage] = useState(10);
	const [page] = useState(1);

	// dynamic orderTab data
	const textType = dictionaries?.dashboard_orders?.textType as 'en' | 'ar' | 'es'
	const tabsData = OrdersTabsData[textType] as {
		name: string;
		slug: string;
	}[] || OrdersTabsData['en']


	// NOTE: This is for order history server side data fetch
	useEffect(() => {
		setIsLoading(true)
		const closeId = setTimeout(() => {
			startTransition(() => {
				getOrders({
					per_page: perPage,
					page: 1,
					status: status,
					userId: userId,
				}).then((res) => {
					setOrders(res.data);
					setIsLoading(false)
				});
			})
		}, 100);
		return () => clearTimeout(closeId);
	}, [status, perPage, userId]);


	return (
		<div className="grow">
			<OrderHistory
				textData={dictionaries?.dashboard_orders?.textData}
				tabsData={tabsData}
				active={status} setActive={setStatus}
				data={orders ? orders : null}
				isLoading={isLoading}
			/>
			{/* Loader */}
			{(isLoading) && (
				<div className="flex justify-center items-center my-10">
					<FormLoader color="text-primary" />
				</div>
			)}
			{/* Load More Button */}
			{orders && perPage <= orders?.length && (
				<div className="flex justify-center items-center mt-10">
					<button
						className="text-base font-semibold text-base-content hover:text-info-content hover:bg-primary py-2 px-4 rounded bg-gray-200 text-center transition-all duration-300 ease-in-out"
						onClick={() => setPerPage(perPage + 10)}
					>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};
export default OrderPageBody;
