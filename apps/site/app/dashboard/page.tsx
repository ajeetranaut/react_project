import { auth } from "@/context/auth";
import { getCustomer } from "lib/woocommerce/getCustomers";
import type { Metadata } from "next";
import { Fragment } from "react";
import DashboardPageBody from "./PageBody";

export const metadata: Metadata = {
	title: "Dashboard | MetaShop",
	description: "Dashboard Page description",
};

const DashboardPage = async () => {
	// NOTE: get user data from session
	const session = await auth()
	// NOTE: get User data from WooCommerce
	const { data } = await getCustomer(session?.user?.id)

	return (
		<Fragment>
			<DashboardPageBody
				data={{
					billing: data?.billing,
					shipping: data?.shipping,
				}} />
		</Fragment>
	);
};
export default DashboardPage;
