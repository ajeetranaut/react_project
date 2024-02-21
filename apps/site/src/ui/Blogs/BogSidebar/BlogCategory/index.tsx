import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    data: {
        name: string;
        count: number;
        slug: string;
    }[];
    title: string;
};

export const BlogCategory = ({ data, title, }: ComponentProps) => {
    const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5];
    return (
        <div className="border rounded-2xl p-7">
            <p className="font-medium text-xl text-neutral/90 mb-6 capitalize">{title}</p>

            {cardData?.map((item: any, index: number) => (
                item?.name ? (
                    <Link key={index} href={`/blog-category/${item.slug}`}>
                        <div className="flex items-center justify-between border-b py-4 ">
                            <p
                                className="font-normal text-base text-base-300/80 capitalize hover:text-primary transition hover:duration-700"
                            >
                                {item?.name} {item?.count && `(${item?.count})`}
                            </p>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.5 11L6.5 6L1.5 1"
                                    stroke="#6B7280"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </Link>
                ) : (
                    <Skeleton key={index} height={24} width={300} />
                )
            ))}
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
BlogCategory.defaultProps = defaultData;