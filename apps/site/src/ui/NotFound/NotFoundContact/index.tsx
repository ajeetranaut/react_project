"use client";

import Link from "next/link";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    textData?: {
        headerText: string;
        buttonText: string;
    }
    contactUrl: string;
};

export const NotFoundContact = ({ textData, contactUrl }: ComponentProps) => {
    return (
        <div className="flex flex-wrap items-center justify-center w-full max-w-2xl gap-8 px-10 py-10 mx-auto sm:gap-0 sm:ga sm:justify-between rounded-xl mt-14 bg-secondary-content">
            <h3 className="font-normal text-xl md:text-2xl sm:leading-8 font-sans text-secondary">{textData?.headerText}</h3>
            <Link href={contactUrl}
                className="text-base leading-6 px-7 py-3 bg-primary text-white hover:bg-secondary transition hover:duration-700 font-medium rounded-md ease-in-out"
            >
                {textData?.buttonText}
            </Link>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
NotFoundContact.defaultProps = defaultData;