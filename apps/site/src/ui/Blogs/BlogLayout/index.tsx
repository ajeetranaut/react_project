"use client";

import { BlogCard, BlogCategory, BlogTags, Gap, RecentPosts, SearchSidebar } from "@/ui";
import React from "react";
import { defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    data: {
        id: number;
        title: string;
        slug: string;
        featuredmedia: {
            sourceUrl: string;
            alt: string;
        };
        category: {
            name: string;
        }[]
        content: string;
        author: string;
        authorId: number;
    }[];
    categoryData: {
        name: string;
        count: number;
        slug: string;
    }[];
    tagData: {
        name: string;
        slug: string;
    }[];
    handleClick: (value: any) => void;
    pageData: number;
    sidebarTitles: {
        searchSidebarTitle: string;
        searchPlaceholder: string;
        categorySidebarTitle: string;
        recentPostsSidebarTitle: string;
        tagsSidebarTitle: string;
        sidebarMobileButton: string;
    }
    authorByText?: string;
    directionType: any

};

export const BlogLayout = ({
    data, categoryData, tagData, handleClick, pageData, sidebarTitles, authorByText, directionType
}: ComponentProps) => {
    const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5, 6];
    const [open, SetOpen] = React.useState(false);
    return (
        <>
            <div
                onClick={() => SetOpen(!open)}
                className="flex items-center justify-between px-5 py-4 border rounded-lg mb-10 cursor-pointer lg:hidden"
            >
                <p className="font-medium text-base capitalize">{sidebarTitles?.sidebarMobileButton}</p>
                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z" fill="#64748B" />
                </svg>
            </div>
            <div className="grid grid-cols-12 gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 col-span-12 lg:col-span-8">
                    {cardData.map((item: any, index: number) => (
                        <BlogCard key={index} data={item} authorByText={authorByText} />
                    ))}
                    {cardData?.length > 5 && cardData.length === pageData && (
                        <>
                            <div className="flex items-center justify-center lg:justify-end mt-10 lg:mt-14">
                                <div onClick={handleClick}>
                                    <button className="font-medium text-base leading-6 px-7 py-4 rounded-md ease-in-out bg-secondary text-white hover:bg-primary hover:text-white transition hover:duration-700">
                                        Load More
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="hidden lg:block col-span-12 lg:col-span-4">
                    <SearchSidebar title={sidebarTitles?.searchSidebarTitle} inputPlaceholder={sidebarTitles?.searchPlaceholder} directionType={directionType} />
                    <Gap className="mt-7" />
                    <BlogCategory title={sidebarTitles?.categorySidebarTitle} data={categoryData} />
                    <Gap className="mt-7" />
                    <Gap className="mt-7" />
                    <RecentPosts data={data} title={sidebarTitles?.recentPostsSidebarTitle} authorByText={authorByText} />
                    <Gap className="mt-7" />
                    <BlogTags title={sidebarTitles?.tagsSidebarTitle} data={tagData} />
                </div>
            </div>
            {/* small device blog sidebar */}
            <div>
                <div className="block lg:hidden relative">
                    <div
                        className={`overflow-y-auto z-40 flex pt-5 top-0 flex-col  h-screen w-full max-w-xs sm:max-w-md fixed bg-white duration-300 ease-in-out gap-2 md:gap-0 ${open ? "left-0" : "-left-full"
                            }`}
                    >
                        <div className="relative flex flex-col gap-5">
                            <div className="flex items-center justify-between px-6">
                                <p className="font-semibold text-lg">More Option</p>
                                {/* cross-icon  */}
                                <svg
                                    onClick={() => SetOpen(!open)}
                                    className=" text-base-200 font-bold text-xl cursor-pointer transition hover:text-primary  hover:duration-700" stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-7 px-6 flex flex-col gap-5">
                            <SearchSidebar title={sidebarTitles?.searchSidebarTitle} inputPlaceholder={"Search Post..."} directionType={directionType} />
                            <Gap className="mt-7" />
                            <BlogCategory title={sidebarTitles?.categorySidebarTitle} data={categoryData} />
                            <Gap className="mt-7" />
                            <Gap className="mt-7" />
                            <RecentPosts data={data} title={sidebarTitles?.recentPostsSidebarTitle} authorByText={authorByText} />
                            <Gap className="mt-7" />
                            <BlogTags title={sidebarTitles?.tagsSidebarTitle} data={tagData} />
                        </div>
                    </div>
                </div>
                {/* background overlay */}
                <div
                    className={`lg:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out  bg-[#868687] opacity-80 h-full w-full ${open ? "left-0" : "-left-full"
                        }`}
                    onClick={() => SetOpen(false)}
                />
            </div>
        </>
    );
}

// NOTE: This is the default data that you can use to test this component
BlogLayout.defaultProps = defaultData;