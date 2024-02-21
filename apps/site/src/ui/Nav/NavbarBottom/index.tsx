"use client";;
import { useGlobalContext } from "@/context/store";
import NavItem from "@/ui/Nav/NavbarBottom/NavItem";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDownSLine } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import Skeleton from "react-loading-skeleton";

export const NavbarBottom = ({ dictionary }: { dictionary: any }) => {
	const { setMobileMenu, allCategories } = useGlobalContext()

	return (
		<section>
			<nav className="bg-white border-t-2 border-neutral-content border-opacity-70 hidden md:block shadow-dropShadowLg">
				<div className="container mx-auto px-5 md:px-0">
					<div className="flex items-center justify-between gap-4">
						<div className="group">
							<div className="p-4 bg-primary w-[280px] flex items-center justify-between relative cursor-pointer">
								<div className="flex gap-4 items-center">
									<TbGridDots className="text-2xl text-white" />
									<p className="font-normal text-xs sm:text-sm text-white">{dictionary?.categoryText}</p>
								</div>
								<RiArrowDownSLine className="text-white" />
							</div>
							<div
								className=" opacity-0 invisible group-hover:opacity-100 group-hover:visible transition group-hover:duration-500
               absolute top-52 z-10  ease-in-out"
							>
								<div className="bg-white p-4 w-[280px] rounded-b-xl shadow-lg">
									{allCategories && allCategories?.map((singleData: any, index: number) => (
										<Link href={`/product-category/${singleData?.slug}`} key={index}>
											<span>
												<span className=" flex items-center justify-between mb-5 cursor-pointer text-base-content hover:text-primary transition hover:duration-700">
													<span className=" flex items-center gap-4">
														{singleData?.image ? (
															<Image
																src={singleData.image}
																alt={"image"}
																width={20}
																height={20}
																layout="intrinsic"
																objectFit="cover"
																priority={true}
															/>
														) : (
															<Image
																src={'https://via.placeholder.com/150'}
																alt={"image"}
																width={20}
																height={20}
																layout="intrinsic"
																objectFit="cover"
																priority={true}
																className="w-5 h-5"
															/>
														)}
														<p className="font-normal text-xs sm:text-sm">{singleData?.name}</p>
													</span>
													<AiOutlineRight className="text-base" />
												</span>
											</span>
										</Link>
									))}
									{/*	 Loader */}
									{!allCategories && (
										<div className="flex flex-col gap-5">
											{Array.from({ length: 5 }).map((_, index) => (
												<div className="w-full" key={index}>
													<Skeleton width={"100%"} height={20} />
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</div>

						<div className="hidden lg:block">
							<div className="flex justify-center items-center gap-6">
								{dictionary?.menu?.map((singleData: any, index: number) => (
									<NavItem item={singleData} key={index} />
								))}
							</div>
						</div>
						<GiHamburgerMenu
							className="text-2xl hidden md:block lg:hidden cursor-pointer"
							onClick={() => setMobileMenu(true)}
						/>
						<div className="hidden lg:block">
							<div className="flex gap-1">
								<Link
									href={"/contact-us"}
									className="font-normal text-xs sm:text-sm line-clamp-1 text-base-300 whitespace-nowrap hover:text-primary transition hover:duration-700 py-4"
								>
									{dictionary?.helpText}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</section>
	);
};
