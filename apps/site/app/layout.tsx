import Provider from "@/context/provider";
import React from "react";
// Full site global styles here
import "../styles/globals.css";
// React-loading-skeleton styles here
import { auth } from "auth";
import { SessionProvider } from "next-auth/react";
import { cookies } from "next/headers";
import 'react-loading-skeleton/dist/skeleton.css';
import { Locale } from "../i18n-config";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const cookieStore = cookies();
	const getLang = cookieStore.get("lang");

	// @ts-ignore
	const lang: Locale = getLang ? getLang.value : "en";
	const session = await auth()

	return (
		<SessionProvider session={session}>
			<Provider language={lang}>
				{children}
			</Provider>
		</SessionProvider>
	);
}
