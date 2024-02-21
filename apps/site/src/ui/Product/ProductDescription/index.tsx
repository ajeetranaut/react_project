"use client";

import { AdditionalInfo, CustomerReview } from "@/ui";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";


// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    data: {
        image: {
            src: string;
            alt: string;
        }[];
        discount: number;
        id: number;
        name: string;
        description: string;
        short_description: string;
        regular_price: string;
        sale_price: string;
        price: string;
        stock: string;
        rating: number;
        reviews: number;
        attributes: {
            name: string;
            options: [string]
        }[];
    };
    isLoading?: boolean;
    headingTitle: {
        description: string;
        additionalInfo: string;
        review: string;
    },
    reviewInputText: {
        header: string;
        ratingText: string;
        buttonText: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        reviewPlaceholder: string;
    }
}

export const ProductDescription = ({ data, isLoading, headingTitle, reviewInputText }: ComponentProps) => {
    const [active, setActive] = useState(0);
    const repliceContent = data?.description?.replace(/<p>/g, "").replace(/<\/p>/g, "");

    return (
        <section className=" container mx-auto rounded-2xl bg-secondary-content px-5 md:px-14 py-12">
            <div className="flex gap-4 md:gap-10 flex-col items-center md:items-start md:flex-row relative">
                <div className="">
                    <div
                        onClick={() => {
                            setActive(0);
                        }}
                    >
                        <h3
                            className={` ${active === 0 ? "text-primary border-b-2 border-primary " : "text-base-200"
                                } py-0 md:py-4 cursor-pointer font-medium text-xl md:text-2xl sm:leading-8 font-sans`}
                        >
                            {headingTitle?.description}
                        </h3>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setActive(2);
                    }}
                >
                    <h3
                        className={` ${active === 2 ? "text-primary border-b-2 border-primary" : "text-base-200"
                            } py-0 md:py-4 cursor-pointer font-medium text-xl md:text-2xl sm:leading-8 font-sans`}
                    >
                        {headingTitle?.additionalInfo}
                    </h3>
                </div>
                <div
                    onClick={() => {
                        setActive(3);
                    }}
                >
                    <h3
                        className={` ${active === 3 ? "text-primary border-b-2 border-primary" : "text-base-200"
                            } py-0 md:py-4 cursor-pointer font-medium text-xl md:text-2xl sm:leading-8 font-sans`}
                    >
                        {headingTitle?.review}
                    </h3>
                </div>
            </div>
            <div className="mt-6">
                {(active === 0 &&
                    (!isLoading ? (
                        <p className="font-normal text-lg text-base-300">{repliceContent}</p>
                    ) : (
                        <Skeleton height={80} />
                    ))) ||
                    (active === 2 && <AdditionalInfo productInfo={data?.attributes} />) ||
                    (active === 3 && <CustomerReview productId={data?.id} reviewInputText={reviewInputText} />)}
            </div>
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
// ProductDescription.defaultProps = defaultData;