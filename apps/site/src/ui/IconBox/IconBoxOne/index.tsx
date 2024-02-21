"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import defaultData from "./data";

// NOTE: This is the type of props that you can pass to this component
type IconBoxOneProps = {
  data:
  | {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[]
  | null;
};

// NOTE: This is the default data that you can use to test this component
export const IconBoxOne = ({ data }: IconBoxOneProps) => {
  return (
    <div className="container mx-auto">
      <div className="px-5 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {/* main card display */}
          {data &&
            data?.map(
              (
                item: {
                  icon: React.ReactNode;
                  title: string;
                  description: string;
                },
                index: number,
              ) => (
                <div
                  className="flex flex-col justify-center items-center border border-neutral-content rounded-2xl py-8 lg:py-10 hover:shadow-dropShadowXl transition hover:duration-700 group"
                  key={index}
                >
                  <div className="fill-primary">{item?.icon}</div>
                  <div className="text-center">
                    {/* <h6 className="text-lg font-medium text-secondary mt-4 mb-1">{item?.title}</h6> */}
                    <p className="font-medium text-lg text-secondary group-hover:text-primary transition group-hover:duration-700 mt-4 mb-1">
                      {item?.title}
                    </p>
                    {/* <p className="text-sm font-normal text-base-200">{item?.description}</p> */}
                    <p className="font-normal text-xs sm:text-sm text-base-200">{item?.description}</p>
                  </div>
                </div>
              ),
            )}

          {/* loading skeleton */}
          {!data &&
            [1, 2, 3, 4]?.map((item: any, index: number) => (
              <div key={index} className="relative rounded-2xl overflow-hidden">
                <Skeleton height={210} />
                <div className="absolute inset-x-0 bottom-[115px] rounded z-20 flex justify-center">
                  <SkeletonTheme baseColor="#2020201f" highlightColor="#f5f5f5">
                    <Skeleton height={60} width={60} />
                  </SkeletonTheme>
                </div>
                <div className="absolute inset-x-0 bottom-[72px] rounded z-20 px-16">
                  <SkeletonTheme baseColor="#2020201f" highlightColor="#f5f5f5">
                    <Skeleton height={25} />
                  </SkeletonTheme>
                </div>
                <div className="absolute inset-x-0 bottom-11 rounded z-20 px-10">
                  <SkeletonTheme baseColor="#2020201f" highlightColor="#f5f5f5">
                    <Skeleton height={20} />
                  </SkeletonTheme>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
IconBoxOne.defaultProps = defaultData;
