"use client";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import { defaultData } from "./data";


// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    title: string;
    authorByText: string;
    data: {
        title: string;
        author: string;
        authorId: number;
        featuredmedia: {
            sourceUrl: string;
            alt: string;
        }
    }[];
};

export const RecentPosts = ({ title, authorByText, data }: ComponentProps) => {
    const cardData = data?.length > 0 ? data : [1, 2, 3];
    return (
        <>
            <h3 className="font-semibold text-xl md:text-2xl sm:leading-8 font-sans text-neutral/90 mb-6">
                {title}
            </h3>
            {cardData.slice(0, 3).map((singleData: any, index: number) => (
                <div key={index} className="flex gap-5 items-center  border rounded-2xl p-3 mb-4">
                    {singleData?.featuredmedia?.sourceUrl ? (
                        <div className="sm:shrink-0">
                            <Image
                                src={singleData?.featuredmedia?.sourceUrl}
                                alt={singleData?.featuredmedia?.alt}
                                width={100}
                                height={100}
                                layout="intrinsic"
                                objectFit="cover"
                                priority={true}
                                className="rounded-xl"
                            />
                        </div>
                    ) : (
                        <Skeleton height={100} width={100} />
                    )}
                    <div>
                        {singleData?.title ? (
                            <Link href={`/blog/${singleData.slug}`}>
                                <p
                                    className="font-medium text-base text-neutral/90 line-clamp-2 hover:text-primary transition hover:duration-700"
                                >
                                    {singleData?.title}
                                </p>
                            </Link>
                        ) : (
                            <Skeleton height={30} width={100} />
                        )}
                        {singleData?.author ? (
                            <p className="font-normal text-xs sm:text-sm text-base-300/80 mt-2">
                                {authorByText}:{" "}
                                <Link href={`/author/${singleData?.authorId}`} className="text-primary">
                                    {singleData.author}
                                </Link>
                            </p>
                        ) : (
                            <div className=" mt-2">
                                <Skeleton height={20} width={200} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
}

// NOTE: This is the default data that you can use to test this component
RecentPosts.defaultProps = defaultData;