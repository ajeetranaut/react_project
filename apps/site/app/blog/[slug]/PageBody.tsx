"use client";

import { useGlobalContext } from "@/context/store";
import { IBlog, ICategory } from "@/types";
import { BlockLayout, BlogCategory, BlogContent, BlogTags, CommentsForm, CommentsSection, Gap, RecentPosts, SearchSidebar, SocialShare } from "@/ui";
import { getBlogComments, getBlogs } from "lib/wordpress/getBlogs";
import { getCategories } from "lib/wordpress/getCategories";
import { Fragment, useEffect, useState, useTransition, } from "react";

const BlogSingleBody = ({
	slug
}:
	{
		slug: any,
	}) => {
	const { direction, dictionaries } = useGlobalContext();
	const [, startTransition] = useTransition();
	const [singleBLog, setSingleBLog] = useState<IBlog | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<IBlog[] | null>(null);
	const [categoryData, setCategoryData] = useState<ICategory[] | null>(null);
	const [getAllComments, setGetAllComments] = useState<any | null>(null);

	// *** fetch single blog ***
	useEffect(() => {
		setIsLoading(true);
		const closeId = setTimeout(() => {
			startTransition(() => {
				(async () => {
					const { data: blogsData } = await getBlogs({ slug: slug });
					setSingleBLog(blogsData[0]);
					setIsLoading(false);
				})();
			});
		}, 100);
		return () => clearTimeout(closeId);
	}, [slug]);

	// *** fetch all blogs ***
	useEffect(() => {
		setIsLoading(true);
		const closeId = setTimeout(() => {
			startTransition(() => {
				(async () => {
					const { data: blogsData } = await getBlogs({ per_page: 6 });
					setData(blogsData);
					setIsLoading(false);
				})();
			});
		}, 100);
		return () => clearTimeout(closeId);
	}, []);

	// *** fetch all categories ***
	useEffect(() => {
		setIsLoading(true);
		const closeId = setTimeout(() => {
			startTransition(() => {
				(async () => {
					const { data: categoriesData } = await getCategories();
					setCategoryData(categoriesData);
					setIsLoading(false);
				})();
			});
		}, 100);
		return () => clearTimeout(closeId);
	}, []);

	// *** fetch all comments ***
	useEffect(() => {
		setIsLoading(true);
		const closeId = setTimeout(() => {
			if (singleBLog) {
				startTransition(() => {
					(async () => {
						const { data: commentsData } = await getBlogComments(singleBLog?.id);
						setGetAllComments(commentsData);
						setIsLoading(false);
					})();
				});
			}
		}, 100);
		return () => clearTimeout(closeId);
	}, [singleBLog]);

	return (
		<Fragment>
			<Gap className="mt-14 md:mt-20" />
			<BlockLayout>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
					<div className="lg:col-span-8">
						<BlogContent
							authorByText={dictionaries?.blog_single?.authorByText}
							data={singleBLog || null}
						/>
						<Gap className="mt-16" />
						<SocialShare title={dictionaries?.blog_single?.socialShareText} />
						<Gap className="mt-14 md:mt-20" />
						<CommentsSection
							replyFormText={dictionaries?.blog_single?.replyFormText}
							getAllComments={getAllComments}
							postID={singleBLog?.id}
						/>
						<Gap className="mt-16" />
						{/* @ts-ignore */}
						<CommentsForm
							fromText={dictionaries?.blog_single?.commentFormText}
						// postId={post[0]?.id}
						/>
					</div>
					<div className="lg:col-span-4">
						<SearchSidebar
							title={dictionaries?.blog_single?.sidebarTitles?.searchSidebarTitle}
							inputPlaceholder={dictionaries?.blog_single?.sidebarTitles?.searchPlaceholder}
							directionType={direction}
						/>
						<Gap className="mt-7" />
						<BlogCategory
							title={dictionaries?.blog_single?.sidebarTitles?.categorySidebarTitle}
							data={categoryData || []}
						/>
						<Gap className="mt-7" />
						<RecentPosts
							title={dictionaries?.blog_single?.sidebarTitles?.recentPostsSidebarTitle}
							authorByText={dictionaries?.blog_single?.authorByText}
							data={data || []}
						/>
						<Gap className="mt-7" />
						<BlogTags
							title={dictionaries?.blog_single?.sidebarTitles?.tagsSidebarTitle}
							data={singleBLog ? singleBLog?.tags.length > 0 ? singleBLog?.tags : null : null}
						/>
					</div>
				</div>
			</BlockLayout>
			<Gap />
		</Fragment>
	);
};
export default BlogSingleBody;
