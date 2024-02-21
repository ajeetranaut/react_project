"use client";
import { ShopProductsWrapper } from "@/components/products/ShopProductsWrapper";
import { useGlobalContext } from "@/context/store";
import { BrandData } from "@/data/BrandData";
import { BlockLayout, Brands, BreadcrumbOne, FilterCollection, Gap, HorizontalLine, PageContent, ProductHeader, RecentlyViewed, } from "@/ui";
import { filterAttribute } from "@/utils/productShop";
import { getCookie } from "cookies-next";
import { getAttributes, getAttributesTerms } from "lib/woocommerce/getAttributes";
import { getCategories } from "lib/woocommerce/getCategories";
import { getProducts } from "lib/woocommerce/getProducts";
import { Fragment, useEffect, useMemo, useState, useTransition } from "react";

const ShopLeftSidebarBody = () => {
	const { dictionaries } = useGlobalContext();
	const [totalProductCount, setTotalProductCount] = useState(0);
	const [loading, setLoading] = useState(true)
	// *** This is for all products server side data fetch ***
	const [allProductsData, setAllProductsData] = useState<[] | null>(null);
	// *** This is for all categories server side data fetch ***
	const [categories, setCategorIes] = useState<[] | null>(null)
	// *** This is for all attribute server side data fetch ***
	const [attributes, setAttributes] = useState<[] | null>(null)
	// *** This is for all recently viewed server side data fetch ***
	const [includeData, setIncludeData] = useState<[] | null>(null)
	const [filterOpen, setFilterOpen] = useState(false);
	const [productActive, setProductActive] = useState(0);
	const [pageLimit, setPageLimit] = useState(12);
	const [productSort, setProductSort] = useState("date");
	const [priceRange, setPriceRange] = useState([0, 2000]);
	const [finalPriceRange, setFinalPriceRange] = useState(priceRange); // Region This is for price range filter to set final price range
	const [colorAttribute, setColorAttribute] = useState("");
	const [, startTransition] = useTransition();
	const attributeQuery = useMemo(() => {
		return colorAttribute ? { attribute: `pa_color`, attribute_term: colorAttribute } : {};
	}, [colorAttribute]);

	// NOTE: This is for all filter server side data fetch
	useEffect(() => {
		const closeId = setTimeout(() => {
			if (loading) {
				startTransition(() => {
					getProducts({
						per_page: pageLimit,
						status: "publish",
						orderby: productSort,
						min_price: finalPriceRange[0].toString(),
						max_price: finalPriceRange[1].toString(),
						...attributeQuery,
					}).then((res) => {
						setAllProductsData(res.data);
						setTotalProductCount(res.total);
						setLoading(false)
					});
				})
			}
		}, 100);


		return () => clearTimeout(closeId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	// NOTE: all the data fetch from server side for the first time
	useEffect(() => {
		startTransition(() => {
			// NOTE: This is for all categories server side data fetch
			getCategories().then((res) => {
				setCategorIes(res.data);
			}).catch((err) => {
				console.log(err)
				setCategorIes([])
			});
			// NOTE: This is for all attribute server side data fetch
			getAttributes().then(async (res) => {
				const filterAttributes = await filterAttribute(res.data, "color");
				const { data: getColors } = await getAttributesTerms(filterAttributes?.id || 0);
				setAttributes(getColors);
			}).catch((err) => {
				console.log(err)
				setAttributes([])
			});
			// NOTE: This is for all recently viewed server side data fetch
			const getRecentlyViewed = getCookie("metashop:recentlyViewed");
			if (getRecentlyViewed) {
				const recentlyViewed = JSON.parse(getRecentlyViewed as string);

				if (recentlyViewed?.length > 0) {
					getProducts({
						per_page: 4,
						include: recentlyViewed,
					}).then((res) => {
						if (res.error) {
							setIncludeData([])
							return
						}
						setIncludeData(res.data)
					})
				}
			} else {
				setIncludeData([])
			}
		});

		// *** window focus set loading to true ***
		window.addEventListener('focus', () => {
			setLoading(true)
		})

		return () => {
			setCategorIes(null);
			setAttributes(null);
		};
	}, []);

	return (
		<Fragment>
			<BreadcrumbOne title={dictionaries?.shop?.breadcrumb?.title} />
			<Gap className="mt-16" />
			<BlockLayout Reverse="no">
				<FilterCollection
					textData={dictionaries?.shop?.filters}
					filterOpen={filterOpen}
					setFilterOpen={setFilterOpen}
					categorydata={categories ? categories : []}
					setPriceRange={setPriceRange}
					colorAttributeData={attributes ? attributes : []}
					setColorAttribute={setColorAttribute}
					setLoading={setLoading}
				/>
				<PageContent>
					<ProductHeader
						textData={dictionaries?.shop?.headerText}
						filterOpen={filterOpen}
						setFilterOpen={setFilterOpen}
						setpage={setPageLimit}
						setSort={setProductSort}
						productActive={productActive}
						setProductActive={setProductActive}
						totalProductShow={allProductsData ? allProductsData?.length : 0}
						totalProductCount={totalProductCount}
						setLoading={setLoading}
					/>
					<Gap className="mt-10" />

					<ShopProductsWrapper
						productActive={productActive}
						allProductsData={allProductsData}
						allProductsLoading={loading}
					/>

					{/* Load More button */}
					{(pageLimit < totalProductCount && !loading && allProductsData && Number(totalProductCount) !== allProductsData.length) && (
						<div className="w-full flex items-center justify-center">
							<button
								onClick={() => {
									setPageLimit(pageLimit + 12)
									setLoading(true)
								}}
								className="px-5 py-3 mt-10 text-secondary bg-secondary-content rounded-md hover:bg-secondary hover:text-secondary-content transition-all duration-300 ease-in-out"
							>
								{dictionaries?.shop?.loadMore}
							</button>
						</div>
					)}

				</PageContent>
			</BlockLayout>
			<Gap />
			<HorizontalLine />
			<Gap />
			{!includeData || includeData?.length > 0 && (
				<RecentlyViewed
					title={dictionaries?.shop?.recently_viewed.title}
					buttonText={dictionaries?.shop?.recently_viewed.btnText}
					data={includeData}
				/>
			)}
			<Gap />
			<Brands data={BrandData} />
			<Gap />
		</Fragment>
	);
};
export default ShopLeftSidebarBody;
