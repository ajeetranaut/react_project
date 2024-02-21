"use client";

import Image from "next/image";
import { HiStar } from "react-icons/hi2";
import Rating from "react-rating";
import { data as defaultData } from "./data";
import avatar from './icons/avatar.png';

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    data: {
        id: number;
        name: string;
        rating: number;
        content: string;
        avatar: {
            src: string;
            alt: string;
        }
    };
}

export const ReviewCard = ({ data }: ComponentProps) => {
    const repliceContent = data?.content?.replace(/<p>/g, "").replace(/<\/p>/g, "");
    return (
        <section className="p-4 bg-white rounded-2xl w-full">
            <div className=" flex items-center gap-4 mb-4">
                <div className={`relative `}>
                    <Image src={data?.avatar?.src ? data?.avatar?.src : avatar} alt={data?.avatar?.alt ? data?.avatar?.alt : "image"} height={50} width={50} className="rounded-full" priority={true} />
                </div>
                <div>
                    <p className="font-medium text-xl text-secondary">{data?.name}</p>
                    <div className="flex gap-0.5 mt-1">
                        {/* @ts-ignore */}
                        <Rating
                            readonly
                            initialRating={data?.rating}
                            emptySymbol={<HiStar className="text-base-100 h-4 w-4" />}
                            fullSymbol={<HiStar className="text-warning h-4 w-4" />}
                        />
                    </div>
                </div>
            </div>
            <p className="font-normal text-lg text-base-200">
                {repliceContent}
            </p>
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
ReviewCard.defaultProps = defaultData;