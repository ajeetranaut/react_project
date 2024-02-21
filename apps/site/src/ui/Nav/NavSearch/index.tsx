"use client";

import { useGlobalContext } from "@/context/store";
import { SearchCard } from "@/ui";
import { useEffect, useRef, useState, useTransition } from "react";
import { getSearchProducts } from "../../../../lib/woocommerce/getSearchProducts";

export const NavSearch = ({ dictionary }: { dictionary: any }) => {
	const [search, setSearch] = useState<string>("");
	const [loading, setLoading] = useState(false);
	const [showSearch, setShowSearch] = useState(false)
	const [searchProducts, setSearchProducts] = useState([])
	const { direction } = useGlobalContext();
	const [, startTransition] = useTransition()

	const bodyRef = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			// @ts-ignore
			if (bodyRef.current && !(event.target instanceof Node && bodyRef.current.contains(event.target))) {
				setSearch("");
				setShowSearch(false)
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [bodyRef]);

	// NOTE: Search product call api by search value server side
	useEffect(() => {
		//start search after 2 character
		if (search && search?.length >= 2) {
			setLoading(true)
			setShowSearch(true)
			const closeId = setTimeout(() => {
				startTransition(() => {
					getSearchProducts(search).then((res) => {
						if (!res.error) {
							setSearchProducts(res.data)
							setLoading(false)
							// setShowSearch(true)
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
			setShowSearch(false)
			setLoading(false)
			setSearchProducts([])
		}
	}, [search]);

	return (
		<div ref={bodyRef}>
			<div className="hidden lg:block">
				<div className="flex gap-0 items-center">
					<div className="w-full relative">
						<input
							className={`placeholder:text-base-200 text-secondary outline-none text-base leading-6 px-5 py-3 bg-secondary-content ${direction === "ltr" ? "rounded-l-full pr-24" : "rounded-r-full pl-24"
								} w-full`}
							placeholder={dictionary?.searchPlaceholder}
							type="text"
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
						<SearchCard dictionary={dictionary} show={showSearch} loading={loading} searchProducts={searchProducts} setShow={setShowSearch} />

					</div>
					<div>
						<button
							className={`h-12 flex items-center text-base leading-6 px-7 font-medium ${direction === "ltr" ? "rounded-r-full" : "rounded-l-full"
								} py-4 ease-in-out bg-secondary text-white hover:bg-primary hover:text-white transition hover:duration-700`}
						>
							<p className="font-semibold text-xs sm:text-sm">
								{dictionary?.searchBtnText}
							</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
