"use client";
import { useGlobalContext } from "@/context/store";
import { IOrderDetailsData } from "@/types";
import { OrderDetails } from "@/ui";

const OrderDetailsBody = ({ data }: { data: IOrderDetailsData | never[] }) => {
	const { dictionaries } = useGlobalContext();
	return (
		<div className="grow">
			<OrderDetails {...data} textData={dictionaries?.orders_details?.textData} />
		</div>
	);
};
export default OrderDetailsBody;
