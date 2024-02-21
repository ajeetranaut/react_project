"use client";

import { useGlobalContext } from "@/context/store";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import Skeleton from "react-loading-skeleton";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	setOpen?: any;
	dictionary: any;
}

export const CategorySubMenu = ({ setOpen, dictionary }: ComponentProps) => {
	const { allCategories } = useGlobalContext();
	return (
		<nav>
			<div className="relative flex flex-col gap-5">
				<div className="flex items-center justify-between px-6">
					<p className="font-semibold text-lg text-secondary">{dictionary?.categoryText}</p>
					<RxCross2
						className=" text-base-200 font-bold text-xl cursor-pointer transition hover:text-primary  hover:duration-700"
						onClick={() => setOpen(!open)}
					/>
				</div>
			</div>
			<div className=" mt-4 border border-secondary-content"></div>
			<div className="mt-8 px-6">
				{allCategories && allCategories?.map((singleData: any, index: number) => (
					<Link href={`/product-category/${singleData?.slug}`} key={index} onClick={() => setOpen(!open)}>
						<div>
							<div className=" flex items-center justify-between mb-5 cursor-pointer text-base-content hover:text-primary transition hover:duration-700">
								<div className=" flex items-center gap-4">
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
										<Skeleton width={20} height={20} />
									)}
									<p className="font-normal text-xs sm:text-sm">{singleData.name}</p>
								</div>
								<AiOutlineRight className="text-base" />
							</div>
						</div>
					</Link>
				))}

				{/* Loader */}
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
		</nav>
	);

}
