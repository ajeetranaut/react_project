"use client"
import Image from "next/image";
import Link from "next/link";
import { TableData as defaultData } from "./data";

type LineItemProps = {
  id: number;
  name: string;
  image: {
    id: number;
    src: string;
  };
  price: number;
  quantity: number;
  total: string;
};

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
  textData: {
    headerText: string;
    backButtonText: string;
    address: {
      billingTitle: string;
      shippingTitle: string;
      location: string;
      email: string;
      phone: string;
    },
    pricing: {
      orderId: string;
      method: string;
      subtotal: string;
      discount: string;
      shipping: string;
      total: string;
    },
    tableHeaders: {
      product: string;
      price: string;
      quantity: string;
      quantityMobile: string;
      subtotal: string;
    }
  }
  billing: {
    address_1: string;
    email: string;
    phone: string;
  };
  shipping: {
    address_1: string;
    phone: string;
  };
  orderInfo: {
    id: number;
    payment_method: string;
    subtotal: string;
    discount_total: string;
    shipping_total: string;
    total: string;
  };
  line_items: LineItemProps[];
};

export const OrderDetails = ({ billing, shipping, orderInfo, line_items, textData }: ComponentProps) => {
  return (
    <section className="container mx-auto px-5 md:px-0">
      {/* header-section  */}
      <div className="w-full p-2 bg-secondary-content flex justify-between items-center rounded-xl">
        <h2 className="ml-3 md:ml-4 text-base md:text-xl font-medium text-secondary">{textData?.headerText}</h2>
        <Link
          href={"/dashboard/orders"}
          className="px-6 py-3 text-sm md:text-base font-medium text-base-300 bg-white rounded-lg"
        >
          {textData?.backButtonText}
        </Link>
      </div>

      {/* details-section  */}
      <div className="mt-10  md:mt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {/* billing-box  */}
        <div className=" p-[30px] border border-neutral-content rounded-2xl">
          <h4 className="text-lg font-normal text-base-content uppercase">{textData?.address.billingTitle}</h4>
          <div className="mt-6">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.location}</p>
            <p className="text-base font-normal text-base-200">{billing.address_1}</p>
          </div>
          <div className="mt-5">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.email}</p>
            <p className="text-base font-normal text-base-content">{billing.email}</p>
          </div>
          <div className="mt-5">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.phone}</p>
            <p className="text-base font-normal text-base-content">{billing.phone}</p>
          </div>
        </div>
        {/* shipping-box  */}
        <div className="p-[30px] border border-neutral-content rounded-2xl">
          <h4 className="text-lg font-normal text-base-content uppercase">{textData?.address.shippingTitle}</h4>
          <div className="mt-6">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.location}</p>
            <p className="text-base font-normal text-base-200">{shipping.address_1}</p>
          </div>
          <div className="mt-5">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.email}</p>
            <p className="text-base font-normal text-base-content">{billing.email}</p>
          </div>
          <div className="mt-5">
            <p className="mb-1 text-sm font-medium text-base-200 uppercase">{textData?.address.phone}</p>
            <p className="text-base font-normal text-base-content">{shipping.phone}</p>
          </div>
        </div>
        {/* details-box  */}
        <div className=" p-[30px] border border-neutral-content rounded-2xl">
          <div className="pb-3.5 font-medium text-sm flex justify-between border-b border-neutral-content">
            <h5 className="text-base-200">{textData?.pricing?.orderId}</h5>
            <h5 className="text-base-content">#{orderInfo.id}</h5>
          </div>
          <div className="py-3.5 font-medium text-sm flex justify-between border-b border-neutral-content">
            <h5 className="text-base-200">{textData?.pricing?.method}</h5>
            <h5 className="text-base-content">{orderInfo.payment_method}</h5>
          </div>
          <div className="py-3.5 font-medium text-sm flex justify-between border-b border-neutral-content">
            <h5 className="text-base-200">{textData?.pricing?.subtotal}</h5>
            <h5 className="text-base-content">${orderInfo.subtotal}</h5>
          </div>
          <div className="py-3.5 font-medium text-sm flex justify-between border-b border-neutral-content">
            <h5 className="text-base-200">{textData?.pricing?.discount}</h5>
            <h5 className="text-red-500">-${orderInfo.discount_total}</h5>
          </div>
          <div className="py-3.5 font-medium text-sm flex justify-between border-b border-neutral-content">
            <h5 className="text-base-200">{textData?.pricing?.shipping}</h5>
            <h5 className="text-base-content">${orderInfo.shipping_total}</h5>
          </div>
          <div className="pt-3.5 font-semibold text-base flex justify-between">
            <h5 className="text-secondary">{textData?.pricing?.total}</h5>
            <h5 className="text-[#FF6650]">${orderInfo.total}</h5>
          </div>
        </div>
      </div>

      {/* order-items  */}
      <div className="pt-10">
        {/* desktop view  */}
        <div className="hidden md:block">
          {/* table-head  */}
          <div className="mt-[30px] py-4 md:py-5 px-6 font-medium text-base text-base-content  bg-secondary-content rounded-xl flex items-center justify-between mb-3">
            <h6 className="w-6/12">{textData?.tableHeaders?.product}</h6>
            <h6 className="w-2/12">{textData?.tableHeaders?.price}</h6>
            <h6 className="w-2/12">{textData?.tableHeaders?.quantity}</h6>
            <h6 className="w-2/12">{textData?.tableHeaders?.subtotal}</h6>
          </div>

          {/* table-body  */}
          {line_items.map((item: LineItemProps, index) => (
            <div
              key={index}
              className="px-6 py-5 text-base font-normal text-base-300 bg-white border border-neutral-content flex items-center rounded-xl mt-2"
            >
              <div className="w-6/12 flex items-center gap-4">
                <div className=" p-[5px] bg-secondary-content rounded-xl">
                  <Image
                    src={item.image.src}
                    alt={"product"}
                    width={50}
                    height={50}
                    layout="intrinsic"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <h6 className="font-medium text-secondary line-clamp-1">{item.name}</h6>
              </div>
              <h6 className="w-2/12">${item.price}</h6>
              <h6 className="w-2/12">{item.quantity}</h6>
              <h6 className="w-2/12">${item.total}</h6>
            </div>
          ))}
        </div>

        {/* mobile view  */}
        <div className="md:hidden">
          <div>
            {line_items.map((item: LineItemProps, index) => (
              <div key={index} className="p-5 mt-[30px] rounded-xl  bg-white border border-neutral-content">
                <div className=" font-medium text-sm">
                  <div className="flex items-center gap-3">
                    <div className="p-[5px] bg-secondary-content rounded-xl">
                      <Image
                        src={item.image.src}
                        alt={"product"}
                        width={40}
                        height={40}
                        layout="intrinsic"
                        objectFit="cover"
                        className=""
                      />
                    </div>
                    <h6 className="font-medium text-secondary line-clamp-1">{item.name}</h6>
                  </div>
                  <div className="mt-6 text-base-200">
                    <div className="pb-2.5 flex justify-between">
                      <h5 className="text-base-200">{textData?.tableHeaders?.price}</h5>
                      <h5 className="text-base-content">${item.price}</h5>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <h5 className="text-base-200">{textData?.tableHeaders?.quantityMobile}</h5>
                      <h5 className="text-base-content">{item.quantity}</h5>
                    </div>
                    <div className="py-2.5 flex justify-between">
                      <h5 className="text-base-200">{textData?.tableHeaders?.subtotal}</h5>
                      <h5 className="text-base-content">${item.total}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
OrderDetails.defaultProps = defaultData;
