"use client";

import { SearchCard } from "@/ui";
import React, { useEffect, useState, useTransition } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { getSearchProducts } from "../../../../lib/woocommerce/getSearchProducts";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	setsearchOpen?: any;
	searchOpen?: any;
	dictionary: any;
}

export const SearchNavMenu = ({ setsearchOpen, searchOpen, dictionary }: ComponentProps) => {
	const [search, setSearch] = React.useState<string>("");
	const [loading, setLoading] = useState(false);
	const [searchProducts, setSearchProducts] = useState([])
	const [, startTransition] = useTransition()

	// NOTE: Search product call api by search value server side
	useEffect(() => {
		if (search && search?.length >= 2) {
			setLoading(true)
			const closeId = setTimeout(() => {
				startTransition(() => {
					getSearchProducts(search).then((res) => {
						if (!res.error) {
							setSearchProducts(res.data)
							setLoading(false)
						} else {
							setSearchProducts([])
							setLoading(false)
						}

					})
				})
			}, 500)

			return () => {
				clearTimeout(closeId)
			}
		} else {
			setSearchProducts([])
			setLoading(false)
		}
	}, [search]);

	return (
		<div className="relative h-full">
			<nav className="py-7">
				<div className="relative flex flex-col gap-5">
					<div className="flex items-center justify-between px-6">
						<p className="font-semibold text-lg  text-secondary">
							{dictionary?.searchBtnText}
						</p>
						<RxCross2
							className="text-base-200 font-bold text-2xl cursor-pointer transition hover:text-primary  hover:duration-700"
							onClick={() => {
								setsearchOpen(!searchOpen);
								setSearch("");
							}}
						/>
					</div>
				</div>
				<div className="mt-6 px-7">
					<div className="flex items-center gap-3">
						<input
							type="text"
							className="focus:outline-none bg-info-content w-full px-5 h-14 rounded-l-lg"
							placeholder={dictionary?.searchPlaceholder}
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button type="submit" className="bg-primary p-[19px] rounded-lg">
							<FiSearch className="text-white text-xl" />
						</button>
					</div>
				</div>
			</nav>
			{searchOpen && <SearchCard dictionary={dictionary} show={searchOpen} setShow={setsearchOpen} searchProducts={searchProducts} loading={loading} />}
		</div>
	);

}
