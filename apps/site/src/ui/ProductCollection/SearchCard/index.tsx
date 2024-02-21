"use client";

import Link from 'next/link';
import SearchItem from "@/ui/ProductCollection/SearchCard/searchItem";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	searchProducts?: any;
	show: boolean;
	setShow: (value: boolean) => void;
	loading: boolean;
	dictionary: any;
};

export const SearchCard = ({ searchProducts, show, setShow, loading, dictionary }: ComponentProps) => {
	let largeSize = true
	if (typeof window !== 'undefined') {
		const widthWidth = window.innerWidth;
		largeSize = widthWidth > 1170;
	}

	return (
		<div
			className={`bg-white z-50 w-full px-7 py-7 mb-2 rounded-xl overflow-y-auto scrollBar ${show ? "block" : "hidden"
				} ${largeSize ? "absolute  shadow-dropShadow2xl max-h-[600px] h-fit" : "mt-44 fixed left-0 right-0 top-0 bottom-0 h-auto"
				}`}
		>
			{(!loading && searchProducts) && searchProducts?.length > 0 && (
				<div className="flex items-center justify-between pb-5">
					<p className="font-normal text-xs sm:text-sm text-secondary">{searchProducts?.length} {dictionary?.resultText}</p>
					<Link href={"/shop"} className="font-normal text-xs sm:text-sm text-primary">
						{dictionary?.viewAllText}
					</Link>
				</div>
			)}
			{(!loading && searchProducts) && searchProducts?.length === 0 && (
				<div className="flex justify-center py-14">
					<p className="font-normal text-xs sm:text-sm text-secondary">
						{dictionary?.noResultText}
					</p>
				</div>
			)}

			{(!loading && searchProducts) ? (
				searchProducts?.map((item: any, index: number) => (
					<SearchItem key={index} item={item} setShow={setShow} />
				))
			) : (
				<div className="flex justify-center py-14">
					<svg
						className={`ml-2 h-7 w-7 animate-spin text-red-500`}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				</div>
			)}
		</div>
	);
}
