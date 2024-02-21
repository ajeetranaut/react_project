"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

interface ComponentProps {
  title: string;
  loading?: boolean;
}

export const BreadcrumbOne = ({ title, loading }: ComponentProps) => {
  const pathName = usePathname();
  const segments = pathName ? pathName.split("/").filter(Boolean) : ["/"];
  const replaceName = segments[segments.length - 1]?.replace(/-/g, " ");

  const renderSegment = (segment: string, index: number) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const isLast = index === segments.length - 1;
    return (
      <React.Fragment key={index}>
        <Link
          href={path}
          className={`text-base-300 capitalize border-base-100 ${isLast ? "" : "border-r"
            } hover:text-primary transition duration-300 ease-in-out pr-2`}
        >
          {segment}
        </Link>
      </React.Fragment>
    );
  };

  return (
    <section className="py-16 font-sans text-center bg-secondary-content">
      {!loading ?
        title ? (
          <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl lg:leading-10 capitalize">{title}</h2>
        ) : replaceName ? (
          <h2 className="font-bold text-3xl md:text-3xl lg:text-4xl lg:leading-10 capitalize">{replaceName}</h2>
        ) : null : (
          <Skeleton height={40} width={250} />
        )}
      <div className="flex items-center justify-center h-5 overflow-hidden gap-2 mx-auto mt-4">
        {!loading ?
          <Fragment>
            {segments?.length >= 3 && segments?.map((segment, index) => renderSegment(segment, index))}
            {segments?.length === 2 && (
              <>
                <div>
                  <Link
                    href="/"
                    className="text-base-300 capitalize border-base-100 hover:text-primary transition duration-300 ease-in-out border-r pr-2"
                  >
                    Home
                  </Link>
                </div>

                {title ? (
                  <p className="font-normal text-base text-base-300 capitalize border-base-100 pr-2">
                    {title}
                  </p>
                ) : (
                  renderSegment(replaceName, segments.length - 1)
                )}
              </>
            )}
            {segments?.length === 1 && (
              <p className="font-normal text-base text-base-300 capitalize border-base-100">
                {replaceName}
              </p>
            )}
          </Fragment>
          : (
            <Skeleton height={20} width={350} />
          )}
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
BreadcrumbOne.defaultProps = defaultData;
