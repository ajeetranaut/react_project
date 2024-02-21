"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import { defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	sidebarMenu?: {
		title?: string;
		icon?: JSX.Element;
		link: string;
	}[];
	userData?: {
		username: string;
		avatar_url?: any;
	};
	textData?: {
		editText?: string;
	};
	session?: Session | null;
};

export const DashboardSideBar = ({ sidebarMenu, userData, textData, session }: ComponentProps) => {
	const [loading, setLoading] = useState(false)
	const pathname = usePathname()
	const { user } = session || {}
	return (
		<>
			{/* large device dashboard */}
			<div className="w-56 p-5 border rounded-2xl lg:w-80 shrink-0 border-neutral-content hidden lg:block">
				<div className="flex flex-wrap items-center gap-4 p-4 lg:flex-nowrap rounded-xl bg-secondary-content">
					<Image
						src={`${user?.avatar_urls[96] ?? `https://ui-avatars.com/api/?name=${user?.username}`}`}
						alt={"user_avatar"}
						width={60}
						height={60}
						layout="intrinsic"
						objectFit="cover"
						priority={true}
						className="rounded-lg shrink-0"
					/>
					<div>
						{user ? (
							<p className="font-semibold text-base lg:text-xl text-secondary">
								{user?.username}
							</p>
						) : (
							<div className="w-20 h-5 bg-gray-300/50 animate-pulse rounded-lg" />
						)}
						<Link href={"/dashboard/account-settings"}>
							<p className="font-medium text-xs sm:text-sm mt-1 text-primary">
								{textData?.editText}
							</p>
						</Link>
					</div>
				</div>
				<div className="mt-5">
					{sidebarMenu?.map((item, index) => (
						<Link key={index} href={`${item?.link}`}>
							<div
								className={`flex items-center gap-4 p-4 rounded-lg group cursor-pointer transition duration-500 ease-in-out ${item?.link === pathname ? "bg-primary" : ""} `}
							>
								<p className={`${item?.link === pathname ? "text-white" : "text-base-300 group-hover:text-primary"}`}>
									{item.icon}
								</p>
								<p
									className={`font-normal text-lg ${item?.link === pathname ? "text-white" : "text-base-300 group-hover:text-primary"}`}
								>
									{item.title}
								</p>
							</div>
						</Link>
					))}
					{userData ? (
						<div
							onClick={() => {
								signOut()
								setLoading(true)
							}}
							className="flex items-center gap-4 p-4 rounded-lg cursor-pointer group hover:bg-primary transition duration-500 ease-in-out"
						>
							{loading ? (
								<FormLoader />
							) : (
								<svg
									className="text-base-300 group-hover:text-white transition duration-500 ease-in-out"
									width="22"
									height="20"
									viewBox="0 0 22 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 2.81829e-06 10 2.81829e-06C11.5527 -0.00116364 13.0842 0.359775 14.4729 1.05414C15.8617 1.74851 17.0693 2.75718 18 4H15.29C14.1352 2.98176 12.7112 2.31836 11.1887 2.0894C9.66625 1.86044 8.11007 2.07566 6.70689 2.70922C5.30371 3.34277 4.11315 4.36776 3.27807 5.66119C2.44299 6.95462 1.99887 8.46153 1.999 10.0011C1.99913 11.5407 2.4435 13.0475 3.27879 14.3408C4.11409 15.6341 5.30482 16.6589 6.7081 17.2922C8.11139 17.9255 9.66761 18.1405 11.19 17.9113C12.7125 17.6821 14.1364 17.0184 15.291 16H18.001C17.0702 17.243 15.8624 18.2517 14.4735 18.9461C13.0846 19.6405 11.5528 20.0013 10 20ZM17 14V11H9V9H17V6L22 10L17 14Z"
										fill="currentColor"
									/>
								</svg>
							)}

							<p
								className="font-normal text-lg flex items-center gap-3 text-base-300 group-hover:text-white transition duration-500 ease-in-out"
							>
								{loading ? "Processing..." : "Logout"}
							</p>
						</div>
					) : (
						""
					)}
				</div>
			</div>

			{/* small device dashboard */}
			<div className="flex justify-center items-center gap-1.5 p-3 border border-neutral-content rounded-2xl cursor-pointer lg:hidden">
				{sidebarMenu?.map((item, index) => (
					<Link key={index} href={`${item?.link}`} className="w-full">
						<div
							className={`flex justify-center w-full py-5 rounded-lg cursor-pointer ${item?.link === pathname && "bg-primary transition duration-500 ease-in-out"
								}`}
						>
							<p className={`${item?.link === pathname ? "text-white" : "text-base-300"}`}>
								{item.icon}
							</p>
						</div>
					</Link>
				))}
				<div
					onClick={() => {
						signOut()
					}}
					className="flex justify-center w-full py-5 rounded-lg cursor-pointer group hover:bg-primary transition duration-500 ease-in-out"
				>
					<svg
						className="text-base-300 group-hover:text-white transition duration-500 ease-in-out"
						width="22"
						height="20"
						viewBox="0 0 22 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 2.81829e-06 10 2.81829e-06C11.5527 -0.00116364 13.0842 0.359775 14.4729 1.05414C15.8617 1.74851 17.0693 2.75718 18 4H15.29C14.1352 2.98176 12.7112 2.31836 11.1887 2.0894C9.66625 1.86044 8.11007 2.07566 6.70689 2.70922C5.30371 3.34277 4.11315 4.36776 3.27807 5.66119C2.44299 6.95462 1.99887 8.46153 1.999 10.0011C1.99913 11.5407 2.4435 13.0475 3.27879 14.3408C4.11409 15.6341 5.30482 16.6589 6.7081 17.2922C8.11139 17.9255 9.66761 18.1405 11.19 17.9113C12.7125 17.6821 14.1364 17.0184 15.291 16H18.001C17.0702 17.243 15.8624 18.2517 14.4735 18.9461C13.0846 19.6405 11.5528 20.0013 10 20ZM17 14V11H9V9H17V6L22 10L17 14Z"
							fill="currentColor"
						/>
					</svg>
				</div>
			</div>
		</>
	);
}

// NOTE: This is the default data that you can use to test this component
DashboardSideBar.defaultProps = defaultData;