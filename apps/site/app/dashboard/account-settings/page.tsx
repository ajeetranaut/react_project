import { auth } from "@/context/auth";
import type { Metadata } from "next";
import { Fragment } from "react";
import AccountSettingsBody from "./PageBody";

export const metadata: Metadata = {
	title: "Orders | MetaShop",
	description: "Dashboard Page description",
};

const AccountSettingsPage = async () => {
	// user server side data fetching
	const session = await auth();

	return (
		<Fragment>
			<AccountSettingsBody session={session} />
		</Fragment>
	);
};
export default AccountSettingsPage;
