"use client";
import { useGlobalContext } from "@/context/store";
import { ShippingProps } from "@/types";
import { BillingShipping, } from "@/ui";
import { useEffect, useState } from "react";

type DashboardPageBodyProps = {
	data: {
		billing: {
			email: string;
			phone: string;
		} & ShippingProps;
		shipping: ShippingProps;
	};
};

const DashboardPageBody = ({ data }: DashboardPageBodyProps) => {
	// NOTE: This is the billing state
	const [billing, setBilling] = useState<{ email: string, phone: string } & ShippingProps>(data.billing)
	const { dictionaries } = useGlobalContext();
	// NOTE: This is the shipping state
	const [shipping, setShipping] = useState<ShippingProps>(data.shipping)

	useEffect(() => {
		setBilling(data.billing)
		setShipping(data.shipping)
	}, [data])


	return (
		<div className="grow">
			<BillingShipping
				textData={dictionaries?.dashboard?.textData}
				// billing props
				billing={billing}
				// shipping props
				shipping={shipping}
			/>
		</div>
	);
};
export default DashboardPageBody;
