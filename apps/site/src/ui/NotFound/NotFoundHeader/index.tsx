"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    textData?: {
        headerText: string;
        descriptionText: string;
        beckHome: string;
        previousPage: string;
        directionType: string;
    }
};

export const NotFoundHeader = ({ textData }: ComponentProps) => {
    const router = useRouter();
    return (
        <div className="flex flex-wrap items-center justify-center w-full max-w-2xl mx-auto sm:flex-nowrap">
            <div className={`pb-10  sm:pb-0 ${textData?.directionType === "ltr" ? "sm:pr-14" : "sm:pl-14"} `}>
                <h1 className="font-normal text-7xl text-neutral">404</h1>
            </div>
            <div className={`pt-5 text-center border-t sm:text-left sm:pt-0 sm:border-t-0 ${textData?.directionType === "ltr" ? "sm:border-l sm:pl-14" : "sm:border-r sm:pr-14"}  border-neutral-content `}>
                <h3 className="font-bold text-xl md:text-2xl sm:leading-8 font-sans text-neutral">
                    {textData?.headerText}
                </h3>
                <p className="font-normal text-lg mt-2 text-base-300">
                    {textData?.descriptionText}
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 sm:flex-nowrap sm:justify-start">
                    <Link href="/"
                        className="text-sm leading-5 px-6 py-2.5 bg-secondary-content text-base-300 hover:bg-primary hover:text-white transition hover:duration-700 font-medium  rounded-md ease-in-out"
                    >
                        {textData?.beckHome}
                    </Link>
                    <div>
                        <button
                            onClick={() => router.back()}
                            className="text-sm leading-5 px-6 py-2.5 bg-secondary-content text-base-300 hover:bg-primary hover:text-white transition hover:duration-700 font-medium  rounded-md ease-in-out"
                        >
                            {textData?.previousPage}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
NotFoundHeader.defaultProps = defaultData;