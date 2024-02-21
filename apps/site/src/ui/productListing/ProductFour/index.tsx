import React from 'react'
import { ProductCardTwo } from "@/ui";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
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
        short_description: string
    }[];
};

export const ProductFour = ({
    data
}: ComponentProps) => {
    const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return (
        <section className="grid grid-cols-1  xl:grid-cols-2 gap-7 mt-10">
            {cardData.map((singleData: any, index: number) => (
                <ProductCardTwo key={index} data={singleData} />
            ))}
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
ProductFour.defaultProps = defaultData;