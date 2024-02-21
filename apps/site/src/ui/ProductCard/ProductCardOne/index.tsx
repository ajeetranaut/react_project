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
  };
}

export const ProductCardOne = ({ data }: ComponentProps) => {
  return (
    <div className="p-5 border border-neutral-content rounded-2xl w-full">
      <Link href={`/shop/product/${data?.slug}`} className="p-4 bg-secondary-content overflow-hidden rounded-xl relative flex items-center justify-center">
        {data ? (
          data?.image ? (
            data.image?.length > 0 ? (
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
              <Image
                src="https://via.placeholder.com/245x245"
                alt="No Image Available"
                width={245}
                height={245}
                layout="intrinsic"
                objectFit="cover"
                priority={true}
                className="w-full hover:scale-125 transition duration-500 cursor-pointer"
              />
            )) : (
            <Skeleton height={245} />
          )
        ) : (
          <Skeleton height={245} />
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
      {data?.name ? (
        <Link href={`/shop/product/${data?.slug}`}>
          <p className="text-xl font-normal text-secondary mt-5 hover:text-primary transition hover:duration-300 line-clamp-2">
            {data.name}
          </p>
        </Link>
      ) : (
        <div className="mt-5">
          <Skeleton height={20} />
        </div>
      )}
      {data ? (
        <Fragment>
          {data?.sale_price && data?.regular_price ? (
            <div className="flex items-center gap-2 mt-3">
              <p className="text-xl font-normal text-primary">${data.sale_price}</p>
              <p className="text-xs sm:text-sm font-normal text-base-200 line-through">
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
          <div className="flex items-center gap-0.5">
            {/* @ts-ignore */}
            <Rating
              readonly
              initialRating={Number(data?.rating)}
              emptySymbol={<HiStar className="text-base-100 h-4 w-4" />}
              fullSymbol={<HiStar className="text-warning h-4 w-4" />}
            />
          </div>
          <p className="font-normal text-xs sm:text-sm text-base-200 mb-0.5">({data?.reviews})</p>
        </div>
      ) : (
        <Skeleton height={12} width={140} />
      )}
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
ProductCardOne.defaultProps = defaultData;
