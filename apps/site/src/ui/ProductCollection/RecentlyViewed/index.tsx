"use client";
import { TrendingProductCard } from "@/ui";
import Link from "next/link";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface RecentlyViewedProps {
  title?: string;
  data?: any;
  link?: string;
  buttonText?: string;
}

export const RecentlyViewed = ({
  data,
  title = "Recently Viewed",
  link = "/recently-viewed",
  buttonText = "View More",
}: RecentlyViewedProps) => {
  const cardData = data ? data : [1, 2, 3, 4];
  return (
    <>
      <section className="container mx-auto px-5 md:px-0">
        <div className=" flex items-center flex-col gap-5 md:flex-row justify-between">
          <h2 className="font-bold text-xl lg:text-3xl md:leading-10 text-secondary"> {title}</h2>
          <Link href={link}>
            <button className="text-base leading-6 px-7 py-4 font-medium cursor-pointer rounded-full bg-secondary-content text-base-300 hover:bg-primary hover:text-white transition hover:duration-700 ease-in-out">
              {buttonText}
            </button>
          </Link>
        </div>
        <div className=" mt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7 justify-items-center">
          {cardData
            ?.slice(0, 4)
            ?.map((singleData: any, index: number) => <TrendingProductCard key={index} data={singleData} />)}
        </div>
      </section>
    </>
  );
};

export default RecentlyViewed;

// NOTE: This is the default data that you can use to test this component
RecentlyViewed.defaultProps = defaultData;
