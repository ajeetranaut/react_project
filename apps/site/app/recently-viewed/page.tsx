import type { Metadata } from "next";
import { Fragment } from "react";
import RecentlyViewedBody from "./PageBody";

export const metadata: Metadata = {
	title: "Recently Viewed Page | MetaShop",
	description: "Recently Viewed  Page description",
};

const RecentlyViewedPage = () => {

	return (
		<Fragment>
			<RecentlyViewedBody />
		</Fragment>
	);
};
export default RecentlyViewedPage;
