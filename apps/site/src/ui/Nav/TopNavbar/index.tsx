"use client";

import { useGlobalContext } from "@/context/store";
import LangOptions from "@/ui/Nav/TopNavbar/LangOption";
import { signOut, useSession } from "next-auth/react";
import { Suspense } from "react";

// NOTE: This is the type of props that you can pass to this component

export const TopNavbar = ({ dictionary }: { dictionary: any }) => {
	const { hydration, lang, changeLang, changeDirection, toggleLoginModal } = useGlobalContext();
	const { data: session } = useSession()

	return (
		<nav className=" bg-primary">
			<div className="container items-center justify-between mx-auto lg:flex">
				<p
					className="font-normal text-xs sm:text-sm text-center text-primary-content py-4"
					dangerouslySetInnerHTML={{ __html: dictionary?.slogan }}
				/>
				<div className="hidden lg:block">
					<div className="flex items-center gap-4">
						<div>
							{hydration ? (
								<select
									name="country"
									id="countries"
									className="text-sm font-normal py-3 text-primary-content outline-none cursor-pointer uppercase bg-primary"
									onChange={(e) => {
										if (e.target.value === "ar") {
											if (changeDirection) {
												changeDirection("rtl");
											}
											changeLang(e.target.value);
										} else if (e.target.value === "en" || e.target.value === "es") {
											if (changeDirection) {
												changeDirection("ltr");
											}
											changeLang(e.target.value);
										}
									}}
								>
									<Suspense fallback={<div>Loading...</div>}>
										<LangOptions />
									</Suspense>
								</select>
							) : (
								<div className={"w-12 h-5 bg-gray-300/50 animate-pulse rounded-lg"} />
							)}
						</div>
						<hr className="h-4 w-0.5 bg-primary-content/70" />
						{/*<label>*/}
						{/*  <select*/}
						{/*    name="country"*/}
						{/*    id="countries"*/}
						{/*    className="text-sm font-normal text-primary-content outline-none cursor-pointer  py-3 bg-primary"*/}
						{/*  >*/}
						{/*    <option value="">USD</option>*/}
						{/*    <option value="">EURO</option>*/}
						{/*    <option value="">PESA</option>*/}
						{/*  </select>*/}
						{/*</label>*/}
						{/*<hr className=" h-4 w-0.5 bg-primary-content" />*/}
						{/* NOTE: Hide store location for now */}
						{/*<Link href="#" className="flex items-center  gap-1 text-primary-content py-3">*/}
						{/*	Store Location*/}
						{/*	<RiArrowDownSLine className="text-primary-content"/>*/}
						{/*</Link>*/}
						{/*<hr className=" h-4 w-0.5 bg-primary-content"/>*/}
						{/* NOTE: Hide track your order for now */}
						{/*<Link href="#" className="flex items-center gap-1 text-xs sm:text-sm text-primary-content py-3">*/}
						{/*	Track Your Order*/}
						{/*	<RiArrowDownSLine className="text-primary-content"/>*/}
						{/*</Link>*/}
						{/*<hr className=" h-4 w-0.5 bg-primary-content"/>*/}
						{!session ? (
							<div onClick={toggleLoginModal}>
								<p className="font-normal text-xs sm:text-sm text-primary-content cursor-pointer py-3">
									{dictionary?.loginText} <span className=" text-primary-content/70 px-1">{dictionary?.or}</span> {dictionary?.registerText}
								</p>
							</div>
						) : (
							<div onClick={() => {
								signOut()
							}}>
								<p className="font-normal text-xs sm:text-sm text-primary-content cursor-pointer py-3">
									{dictionary?.logoutText}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};
