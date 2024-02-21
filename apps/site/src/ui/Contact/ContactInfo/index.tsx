"use client";

import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
  data: {
    [language: string]: {
      title: string;
      contact1: string;
      contact2: string;
    }[];
  }
  textType: string;
};

export const ContactInfo = ({ data, textType }: ComponentProps) => {
  // get option data from language 
  const infoData = data[textType]
  return (
    <section className="container mx-auto flex flex-col md:flex-row gap-6 lg:gap-7 px-5 md:px-0 w-full">
      {infoData?.map((singleData: any, index: number) => (
        <div className="w-full" key={index}>
          <div className="p-6 lg:p-7 xl:p-10 border border-neutral-content rounded-xl">
            <h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-secondary">
              {singleData.title}
            </h3>
            <p className="font-normal text-xl text-base-200 mt-4">
              {singleData.contact1}
            </p>
            <p className="font-normal text-xl text-base-200">
              {singleData.contact2}
            </p>
          </div>
        </div>
      ))}
      {!infoData &&
        [1, 2, 3].map((singleData: any, index: number) => (
          <div key={index} className="w-full">
            <div className="p-6 lg:p-7 xl:p-10 border border-neutral-content rounded-xl">
              <Skeleton height={30} width={120} />
              <div className=" mt-4">
                <Skeleton height={20} width={220} />
                <Skeleton height={20} width={220} />
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
ContactInfo.defaultProps = defaultData;
