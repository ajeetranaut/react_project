"use client";

//import defaultData from "./data.json";
import { CartAndBuy, ImageGallery, ProductShortDescription } from '@/ui';

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
        type: string;
        externalUrl: string;
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
        defaultAttributes: {
            name: string;
            option: string;
        }[];
    };
    buttonText: {
        addCart: string;
        buyNow: string;
    };
    detailsText: {
        colorTitle: string;
        socialTitle: string;
        reviewsText: string;
    };
    isLoading: any
}

export const ProductDetails = ({ data, buttonText, detailsText, isLoading }: ComponentProps) => {

    return (
        <section className="px-5 md:px-0">
            <div className="container mx-auto flex flex-col lg:flex-row gap-12">
                <div className=" w-full lg:w-1/2">
                    <ImageGallery images={data?.image} discount={data?.discount} />
                </div>
                <div className="w-full lg:w-1/2">
                    <ProductShortDescription data={data} reviewsText={detailsText?.reviewsText} />
                    <div className="mt-5">
                        <CartAndBuy data={data} buttonText={buttonText} detailsText={detailsText}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
// ProductDetails.defaultProps = defaultData;