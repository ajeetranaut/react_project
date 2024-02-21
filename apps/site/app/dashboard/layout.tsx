import {auth} from "@/context/auth";
import {sidebarMenu} from "@/data/SidebarMenu";
import {BlockLayout, DashboardSideBar, Gap} from "@/ui";
import {getDictionary} from "@/utils/get-dictionary";
import {cookies} from "next/headers";
import React, {Fragment} from "react";

export default async function DashboardLayout({children}: { children: React.ReactNode }) {
	// get lang from cookie
	const cookieStore = cookies();
	const getLang = cookieStore.get("lang");
	// @ts-ignore
	const lang: Locale = getLang ? getLang.value : i18n.defaultLocale;
	const dictionary = await getDictionary(lang);
	// NOTE: Get user data from auth
	const session = await auth();
	
	return (
		<Fragment>
			<Gap className="mt-14"/>
			<BlockLayout>
				<div className="lg:flex items-start gap-10 space-y-10 lg:space-y-0">
					<DashboardSideBar
						// userData={userData}
						sidebarMenu={sidebarMenu}
						textData={dictionary?.dashboard?.sidebarText}
						session={session}
					/>
					{children}
				</div>
			</BlockLayout>
			<Gap/>
		</Fragment>
	)
}