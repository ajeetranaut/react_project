"use client";

import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    title: string;
    data: {
        name: string;
        slug: string;
    }[] | null;
};

export const BlogTags = ({ title, data }: ComponentProps) => {
    const cardData = data ? data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8] : null
    return cardData ? (
        <div className="border rounded-2xl p-7">
            <p className="font-medium text-xl text-neutral/90 mb-6 capitalize">
                {title}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-7">
                {cardData.map((item: any, index: number) => (
                    <Link key={index} href={`/blog-tag/${item.slug}`}>
                        {item?.name ? (
                            <p className="font-normal text-xs sm:text-sm text-base-300/80 border px-5 py-1.5 capitalize rounded-2xl hover:text-primary transition hover:duration-700">
                                {item.name}
                            </p>
                        ) : (
                            <Skeleton height={30} width={100} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    ) : null;
}

// NOTE: This is the default data that you can use to test this component
BlogTags.defaultProps = defaultData;