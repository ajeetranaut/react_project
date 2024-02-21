import { auth } from "@/context/auth";
import { getOrders } from "lib/woocommerce/getOrders";
import type { Metadata } from "next";
import { Fragment } from "react";
import OrderPageBody from "./PageBody";

export const metadata: Metadata = {
  title: "Orders | MetaShop",
  description: "Dashboard Page description",
};

const OrderPage = async () => {
  // NOTE: get user data from session
  const session = await auth()
  // NOTE: get Order history data from WooCommerce
  const { data } = await getOrders({ per_page: 10, page: 1, status: "pending", userId: session?.user?.id });

  return (
    <Fragment>
      <OrderPageBody data={data} userId={session?.user?.id} />
    </Fragment>
  );
};
export default OrderPage;
