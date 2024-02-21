'use client'

import React from 'react'
import ReactPaginate from "react-paginate";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    totalCount?: any;
    showPerPage?: any;
    handlePageChange: (value: any) => void
}

export const Pagination = ({ totalCount, showPerPage, handlePageChange }: ComponentProps) => {
    const pages = Math.ceil(totalCount / showPerPage);

    const numberOfPages = [];
    for (let i = 1; i <= pages; i++) {
        numberOfPages.push(i);
    }
    return (
        <div className="flex items-center justify-center gap-3 mt-20">
            <ReactPaginate
                pageCount={numberOfPages.length}
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={(data) => {
                    handlePageChange(data);
                }}
                breakLabel={
                    <button className="flex items-center justify-center text-base bg-primary hover:bg-secondary transition duration-300 ease-in-out  text-white rounded-lg px-3 py-1">
                        ...
                    </button>
                }
                previousLabel={false}
                nextLabel={false}
                onPageActive={(data) => {
                    handlePageChange(data);
                }}
                containerClassName={`flex flex-row flex-nowrap gap-3 justify-between md:justify-center items-center`}
                pageLinkClassName={`flex items-center justify-center text-base bg-primary hover:bg-secondary transition duration-300 ease-in-out text-white rounded-lg px-3 py-1`}
                breakLinkClassName={`flex items-center justify-center text-base bg-primary hover:bg-secondary transition duration-300 ease-in-out text-white rounded-lg`}
                activeLinkClassName={`active flex items-center justify-center text-base bg-secondary transition duration-300 ease-in-out  text-white rounded-lg px-3 py-1`}
            />
        </div>
    )
}

// NOTE: This is the default data that you can use to test this component
Pagination.defaultProps = defaultData;