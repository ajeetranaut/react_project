"use client";
import Link from "next/link";
import { TableData as defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type OrderHistoryProps = {
  textData: {
    noOrderText: string;
    tableHeaders: {
      orderId: string;
      date: string;
      item: string;
      total: string;
      status: string;
      action: string;
      view: string;
    }
  }
  active: string;
  setActive: (slug: string) => void;
  isLoading: boolean;
  tabsData: {
    name: string;
    slug: string;
  }[];
  data:
  | {
    id: number;
    date: string;
    itemLength: number;
    total: number;
    status: string;
  }[]
  | null;
};

export const OrderHistory = ({ active, setActive, tabsData, data, textData, isLoading }: OrderHistoryProps) => {
  return (
    <section className="container mx-auto px-5 md:px-0">
      {/* section-tab  */}
      <div className="bg-secondary-content px-5 flex flex-col w-full justify-center rounded-xl overflow-x-auto">
        <div className="w-full mx-auto md:w-fit">
          <div className="flex items-center gap-6 md:gap-10 overflow-x-auto w-full">
            {tabsData?.map((singleData: any, index: number) => (
              <div className="w-full" key={index} onClick={() => setActive(singleData.slug)}>
                <p
                  className={`${active === singleData.slug
                    ? "text-primary border-b-[3px] border-primary "
                    : "text-base-300 border-b-[3px] border-secondary-content"
                    } py-5 cursor-pointer whitespace-nowrap font-medium text-base md:text-lg`}
                >
                  {singleData.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* order-body  */}
      <div className="relative">
        {/* desktop view  */}
        <div className="hidden md:block">
          {/* table-head  */}
          <div className="mt-[30px] py-4 md:py-5 px-6 font-medium text-base text-secondary  bg-secondary-content rounded-md flex items-center justify-between mb-3">
            <h6 className="w-2/12">{textData?.tableHeaders?.orderId}</h6>
            <h6 className="w-2/12 mr-4">{textData?.tableHeaders?.date}</h6>
            <h6 className="w-2/12">{textData?.tableHeaders?.item}</h6>
            <h6 className="w-2/12">{textData?.tableHeaders?.total}</h6>
            <h6 className="w-2/12 lg:w-3/12">{textData?.tableHeaders?.status}</h6>
            <h6 className="w-2/12 lg:w-1/12 flex justify-end">{textData?.tableHeaders?.action}</h6>
          </div>
          {/* Desktop table-body  */}
          {!isLoading && data?.map((item: any, index) => (
            <div
              key={index}
              className="p-2.5 text-base font-normal text-base-300 bg-white border border-neutral-content flex items-center rounded-xl mt-2"
            >
              <h6 className="w-2/12 ml-[14px]">#{item.id}</h6>
              <h6 className="w-2/12">{item.date}</h6>
              <h6 className="w-2/12">{item.itemLength} Items</h6>
              <h6 className="w-2/12">${item.total}</h6>
              <div className="w-2/12 lg:w-3/12">
                <button
                  className={`px-2.5 py-1 text-xs font-semibold text-white rounded-full capitalize ${(item?.status.toLocaleLowerCase() === "pending" && "bg-warning") ||
                    (item?.status.toLocaleLowerCase() === "completed" && "bg-success") ||
                    (item?.status.toLocaleLowerCase() === "cancelled" && "bg-red-500") ||
                    (item?.status.toLocaleLowerCase() === "processing" && "bg-info") ||
                    (item?.status.toLocaleLowerCase() === "refunded" && "bg-base-300") ||
                    (item?.status.toLocaleLowerCase() === "failed" && "bg-red-500") ||
                    (item?.status.toLocaleLowerCase() === "on-hold" && "bg-blue-600") ||
                    "bg-base-300"
                    }`}
                >
                  {item?.status}
                </button>
              </div>
              <div className="w-2/12 lg:w-1/12 flex justify-end">
                <Link
                  href={`/dashboard/order/${item.id}`}
                  className="w-[78px] px-5 py-2.5 rounded-md bg-secondary-content hover:text-info-content hover:bg-primary transition-all duration-300 ease-in-out"
                >
                  {textData?.tableHeaders?.view}
                </Link>
              </div>
            </div>
          ))}

          {/* Empty data */}
          {!isLoading && data?.length === 0 && (
            <div className="flex justify-center items-center mt-10">
              <p className="text-base sm:text-lg font-semibold text-base-300/80 py-10 text-center">
                {textData?.noOrderText}
              </p>
            </div>
          )}
        </div>

        {/* mobile view  */}
        <div className="md:hidden">
          <div>
            {/* Mobile table-body  */}
            {data?.map((item: any, index) => (
              <div
                key={index}
                className="p-[30px] mt-[30px] rounded-xl text-base-300 bg-white border border-neutral-content"
              >
                <div className=" font-normal text-base flex justify-between">
                  <div className=" flex flex-col gap-3">
                    <h5>{textData?.tableHeaders?.orderId}</h5>
                    <h5>{textData?.tableHeaders?.date}</h5>
                    <h5>{textData?.tableHeaders?.item}</h5>
                    <h5>{textData?.tableHeaders?.total}</h5>
                    <h5>{textData?.tableHeaders?.status}</h5>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h5>#{item.id}</h5>
                    <h5>{item.date}</h5>
                    <h5>{item.itemLength} Items</h5>
                    <h5> ${item.total}</h5>
                    <button
                      className={`text-white px-2.5 py-1 text-xs rounded-full uppercase ${(item?.status.toLocaleLowerCase() === "pending" && "bg-warning") ||
                        (item?.status.toLocaleLowerCase() === "completed" && "bg-success") ||
                        (item?.status.toLocaleLowerCase() === "cancelled" && "bg-red-500") ||
                        (item?.status.toLocaleLowerCase() === "processing" && "bg-info")
                        }`}
                    >
                      {item?.status}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-start mt-6">
                  <Link href={`/dashboard/order/${item.id}`}>
                    <p className="w-[78px] px-5 py-2.5  font-medium text-sm	rounded-md bg-secondary-content hover:text-primary transition duration-300 ease-in-out">
                      {textData?.tableHeaders?.view}
                    </p>
                  </Link>
                </div>
              </div>
            ))}

            {/* Empty data */}
            {data?.length === 0 && (
              <div className="flex justify-center items-center mt-10">
                <p className="text-base sm:text-lg font-semibold text-base-300/80 py-10 text-center">
                  {textData?.noOrderText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
OrderHistory.defaultProps = defaultData;
