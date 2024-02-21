"use client";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

interface MiniBannerProps {
  data: {
    category: string;
    title: string;
    image: string;
    price: number;
    btn: {
      title: string;
      link: string;
      target: string;
    };
  }[];
}

export const MiniBanner = ({ data }: MiniBannerProps) => {
  const cardData = data?.length > 0 ? data : [1, 2, 3];
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 justify-items-center  px-3 md:px-0">
      {cardData.slice(0, 3).map((singleData: any, index: number) => (
        <div
          className="last:hidden last:lg:flex bg-secondary-content p-7 rounded-2xl w-full flex items-center justify-center gap-5 lg:gap-16"
          key={index}
        >
          <div>
            {singleData?.category ? (
              <p className="font-normal text-xs sm:text-sm text-base-300">{singleData.category}</p>
            ) : (
              <Skeleton width={50} height={20} />
            )}
            {singleData?.title ? (
              <h3 className="font-bold text-xl md:text-2xl sm:leading-8 font-sans text-secondary whitespace-nowrap">
                {singleData.title}
              </h3>
            ) : (
              <Skeleton width={140} height={30} />
            )}
            {singleData?.price ? (
              <div className="mt-2.5 flex items-center gap-1">
                <p className="font-normal text-xs sm:text-sm text-base-300">Starting at</p>
                <p className="font-bold text-lg text-primary">${singleData.price}</p>
              </div>
            ) : (
              <Skeleton width={50} height={20} />
            )}
            <Link
              href={singleData?.btn?.link ? singleData?.btn?.link : "#"}
              className="font-medium cursor-pointer text-base leading-6 px-6 py-2.5 rounded-full bg-white text-base-300 hover:bg-primary hover:text-white transition hover:duration-700  mt-14 block whitespace-nowrap ease-in-out"
            >
              {singleData?.btn?.title ? singleData?.btn?.title : <Skeleton width={100} height={20} />}
            </Link>
          </div>
          <div>
            {singleData?.image ? (
              <Image
                src={singleData.image}
                alt="image"
                width={160}
                height={160}
                layout="intrinsic"
                objectFit="cover"
                priority={true}
                className=""
              />
            ) : (
              <Skeleton width={160} height={160} />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
MiniBanner.defaultProps = defaultData;
