'use client';
import { useGlobalContext } from "@/context/store";
import LangOptions from "@/ui/Nav/TopNavbar/LangOption";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Suspense } from "react";
import { RxCross2 } from "react-icons/rx";

const MobileNavModal = ({ dictionary }: { dictionary: any }) => {
	const { toggleLoginModal, hydration, lang, changeLang, changeDirection, mobileMenu, setMobileMenu } = useGlobalContext()
	const { data: session, update } = useSession()
	return (
		<nav>
			<div className="block lg:hidden">
				<div
					className={`overflow-y-auto z-40 flex pt-5 top-0 flex-col h-screen w-full max-w-[300px] fixed bg-white  duration-500  ease-in-out  gap-2 md:gap-0 ${mobileMenu ? "left-0" : "-left-full"
						}`}
				>
					<div className="relative flex flex-col gap-5">
						<div className="flex items-center justify-between px-6">
							<p className="font-semibold text-lg">
								{dictionary?.menuName}
							</p>
							<RxCross2
								className=" text-base-200 font-bold text-xl cursor-pointer transition hover:text-primary  hover:duration-700"
								onClick={() => setMobileMenu(!mobileMenu)}
							/>
						</div>
					</div>
					<div className=" mt-4 border border-secondary-content"></div>

					{!session && (
						<div className="flex items-center justify-center" onClick={toggleLoginModal}>
							<div onClick={() => setMobileMenu(false)}>
								<p
									className="font-medium text-base text-base-content cursor-pointer  mt-7 py-4 px-10 bg-secondary-content rounded-lg  hover:bg-primary transition hover:duration-500 hover:text-white">
									{dictionary?.loginText} <span className="text-primary-content/70 px-1">{
										dictionary?.or
									}</span> {dictionary?.registerText}
								</p>
							</div>
						</div>
					)}

					<div className=" mt-7 px-6 flex flex-col gap-5">
						{dictionary?.menu?.map((singleData: any, index: number) => (
							<div key={index} onClick={() => setMobileMenu(false)}>
								<Link
									href={singleData.link}
									className="font-medium text-base text-base-300 whitespace-nowrap hover:text-primary transition hover:duration-700"
								>
									{singleData.name}
								</Link>
							</div>
						))}
					</div>
					{session && (
						<div onClick={() => {
							setMobileMenu(false)
							signOut();
						}}
							className={"px-6"}
						>
							<p
								className="font-medium text-base text-base-content text-center cursor-pointer w-full mt-7 py-4 px-10 bg-secondary-content rounded-lg  hover:bg-primary transition hover:duration-500 hover:text-white">
								{dictionary?.logoutText}
							</p>
						</div>
					)}
					<div className="mt-7 border border-secondary-content"></div>
					<div className="flex items-center justify-center gap-3">
						<div>
							{hydration ? (
								<select
									name="country"
									id="countries"
									className="text-sm font-normal py-3 outline-none cursor-pointer uppercase"
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
						{/* NOTE: Hide currency for now */}
						{/*<div className=" h-4 w-0.5  bg-base-200"/>*/}
						{/*<label>*/}
						{/*	<select*/}
						{/*		name="country"*/}
						{/*		id="countries"*/}
						{/*		className="text-sm font-normal text-base-300 outline-none cursor-pointer  py-3  bg-white"*/}
						{/*	>*/}
						{/*		<option value="">USD</option>*/}
						{/*		<option value="">REL</option>*/}
						{/*		<option value="">PESO</option>*/}
						{/*	</select>*/}
						{/*</label>*/}
					</div>
				</div>
			</div>
			<div
				className={`lg:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out  bg-[#868687] opacity-80 h-full w-full ${mobileMenu ? "left-0" : "-left-full"
					}`}
				onClick={() => setMobileMenu(false)}
			/>
		</nav>
	)
}
export default MobileNavModal;