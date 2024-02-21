"use client";

import { useGlobalContext } from "@/context/store";
import { BreadcrumbOne, CategoryCards, Gap, } from "@/ui";
import { getAuthorById } from "lib/wordpress/getAuthor";
import { getBlogs } from "lib/wordpress/getBlogs";
import { Fragment, useEffect, useState, useTransition } from "react";

const AuthorPageBody = ({ id }: { id: any }) => {
	const { dictionaries } = useGlobalContext();
	const [authInfo, setAuthInfo] = useState<any | null>(null);
	const [authPost, setAuthPost] = useState<[] | null>(null)
	const [pageData, setPageData] = useState<number>(9);
	const [, startTransition] = useTransition();
	const [loading, setLoading] = useState(true);

	// *** fetch author info ***
	useEffect(() => {
		const closeId = setTimeout(() => {
			startTransition(() => {
				if (loading) {
					(async () => {
						const { data: authData } = await getAuthorById(id);
						setAuthInfo(authData);
					})();
					(async () => {
						const { data: authPostData } = await getBlogs({
							author: id,
							per_page: pageData
						});
						setAuthPost(authPostData);
					})();
					setLoading(false)
				}
			});
		}, 100);

		return () => clearTimeout(closeId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	// *** Handle Click ***
	const handleClick = () => {
		setPageData(pageData + 9);
		setLoading(true)
	};

	return (
		<Fragment>
			<BreadcrumbOne title={authInfo ? `${dictionaries?.blog_author?.breadcrumb?.title} ${authInfo.name}` : ''} loading={authInfo ? false : true} />
			<Gap />
			<CategoryCards
				data={authPost || []}
				handleClick={handleClick}
				pageData={pageData}
				authorByText={dictionaries?.blog_author?.authorByText} loadButtonText={dictionaries?.blog_author?.loadButtonText}
			/>

		</Fragment>
	);
};
export default AuthorPageBody;
