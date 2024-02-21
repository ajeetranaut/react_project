"use client";

import { useGlobalContext } from "@/context/store";
import { IBlog } from "@/types";
import { BreadcrumbOne, CategoryCards, Gap } from "@/ui";
import { getBlogs } from "lib/wordpress/getBlogs";
import { getTags } from "lib/wordpress/getTags";
import { Fragment, useEffect, useState, useTransition, } from "react";

const BlogTagPageBody = ({ slug }: { slug: string }) => {
  const [, startTransition] = useTransition();
  const { dictionaries } = useGlobalContext();
  const [tagId, setTagId] = useState<number | null>(null);
  const [tagsPosts, setTagsPosts] = useState<IBlog[] | null>(null);
  const [pageData, setPageData] = useState<number>(6);
  const handleClick = () => {
    setPageData(pageData + 6);
  };

  // fetch tag by slug to get tag-id
  useEffect(() => {
    const closeId = setTimeout(() => {
      startTransition(() => {
        (async () => {
          const { data: TagsData } = await getTags({ slug: slug });
          setTagId(TagsData?.[0]?.id)
        })();
      })
    }, 100);

    return () => clearTimeout(closeId);
  }, [slug]);

  // fetch blogs with tag and pagination
  useEffect(() => {
    const closeId = setTimeout(() => {
      if (tagId && pageData) {
        startTransition(() => {
          (async () => {
            const { data: blogsData } = await getBlogs({ tags: tagId, per_page: pageData });
            setTagsPosts(blogsData)
          })();
        })
      }
    }, 100);

    return () => clearTimeout(closeId);
  }, [pageData, tagId]);

  const tag = slug ? slug : "Tag"
  return (
    <Fragment>
      <BreadcrumbOne title={`${dictionaries?.blog_Tag?.breadcrumb?.title} ${tag}`} />
      <Gap />
      <CategoryCards
        data={tagsPosts || []}
        handleClick={handleClick} pageData={pageData}
        authorByText={dictionaries?.blog_Tag?.authorByText}
        loadButtonText={dictionaries?.blog_Tag?.loadButtonText}
      />
    </Fragment>
  );
};
export default BlogTagPageBody;
