"use client";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type Props = {
  data: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
};

// NOTE: This is the component that you can use in your page
export const Brands = ({ data }: Props) => {
  const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5];
  return (
    <section className="px-5 md:px-0">
      <div className="container mx-auto p-14 bg-secondary-content rounded-2xl">
        <div className=" flex items-center flex-col md:flex-row justify-center gap-10">
          {cardData.slice(0, 4).map((singleData: any, index: number) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-7 md:gap-10">
              {singleData?.src ? (
                <Image src={singleData.src} alt={singleData.alt} width={152} height={90} priority={true} />
              ) : (
                <Skeleton width={152} height={90} />
              )}
              <div className=" hidden md:block border border-base-100  h-16 w-fit"></div>
              <div className="md:hidden w-28 h-0.5 bg-base-100"></div>
            </div>
          ))}
          {cardData.slice(4, 5).map((singleData: any, index: number) => (
            <div key={index}>
              {singleData?.src ? (
                <Image src={singleData.src} alt={singleData.alt} width={152} height={90} priority={true} />
              ) : (
                <Skeleton width={152} height={90} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
Brands.defaultProps = defaultData;
