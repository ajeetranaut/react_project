import { TrendingProductCard } from "@/ui";
import Link from 'next/link';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type FlashSalemProps = {
    sectionTitle: string;
    buttonText: string;
    buttonLink: string;
    data: {
        id: number;
        name: string;
        slug: string;
        image: {
            src: string;
            alt: string;
        }[];
        price: string;
        sale_price: string;
        regular_price: string;
        discount: number;
        reviews: string;
        rating: number;
    }[] | null;
};

export const FlashSale = ({
    sectionTitle = "Our Best Selling Products",
    buttonText = "View All Deals",
    buttonLink = "/shop",
    data
}: FlashSalemProps) => {
    const cardData = data ? data.slice(0, 4) : [1, 2, 3, 4]
    return (
        <section className="container mx-auto px-3 md:px-0">
            <div className="flex flex-col items-center gap-7 md:flex-row justify-between">
                <h2 className="text-3xl md:text-3xl lg:text-4xl lg:leading-10 text-secondary font-bold">
                    {sectionTitle}
                </h2>
                <Link href={`${buttonLink}`}>
                    <button className='text-base font-medium leading-6 px-7 py-4 rounded-full bg-primary text-white hover:bg-secondary transition hover:duration-700 ease-in-out'>
                        {buttonText}
                    </button>
                </Link>
            </div>

            <div className=" mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 justify-items-center">
                {cardData?.slice(0, 4)?.map((singleData: any, index: number) => (
                    <TrendingProductCard key={index} data={singleData} />
                ))}
            </div>
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
FlashSale.defaultProps = defaultData;