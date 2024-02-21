"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { HiStar } from "react-icons/hi2";
import Skeleton from "react-loading-skeleton";

import Rating from "react-rating";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
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
    short_description: string;
  };
}

export const ProductCardTwo = ({ data }: ComponentProps) => {
  const replaceContent = data?.short_description?.replace(/<p>/g, "").replace(/<\/p>/g, "");

  return (
    <div className="max-w-[1200px] flex flex-wrap md:flex-nowrap gap-5 xl:gap-10 items-center border border-neutral-content p-6 rounded-3xl justify-center">
      <Link href={`/shop/product/${data?.slug}`} className="p-4 bg-secondary-content overflow-hidden rounded-xl relative md:shrink-0">
        {data.image ? (
          data?.image
            ?.slice(0, 1)
            .map((image: any, index: number) => (
              <Image
                key={index}
                src={image?.src}
                alt={image?.alt}
                width={245}
                height={245}
                layout="intrinsic"
                objectFit="cover"
                priority={true}
                className="w-full hover:scale-125 transition duration-500 cursor-pointer"
              />
            ))
        ) : (
          <Skeleton height={245} width={245} />
        )}

        {typeof data?.discount === "number" && data?.discount > 0 ? (
          <span className="font-semibold text-sm leading-5 px-3 py-1 absolute top-4 right-3 w-fit bg-primary text-white rounded-full">
            {data?.discount.toFixed(0)}%
          </span>
        ) : typeof data?.discount === "number" && data?.discount === -Infinity ? (
          <span className="font-semibold text-sm leading-5 px-3 py-1 absolute top-4 right-3 w-fit bg-primary text-white rounded-full">
            SALE!
          </span>
        ) : (
          ""
        )}
      </Link>
      <div>
        {data?.name ? (
          <Link href={`/shop/product/${data?.slug}`}>
            <h3 className="font-bold text-xl md:text-2xl sm:leading-8 font-sans text-secondary line-clamp-1 hover:text-primary  transition hduration-300 ease-in-out">
              {data.name}
            </h3>
          </Link>
        ) : (
          <div className="mt-5">
            <Skeleton height={32} />
          </div>
        )}
        {data?.short_description ? (
          <p className="font-normal text-lg text-base-200 mt-3 line-clamp-3">{replaceContent}</p>
        ) : (
          <div className=" mt-3">
            <Skeleton width={340} count={3} />
          </div>
        )}
        {data ? (
          <Fragment>
            {data?.sale_price && data?.regular_price ? (
              <div className="flex items-center gap-2 mt-3">
                <p className="font-normal text-xl text-primary">${data.sale_price}</p>
                <p className="font-normal text-xs sm:text-sm text-base-200 line-through">
                  ${data.regular_price}
                </p>
              </div>
            ) : (
              <div className="flex items-center gap-2 mt-3">
                {data?.price || data?.regular_price || data?.id ? (
                  <p className="font-normal text-xl text-primary">${data.price || data.regular_price || 0.0}</p>
                ) : (
                  <div className="mt-2">
                    <Skeleton height={12} width={140} />
                  </div>
                )}
              </div>
            )}
          </Fragment>
        ) : (
          <div className="mt-2">
            <Skeleton height={12} width={140} />
          </div>
        )}
        {data?.rating ? (
          <div className="flex items-center gap-2 mt-3">
            {/* @ts-ignore */}
            <Rating
              readonly
              initialRating={data?.rating}
              emptySymbol={<HiStar className="text-base-100 h-4 w-4" />}
              fullSymbol={<HiStar className="text-warning h-4 w-4" />}
            />
            <p className="font-normal text-xs sm:text-sm text-base-200 mb-0.5">(2)</p>
          </div>
        ) : (
          <Skeleton height={12} width={140} />
        )}
      </div>
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
ProductCardTwo.defaultProps = defaultData;
