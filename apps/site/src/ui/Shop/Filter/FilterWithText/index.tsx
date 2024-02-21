'use client'

import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    name: string;
    filterItems: { name: string; slug: string; id?: string }[]
}

export const FilterWithText = ({ name, filterItems }: ComponentProps) => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <div className="border border-neutral-content rounded-t-xl">
            {/* filter header */}
            <div onClick={() => setIsOpen(!isOpen)} className="bg-secondary-content w-full py-6 rounded-t-xl px-6">
                {name ? (
                    <div className="flex items-center justify-between cursor-pointer">
                        <p className="font-normal text-lg uppercase text-secondary">{name}</p>
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H14V2H0V0Z" fill="#71717A" />
                        </svg>
                    </div>
                ) : (
                    <Skeleton height={20} />
                )}
            </div>

            {isOpen && (
                <div className="p-6 w-full h-full">
                    {filterItems && filterItems.length > 0
                        ? filterItems.map((item, index) => (
                            <Link key={index} href={`/product-category/${item?.slug}`}>
                                <div className="flex items-center justify-between group cursor-pointer">
                                    <p className="font-normal text-base text-base-300 capitalize py-1.5 group-hover:text-primary transition duration-300 ease-in-out">
                                        {item?.name}
                                    </p>
                                    <svg
                                        className="text-base-200 group-hover:text-primary transition duration-300 ease-in-out"
                                        width="8"
                                        height="12"
                                        viewBox="0 0 8 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.97656 5.99999L0.851562 1.87499L2.0299 0.696655L7.33323 5.99999L2.0299 11.3033L0.851562 10.125L4.97656 5.99999Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        ))
                        : [1, 2, 3, 4, 5].map((index: number) => <Skeleton key={index} height={20} />)}
                </div>
            )}
        </div>
    )
}

// NOTE: This is the default data that you can use to test this component
FilterWithText.defaultProps = defaultData;