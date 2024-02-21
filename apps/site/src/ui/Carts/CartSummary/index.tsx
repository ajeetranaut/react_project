"use client";

import Link from "next/link";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    textData?: {
        headerText: string;
        subtotalText: string;
        shippingText: string;
        shippingValue: string;
        totalText: string;
        buttonText: string;
    }
    summaryData: {
        subtotal: string;
        total: string;
    };
};

export const CartSummary = ({ summaryData, textData }: ComponentProps) => {
    const convertPrice = (price: string) => {
        const finalPrice = parseInt(price).toFixed(2);
        return finalPrice;
    };
    return (
        <div className="rounded-3xl bg-secondary-content p-4 sm:p-7">
            <p className="font-medium text-xl capitalize text-secondary">
                {textData?.headerText}
            </p>
            <div className="flex items-center gap-5 sm:gap-10 md:gap-40   lg:gap-20 px-3 sm:px-6 py-5 mt-6 bg-white rounded-xl">
                <p className="font-normal text-base capitalize text-secondary">
                    {textData?.subtotalText}
                </p>
                <p className="font-normal text-base capitalize text-secondary">
                    {summaryData?.subtotal ? convertPrice(summaryData?.subtotal) : " $00.00 "}
                </p>
            </div>
            <div className="flex items-center gap-5 sm:gap-10 md:gap-40   lg:gap-20 px-3 sm:px-6 py-5 mt-2 bg-white rounded-xl">
                <p className="font-normal text-base capitalize text-secondary">
                    {textData?.shippingText}
                </p>
                <p className="font-normal text-base capitalize text-success">
                    {textData?.shippingValue}
                </p>
            </div>
            {/* <div className="flex items-center gap-5 sm:gap-10 md:gap-40   lg:gap-20 px-3 sm:px-6 py-5 mt-2 bg-white rounded-xl">
                <p className="font-normal text-base capitalize text-secondary">
                    Coupon
                </p>
                <p className="font-normal text-base capitalize text-success">
                    Applied -00%
                </p>
            </div> */}
            <div className="flex items-center gap-10 sm:gap-14 md:gap-44   lg:gap-24 px-3 sm:px-6 py-5 mt-2 bg-white rounded-xl">
                <p className="font-bold text-base capitalize text-secondary">
                    {textData?.totalText}
                </p>
                <p className="font-bold text-base capitalize text-secondary">
                    {summaryData?.subtotal ? convertPrice(summaryData?.subtotal) : " $00.00 "}
                </p>
            </div>
            <Link href="/checkout">
                <button className="leading-6 px-7 py-4 ease-in-out w-full mt-6 text-lg font-semibold rounded-lg bg-primary text-white hover:bg-secondary transition hover:duration-700">
                    {textData?.buttonText}
                </button>
            </Link>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
CartSummary.defaultProps = defaultData;