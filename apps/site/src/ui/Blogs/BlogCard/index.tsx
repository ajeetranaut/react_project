"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    authorByText: string;
    data: {
        id: number;
        title: string;
        slug: string;
        featuredmedia: {
            sourceUrl: string;
            alt: string;
        };
        category: {
            name: string;
        }[]
        content: string;
        author: string;
        authorId: number;
    };
};

export const BlogCard = ({ data, authorByText }: ComponentProps) => {
    const contentWithStyle = data?.content?.replace(/<p>/g, "<p/>");
    const contentWithoutHtml = contentWithStyle?.replace(/(<([^>]+)>)/gi, "");
    const contentWithoutHtmlAndLimit = contentWithoutHtml?.slice(0, 375);
    return (
        <div className="p-6 border rounded-2xl h-full">
            <div className="flex items-center justify-center">
                <div className="relative w-full">
                    {data?.featuredmedia?.sourceUrl ? (
                        <Image
                            src={data?.featuredmedia?.sourceUrl}
                            alt={data?.featuredmedia?.alt}
                            width={382}
                            height={286}
                            layout="intrinsic"
                            objectFit="cover"
                            priority={true}
                            className="rounded-xl"
                        />

                    ) : (
                        <Skeleton height={286} />
                    )}
                    {data?.category &&
                        ((typeof data?.category === "string" && (
                            <p
                                className="font-medium text-xs sm:text-sm text-white rounded-lg bg-primary-content/20 border px-2 py-1 w-fit absolute bottom-6 left-6"
                            >
                                Technology
                            </p>
                        )) ||
                            (data?.category?.length > 0 &&
                                data?.category?.slice(0, 1).map((singleData: any, index: number) => (
                                    <Link href={`/blog-category/${singleData?.name}`} key={index}>
                                        <p
                                            className="font-medium text-xs sm:text-sm text-white rounded-lg bg-primary-content/20 border px-2 py-1 w-fit absolute bottom-6 left-6"
                                        >
                                            {singleData?.name}
                                        </p>
                                    </Link>
                                ))))}
                </div>
            </div>
            {data?.title ? (
                <Link href={`/blog/${data?.slug}`}>
                    <h3
                        className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-neutral/90 line-clamp-2 mt-4 hover:text-primary transition hover:duration-700"
                    >
                        {data.title}
                    </h3>
                </Link>
            ) : (
                <Skeleton height={30} />
            )}

            {data?.content ? (
                <p className="font-normal text-base text-base-300/80 mt-2.5 line-clamp-2">
                    <span
                        dangerouslySetInnerHTML={{
                            __html: contentWithoutHtmlAndLimit,
                        }}
                    ></span>
                </p>
            ) : (
                <Skeleton height={40} />
            )}
            <p className="font-normal text-xs sm:text-sm text-base-300/80 mt-2">
                {authorByText}:{" "}
                {data?.author ? (
                    <Link href={`/author/${data?.authorId}`} className="text-primary">
                        {data?.author}
                    </Link>
                ) : (
                    <Skeleton height={20} width={100} />
                )}
            </p>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
BlogCard.defaultProps = defaultData;