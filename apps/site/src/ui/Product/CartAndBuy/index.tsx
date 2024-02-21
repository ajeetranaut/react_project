"use client";

import { useGlobalContext } from "@/context/store";
import { LoaderRound } from "@/loaders/Loader";
import { SocialShare } from "@/ui";
import { addBuyNowHandler, addToCartHandler } from "@/utils/cart.utils";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useTransition } from "react";
import toast from 'react-hot-toast';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    data: {
        id: number;
        attributes: {
            name: string;
            options: [string]
        }[];
        defaultAttributes: {
            name: string;
            option: string;
        }[];
        stock: string;
        type: string;
        externalUrl: string;
        price: string;
        regular_price: string;
        sale_price: string;
    };
    buttonText: {
        addCart: string;
        buyNow: string;
    },
    detailsText: {
        colorTitle: string;
        socialTitle: string;
    };
}

export const CartAndBuy = ({ data, buttonText, detailsText }: ComponentProps) => {
    const { mutateCart } = useGlobalContext()
    const [, startTransition] = useTransition();

    const [count, setCount] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [buyLoading, setbuyLoading] = React.useState(false);

    const router = useRouter();

    const productToast = (message: string, type: any) => {
        if (type == 'success') {
            toast.success(`${message}`);
        } else if (type == 'error') {
            toast.error(`${message}`);
        }
    };

    const stockOut = data?.stock === "outofstock" || data?.price === "0.00" || data?.price === "0" || data?.price === "" || data?.price === null || data?.price === undefined;

    const [attributesValue, setAttributesValue] = React.useState<{ [key: string]: string; }>({});

    // set default attributes
    React.useEffect(() => {
        if (data) {
            const defaultValues = data?.defaultAttributes?.reduce((acc, item) => {
                return {
                    ...acc,
                    [`attribute_pa_${item.name.toLowerCase().replace(" ", "-")}`]: item.option,
                };
            }, {});

            setAttributesValue(defaultValues);
        }
    }, [data]);


    // attributes option change handler
    const handleAttributeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        const selectedOption = e.target.options[e.target.selectedIndex];
        const attributeName = selectedOption.dataset.name as string;
        setAttributesValue((prevAttributes) => ({
            ...prevAttributes,
            [`attribute_pa_${attributeName}`]: value,
        }));
    };

    return (
        <div>
            {/* show attributes to variable products only  */}
            {data ?
                data?.type === "variable" &&
                (
                    <>
                        {data?.attributes?.map((singleAttribute, index) => (
                            <div key={index}>
                                {singleAttribute.options?.length > 0 &&
                                    <div>
                                        <p className="font-semibold text-base text-secondary capitalize">  {singleAttribute?.name}</p>
                                        <div className=" flex flex-wrap items-center gap-2.5 mt-3">
                                            <select
                                                className="mb-3 pl-4 pr-10 py-2.5 border appearance-none border-base-100 focus:outline-none text-base-300 svg_icon cursor-pointer capitalize"
                                                onChange={handleAttributeChange}
                                            >
                                                {singleAttribute.options?.map((item: any, index: number) => (
                                                    <option key={index} value={item?.toLowerCase()} data-name={singleAttribute?.name.toLowerCase().replace(" ", "-")} selected={item === attributesValue[`attribute_pa_${singleAttribute?.name.toLowerCase().replace(" ", "-")}`]}>
                                                        {item}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                        <div className="border border-neutral-content w-full mt-5"></div>
                    </>
                )
                : (
                    <>
                        <Skeleton height={23} width={100} />
                        <div className=" flex flex-wrap items-center gap-2.5 mt-3">
                            {[1, 2, 3].map((item: any) => (
                                <Skeleton key={item} height={24} width={24} circle={true} />
                            ))}
                        </div>
                    </>
                )}
            <div className="flex flex-col md:flex-row md:items-center gap-7 mt-5">
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
                    {data ? (
                        <div className="flex md:mx-auto sm:mx-0 items-center h-12 border border-base-100 p-2 rounded-full">
                            <button
                                disabled={count === 1}
                                onClick={() => setCount(count - 1)}
                                className="w-10 h-10 rounded-md flex items-center justify-center cursor-pointer relative after:content-[''] after:absolute after:top-1 after:border-r-2 after:border-neutral-content after:h-8 after:right-0"
                            >
                                <AiOutlineMinus className=" text-lg text-base-200 " />
                            </button>

                            <input
                                className="mx-2 text-center w-8 focus:outline-none border-none text-lg font-semibold  text-secondary"
                                type="text"
                                value={count}
                                readOnly
                            />

                            <button
                                onClick={() => setCount(count + 1)}
                                className="w-10 h-10  flex items-center justify-center cursor-pointer relative after:content-[''] after:absolute after:top-1 after:border-r-2 after:border-neutral-content after:h-8 after:right-10"
                            >
                                <AiOutlinePlus className=" text-lg text-base-200" />
                            </button>
                        </div>
                    ) : (
                        <Skeleton height={52} width={146} borderRadius={50} />
                    )}
                </div>
                <div className=" flex items-center gap-3">
                    {data ?
                        // external product cart button off 
                        data?.type !== "external" && (
                            <button
                                onClick={() => {
                                    const cartKey = getCookie("cart_key") as string;
                                    addToCartHandler(data, attributesValue, setLoading, count, productToast, cartKey, startTransition, mutateCart);
                                }}
                                disabled={loading || stockOut}
                                type="submit"
                                className={`font-medium text-base px-7 py-[14px] leading-6 text-white transition rounded-full bg-primary hover:duration-500 flex justify-center ${stockOut ? "opacity-30" : "hover:bg-secondary"
                                    }`}
                            >
                                {loading && <LoaderRound />}
                                <span className={`${loading ? "ml-2" : ""}`}>{loading ? "Please Wait.." : buttonText?.addCart}</span>
                            </button>
                        ) : (
                            <Skeleton height={52} width={147} borderRadius={50} />
                        )}
                    {data ?
                        // external product button link 
                        data?.type === "external" ?
                            (
                                <Link href={data?.externalUrl}
                                    className={`font-medium text-base px-7 py-[14px] leading-6 text-white transition rounded-full bg-secondary  hover:duration-500 flex justify-center ${stockOut ? "opacity-30" : "hover:bg-primary"
                                        }`}
                                >
                                    {buttonText?.buyNow}
                                </Link>
                            )
                            :
                            (
                                <button
                                    onClick={() => {
                                        const cartKey = getCookie("cart_key") as string;
                                        addBuyNowHandler(data, attributesValue, setbuyLoading, count, productToast, router, cartKey, startTransition, mutateCart);
                                    }}
                                    disabled={buyLoading || stockOut}
                                    type="submit"
                                    className={`font-medium text-base px-7 py-[14px] leading-6 text-white transition rounded-full bg-secondary  hover:duration-500 flex justify-center ${stockOut ? "opacity-30" : "hover:bg-primary"
                                        }`}
                                >
                                    {buyLoading && <LoaderRound />}
                                    <span className={`${buyLoading ? "ml-2" : ""}`}>{buyLoading ? "Please Wait.." : buttonText?.buyNow}</span>
                                </button>
                            )
                        : (
                            <Skeleton height={52} width={128} borderRadius={50} />
                        )}
                </div>
            </div>
            <div className="border border-neutral-content w-full mt-5"></div>
            <div className="flex items-center justify-end mt-5">
                <SocialShare title={detailsText?.socialTitle} />
            </div>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
CartAndBuy.defaultProps = defaultData;