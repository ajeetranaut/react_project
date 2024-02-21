"use client";

import { useGlobalContext } from "@/context/store";
import { IBlog } from "@/types";
import { BreadcrumbOne, CategoryCards, Gap } from "@/ui";
import { getBlogs } from "lib/wordpress/getBlogs";
import { getCategories } from "lib/wordpress/getCategories";
import React, { Fragment, useEffect, useState, useTransition, } from "react";

const BlogCategoryBody = ({ slug }: { slug: string }) => {
  const { dictionaries } = useGlobalContext();

  const [, startTransition] = useTransition();
  const [categoryData, setCategoryData] = useState<IBlog[]>([]);
  const [pageData, setPageData] = useState<number>(6);
  const handleClick = () => {
    setPageData(pageData + 6);
  };

  // fetch blogs with search query and pagination
  useEffect(() => {
    if (slug && pageData) {
      const closeId = setTimeout(() => {
        startTransition(() => {
          (async () => {
            // fetch category by slug to get category-id
            const { data: categoryData } = await getCategories({ slug: slug });
            // fetch blog post by category
            const { data: blogsData } = await getBlogs({ categories: categoryData?.[0]?.id, per_page: pageData });
            setCategoryData(blogsData)
          })();
        })
      }, 100);
      return () => clearTimeout(closeId);
    }
  }, [pageData, slug]);

  return (
    <Fragment>
      <BreadcrumbOne title={`${dictionaries?.blog_category?.breadcrumb?.title} ${slug}`} />
      <Gap />
      <CategoryCards
        data={categoryData}
        handleClick={handleClick}
        pageData={pageData}
        authorByText={dictionaries?.blog_category?.authorByText} loadButtonText={dictionaries?.blog_category?.loadButtonText}
      />
    </Fragment>
  );
};
export default BlogCategoryBody;
