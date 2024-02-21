"use client";

import { useGlobalContext } from "@/context/store";
import { IBlog } from "@/types";
import { BreadcrumbOne, CategoryCards, Gap } from "@/ui";
import { getBlogs } from "lib/wordpress/getBlogs";
import { useSearchParams } from 'next/navigation';
import React, { Fragment, useEffect, useState, useTransition, } from "react";

const SearchBody = () => {
  const [, startTransition] = useTransition();
  const { dictionaries } = useGlobalContext();
  const searchParams = useSearchParams() as any
  const SearchQuery = searchParams.get('query')
  const [postsBySearch, setPostsBySearch] = useState<IBlog[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = React.useState<number>(9);
  const handleClick = () => {
    setPageData(pageData + 9);
  };

  // fetch blogs with search query and pagination
  useEffect(() => {
    if (SearchQuery) {
      setIsLoading(true)
      const closeId = setTimeout(() => {
        startTransition(() => {
          (async () => {
            const { data: blogsData } = await getBlogs({ search: SearchQuery, per_page: pageData });
            setPostsBySearch(blogsData)
            setIsLoading(false)
          })();
        })
      }, 100);
      return () => clearTimeout(closeId);

    }
  }, [SearchQuery, pageData]);

  const searchTitle = SearchQuery || "Searching";

  return (
    <Fragment>
      <BreadcrumbOne title={`${dictionaries?.blog_search?.breadcrumb?.title} ${searchTitle}`} />
      <Gap />
      {postsBySearch && postsBySearch?.length === 0 && !isLoading && (
        <div className="flex  justify-center my-32">
          <p className="font-normal text-xl text-secondary mt-5">
            {dictionaries?.blog_search?.noResultText}
          </p>
        </div>
      )}
      {!isLoading && postsBySearch && postsBySearch?.length > 0 &&
        <CategoryCards
          authorByText={dictionaries?.blog_search?.authorByText}
          loadButtonText={dictionaries?.blog_search?.loadButtonText}
          data={postsBySearch}
          pageData={pageData}
          handleClick={handleClick}
        />
      }

      {isLoading && (
        <div className="flex justify-center my-32">
          <svg
            className={`ml-2 h-7 w-7 animate-spin text-red-500`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
      )}
    </Fragment>
  );
};
export default SearchBody;
