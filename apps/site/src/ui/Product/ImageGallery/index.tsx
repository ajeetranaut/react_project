"use client";

import Image from 'next/image';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
// import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    images: {
        src: string;
        alt: string;
    }[];
    discount: number;
}

export const ImageGallery = ({ images, discount }: ComponentProps) => {
    const [active, setActive] = useState(0);
    const [image, setImage] = useState("");
    return (
        <div className="flex gap-5">
            <div
                className={`flex flex-col items-center justify-center gap-2.5 pr-1 scrollBar ${images && "overflow-y-auto"}`}
            >
                {images
                    ? images?.map((image: any, index: number) => (
                        <div
                            className={`p-2.5 border-2  w-fit h-fit rounded-[20px] cursor-pointer ${active === index ? "border-primary" : "border-neutral-content"
                                }`}
                            key={index}
                            onClick={() => {
                                setImage(image?.src);
                                setActive(index);
                            }}
                        >
                            <div className="hidden sm:block">
                                <Image
                                    src={image?.src || "https://via.placeholder.com/480x480"}
                                    alt={image?.alt}
                                    width={100}
                                    height={100}
                                    layout="intrinsic"
                                    objectFit="cover"
                                    priority={true}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="block sm:hidden">
                                <Image
                                    src={image?.src}
                                    alt={image?.alt}
                                    width={50}
                                    height={50}
                                    layout="intrinsic"
                                    objectFit="cover"
                                    priority={true}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    ))
                    : [1, 2, 3, 4].map((_, index) => <Skeleton key={index} height={120} width={100} />)}
            </div>
            <div className={`p-7 bg-secondary-content rounded-xl relative ${images ? "w-fit" : "w-full"}`}>
                {images ? (
                    <Image
                        src={image ? image : images[0]?.src || "https://via.placeholder.com/480x480"}
                        alt={'product'}
                        width={480}
                        height={480}
                        layout="intrinsic"
                        objectFit="cover"
                        priority={true}
                    />
                ) : (
                    <Skeleton height={480} />
                )}
                {/* 
                    *** if discount is a number and greater than 0 then show the badge
                */}
                {typeof discount === 'number' && discount > 0 ? (
                    <>
                        {/* badge  */}
                        <p className="text-sm leading-5 px-3 py-1 font-semibold bg-primary text-white rounded-full absolute top-7 right-7"> {discount?.toFixed(0)}%</p>
                    </>
                ) : typeof discount === 'number' && discount === -Infinity ? (
                    <p className="text-sm leading-5 px-3 py-1 font-semibold bg-primary text-white rounded-full absolute top-7 right-7">SALE!</p>
                ) : (
                    ""
                )}
            </div>
        </div>
    )
}

// [FIXME]: Need to Remove Default propos
// ImageGallery.defaultProps = defaultData;