"use client";

import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';
import defaultData from "./data.json";


// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    title: string;
    inputPlaceholder: string;
    directionType: any;
};

export const SearchSidebar = ({ title, inputPlaceholder, directionType }: ComponentProps) => {
    const router = useRouter();
    const [search, setSearch] = React.useState("");

    const handleClick = (e: any) => {
        e.preventDefault();
        // router.push({
        //     pathname: "/blog/search",
        //     query: { query: search },
        // });
        router.push(`/blog/search?query=${search}`)
        setSearch("");
    };

    return (
        <div className="border rounded-2xl p-7">
            <p className="font-medium text-xl text-neutral/90 mb-6">{title}</p>
            <form action="">
                <div className="flex items-center">
                    <input
                        type="text"
                        className={`focus:outline-none bg-info-content w-full px-5 h-14  ${directionType === "ltr" ? "rounded-r-lg" : "rounded-l-lg"
                            }`}
                        placeholder={inputPlaceholder}
                        value={search}
                        onChange={(e: any) => setSearch(e.target.value)}
                    />
                    <button onClick={handleClick} type="submit" className={`bg-primary h-14 w-14 ${directionType === "ltr" ? "rounded-r-lg" : "rounded-l-lg"
                        }`}>
                        <svg className="w-5 h-5 text-white mx-auto" stroke="currentColor"
                            fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
SearchSidebar.defaultProps = defaultData;