"use client";

import { useGlobalContext } from "@/context/store";
import { CategorySubMenu, SearchNavMenu } from "@/ui";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	dictionary: any;
}

export const BottomNavbarMenu = ({ dictionary }: ComponentProps) => {
	const [open, setOpen] = useState(false);
	const [searchOpen, setsearchOpen] = useState(false);
	const [index, setIndex] = useState(0);
	const { direction, cartData, cartLoader } = useGlobalContext();

	let get_form_info: any = getCookie("__user__login__info");
	if (get_form_info) {
		get_form_info = JSON.parse(get_form_info);
	}
	return (
		<section>
			<nav className="flex items-center justify-between bg-white p-5 shadow-boxShadowXl">
				<Link href="/">
					<AiFillHome className="text-2xl text-base-content hover:text-primary transition hover:duration-700" />
				</Link>
				<div onClick={() => setIndex(1)}>
					<FiSearch
						className="text-2xl text-base-content hover:text-primary transition hover:duration-700"
						onClick={() => setsearchOpen(!searchOpen)}
					/>
				</div>

				{get_form_info ? (
					<Link href={"/dashboard"} className="py-2">
						<BiUser className="text-2xl text-base-content hover:text-primary transition hover:duration-700 cursor-pointer" />
					</Link>
				) : null}
				<Link href={"/cart"} className=" relative group">
					<div>
						<RiShoppingCartFill className="text-2xl text-base-content group-hover:text-primary transition group-hover:duration-700" />

						{cartLoader || !cartData?.items ? (
							<div className={`text-white text-xs bg-base-100 rounded-full px-1 w-5 h-4 absolute ${direction === 'ltr' ? 'left-4' : 'right-4'} -top-3`} />
						) : (
							<div className={`text-white text-xs bg-primary rounded-full px-1 w-fit absolute ${direction === 'ltr' ? 'left-4' : 'right-4'} -top-3`}>
								{cartData?.items?.length}

							</div>
						)}
					</div>
				</Link>
				<div onClick={() => setIndex(0)}>
					<TbGridDots
						className="text-2xl text-base-content hover:text-primary transition hover:duration-700"
						onClick={() => setOpen(!open)}
					/>
				</div>
			</nav>
			{/* category result left to right menu */}
			<nav>
				<div className="block lg:hidden">
					<div
						className={`overflow-y-auto z-40 flex pt-5 top-0 flex-col h-screen w-full max-w-[300px] fixed bg-white  duration-500  ease-in-out  gap-2 md:gap-0 ${open ? "left-0" : "-left-full"
							}`}
					>
						{index === 0 && <CategorySubMenu dictionary={dictionary} setOpen={setOpen} />}
					</div>
				</div>
				<div
					className={`lg:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out  bg-[#868687] opacity-80 h-full w-full ${open ? "left-0" : "-left-full"
						}`}
					onClick={() => setOpen(!open)}
				/>
			</nav>
			{/* search top to bottom menu */}
			<nav>
				<div className="block lg:hidden">
					<div
						className={`overflow-y-auto z-40 flex flex-col h-fit w-full fixed bg-white  duration-500  ease-in-out  gap-2 md:gap-0 ${searchOpen ? "top-0" : "-top-full"
							}`}
					>
						{index === 1 && <SearchNavMenu dictionary={dictionary} setsearchOpen={setsearchOpen} searchOpen={searchOpen} />}
					</div>
				</div>
				<div
					className={`lg:hidden fixed z-30 transition-all duration-500 ease-in-out  bg-[#868687] opacity-80 h-full w-full ${searchOpen ? "top-0" : "-top-full"
						}`}
					onClick={() => setsearchOpen(!searchOpen)}
				/>
			</nav>
		</section>
	);
};
