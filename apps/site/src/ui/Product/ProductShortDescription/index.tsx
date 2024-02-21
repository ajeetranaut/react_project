"use client";

import { Fragment } from "react";
import { FaStar } from "react-icons/fa";
import Skeleton from 'react-loading-skeleton';
// import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    data: {
        id: number;
        name: string;
        short_description: string;
        regular_price: string;
        sale_price: string;
        price: string;
        stock: string;
        rating: number;
        reviews: number;
    };
    reviewsText: string;
}

export const ProductShortDescription = ({ data, reviewsText }: ComponentProps) => {
    return (
        <div>
            {data?.name ? (
                <h2 className="font-bold text-xl lg:text-3xl md:leading-10 text-secondary">
                    {data?.name}
                </h2>
            ) : (
                <>
                    <Skeleton height={36} />
                    <Skeleton height={36} />
                </>
            )}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-4">
                {data ? (
                    <div className="flex items-center gap-2">
                        {data?.sale_price && data?.regular_price ? (
                            <Fragment>
                                {data?.sale_price ? (
                                    <p className="font-bold text-xl text-primary">${data?.sale_price}</p>
                                ) : (
                                    <Skeleton width={35} height={28} />
                                )}

                                {data?.regular_price ? (
                                    <p className="font-normal text-base text-base-200 line-through"> ${data?.regular_price}</p>
                                ) : (
                                    <Skeleton width={50} height={28} />
                                )}
                            </Fragment>
                        ) : (
                            <Fragment>
                                {data?.price || data?.regular_price || data?.id ? (
                                    <p className="font-bold text-xl text-primary"> ${data?.price || data?.regular_price || 0.0}</p>
                                ) : (
                                    <Skeleton width={35} height={28} />
                                )}
                            </Fragment>
                        )}
                    </div>
                ) : (
                    <Skeleton height={28} width={85} />
                )}
                <div className="bg-neutral-content h-8  w-0.5 hidden md:block"></div>
                <div className=" flex items-center gap-3">
                    {data ? (
                        <div>
                            {data?.rating && (
                                <div className="flex gap-1">
                                    <FaStar className="text-base text-warning" />
                                    <p className="font-normal text-xs sm:text-sm text-secondary">{data?.rating}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Skeleton height={20} width={50} />
                    )}
                    {data ? (
                        <p className="font-normal text-xs sm:text-sm text-secondary">• {data?.reviews} {reviewsText}</p>
                    ) : (
                        <Skeleton height={20} width={75} />
                    )}
                    {data ? (
                        // badge 
                        <p className="text-xs bg-primary text-white leading-4 px-2 py-1 rounded-full w-fit"> {data?.stock}</p>
                    ) : (
                        <Skeleton height={24} width={80} borderRadius={50} />
                    )}
                </div>
            </div>
            <div className="border border-neutral-content w-full mt-5"></div>
            {data?.short_description ? (
                <div className="font-normal text-base text-base-200 mt-5 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: data?.short_description }}
                />
            ) : (
                <>
                    <Skeleton height={24} />
                    <Skeleton height={24} />
                    <Skeleton height={24} />
                </>
            )}

            <div className="border border-neutral-content w-full mt-5"></div>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
// ProductShortDescription.defaultProps = defaultData;