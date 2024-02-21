"use client";
import { useGlobalContext } from "@/context/store";
import { NavSearch } from "@/ui";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCartFill } from "react-icons/ri";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	dictionary: any;
}

export const MiddleNavbar = ({ dictionary }: ComponentProps) => {
	const { setMobileMenu, toggleLoginModal, cartData, cartLoader } = useGlobalContext();
	const { data: session } = useSession()

	return (
		<section>
			<nav className="bg-white flex items-center justify-between py-5 shadow-dropShadowLg lg:shadow-none">
				<div className="container mx-auto flex justify-between px-5 md:px-0">
					<Link href="/" className="md:py-2">
						<Image src="/navlogo.png" alt="Logo" width={158} height={42} />
					</Link>
					<div className="relative lg:w-6/12 xl:w-5/12">
						<NavSearch dictionary={dictionary} />
					</div>
					<div className=" hidden md:block">
						<div className=" flex gap-4 lg:gap-7 items-center">
							{session ? (
								<Link href={"/dashboard"} className="py-2">
									<BiUser className="text-2xl text-base-content hover:text-primary transition hover:duration-700 cursor-pointer" />
								</Link>
							) : (
								<BiUser
									onClick={toggleLoginModal}
									className="text-2xl text-base-content hover:text-primary transition hover:duration-700 cursor-pointer"
								/>
							)}

							<div className="px-3 py-2 bg-secondary-content rounded-md group cursor-pointer">
								<Link href={"/cart"} className="flex gap-3 items-center">
									<RiShoppingCartFill className="text-2xl text-base-content group-hover:text-primary transition group-hover:duration-700" />
									<div>
										{(cartLoader || !cartData?.items) ? (
											<div className="text-white text-sm bg-base-100 animate-pulse rounded-full px-3 w-10 h-4" />
										) : (
											<div className="text-white text-sm bg-primary rounded-full px-3 w-fit">
												{cartData?.items?.length > 0 ? cartData?.items?.length : 0}
											</div>
										)}
										<p className="font-medium text-xs sm:text-sm text-base-300 group-hover:text-primary transition group-hover:duration-700">
											{dictionary?.cartText}
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>

					<div className={"flex gap-4 items-center md:hidden"}>
						<GiHamburgerMenu className="text-2xl md:hidden cursor-pointer" onClick={() => setMobileMenu(true)} />
					</div>
				</div>
			</nav>
		</section>
	);
};
