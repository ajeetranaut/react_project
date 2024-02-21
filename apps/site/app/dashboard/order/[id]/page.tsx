import { getOrderDetails } from "lib/woocommerce/getOrders";
import type { Metadata } from "next";
import { Fragment } from "react";
import OrderDetailsBody from "./PageBody";

export const metadata: Metadata = {
  title: "Order Details | MetaShop",
  description: "Order Details Page description",
};

const OrderDetailsPage = async ({ params }: { params: { id: string } }) => {

  // NOTE: get Order Details data from WooCommerce
  const { data } = await getOrderDetails(params?.id);

  return (
    <Fragment>
      <OrderDetailsBody data={data} />
    </Fragment>
  );
};
export default OrderDetailsPage;
