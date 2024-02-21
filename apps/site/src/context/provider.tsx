"use client";
import { GlobalConsumer, GlobalProvider } from "@/context/store";
import { Footer, Navbar, SignupSignin } from "@/ui";
import MobileNavModal from "@/ui/Nav/MobileNavModal";
import { Inter } from 'next/font/google';
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import SaveDictionary from "./saveDictionary";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const Provider = ({ children, language }: { children: ReactNode; language: any }) => {
	return (
		<GlobalProvider>
			<GlobalConsumer>
				{({ lang, direction, dictionaries }) => {
					return (
						<html lang={lang} className={`${inter.variable}`}>
							<body dir={direction}>
								<SaveDictionary lang={language}>
									<Navbar dictionary={dictionaries} />
									{children}
									<Footer
										infoData={dictionaries?.footer?.info}
										quickLinkData={dictionaries?.footer?.quick_links}
										accountData={dictionaries?.footer?.account}
										supportData={dictionaries?.footer?.support}
										emailSubscribeData={dictionaries?.footer?.newsletter}
										copy_right={dictionaries?.footer?.copy_right}
									/>
									<Toaster
										position="top-right"
										toastOptions={{
											duration: 3000,
										}}
									/>

									{/* NOTE: Sign In & Sign Up Modal	*/}
									<SignupSignin dictionary={dictionaries} />

									{/* NOTE: Mobile Nav Modal */}
									<MobileNavModal dictionary={dictionaries.header} />
								</SaveDictionary>
							</body>
						</html>
					);
				}}
			</GlobalConsumer>
		</GlobalProvider>
	);
};
export default Provider;
