"use client";

import { useGlobalContext } from "@/context/store";
import { IBlog, ICategory, ITag } from "@/types";
import { BlockLayout, BlogLayout, BreadcrumbTwo, Gap } from "@/ui";
import { getBlogs } from "lib/wordpress/getBlogs";
import { getCategories } from "lib/wordpress/getCategories";
import { getTags } from "lib/wordpress/getTags";
import { Fragment, useEffect, useState, useTransition, } from "react";

const BlogBody = () => {
  const [, startTransition] = useTransition();
  const { direction, dictionaries } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<IBlog[] | null>(null);
  const [categoryData, setCategoryData] = useState<ICategory[] | null>(null);
  const [tagsData, setTagsData] = useState<ITag[] | null>(null)
  const [pageData, setPageData] = useState<number>(6);

  const handleClick = () => {
    setPageData(pageData + 6);
    setLoading(true)
  };

  // fetch blogs with pagination
  useEffect(() => {
    const closeId = setTimeout(() => {
      if (loading) {
        startTransition(() => {
          (async () => {
            const { data: blogsData } = await getBlogs({ per_page: pageData });
            setPosts(blogsData)
            setLoading(false)
          })();
        })
      }
    }, 100);

    return () => clearTimeout(closeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // NOTE: all the data fetch from server side for the first time
  useEffect(() => {
    startTransition(() => {
      // NOTE: This is for all categories server side data fetch
      getCategories().then((res) => {
        setCategoryData(res.data);
      }).catch((err) => {
        console.log(err)
        setCategoryData([])
      });
      // NOTE: This is for all tags server side data fetch
      getTags().then((res) => {
        setTagsData(res.data);
      }).catch((err) => {
        console.log(err)
        setTagsData([])
      })
    });

    return () => {
      setCategoryData(null);
      setTagsData(null);
    };
  }, []);

  return (
    <Fragment>
      <BreadcrumbTwo title={dictionaries?.blog?.breadcrumb?.title} description={dictionaries?.blog?.breadcrumb?.description} />
      <Gap className="mt-14 md:mt-20" />
      <BlockLayout>
        <BlogLayout
          data={posts || []}
          categoryData={categoryData || []}
          tagData={tagsData || []}
          handleClick={handleClick}
          pageData={pageData}

          directionType={direction}
          sidebarTitles={dictionaries?.blog?.sidebarTitles}
          authorByText={dictionaries?.blog?.authorByText}
        />
      </BlockLayout>
      <Gap />
    </Fragment>
  );
};
export default BlogBody;
