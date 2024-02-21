'use client'

import { FilterWithOnlyRadio, FilterWithSlider, FilterWithText } from '@/ui';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	textData?: {
		title: string;
		categoryTitle: string;
		colorTitle: string;
		priceTitle: string;
	}
	categorydata: { name: string; slug: string; id?: string }[]
	colorAttributeData?: { name: string; value?: string | number }[];
	setColorAttribute: (value: any) => void;
	setPriceRange: (value: any) => void;
	setFilterOpen: (value: any) => void;
	filterOpen: boolean;
	setLoading: (value: boolean) => void;
}

export const FilterCollection = ({ categorydata, colorAttributeData, setColorAttribute, setPriceRange, filterOpen, setFilterOpen, textData, setLoading }: ComponentProps) => {
	return (
		<>
			{/* large device design */}
			<div className="w-full hidden lg:block lg:w-3/12 space-y-7">
				<FilterWithText name={textData?.categoryTitle} filterItems={categorydata} />
				<FilterWithOnlyRadio name={textData?.colorTitle} filterItems={colorAttributeData} setValue={setColorAttribute} setLoading={setLoading} />
				<FilterWithSlider name={textData?.priceTitle} setPriceRange={setPriceRange} setLoading={setLoading} />
			</div>
			{/* small device design */}
			<div className="block lg:hidden relative">
				<div
					className={`overflow-y-auto z-40 flex pt-5 top-0 flex-col  h-screen w-full max-w-[300px]  fixed bg-white duration-300 ease-in-out gap-2 md:gap-0 ${filterOpen ? "left-0" : "-left-full"
						}`}
				>
					<div className="flex items-center justify-between px-6 mb-4">
						<p className="font-semibold text-lg">{textData?.title}</p>
						{/* cross-icon  */}
						<svg
							onClick={() => setFilterOpen(!filterOpen)}
							className=" text-base-200 font-bold text-xl cursor-pointer transition hover:text-primary  hover:duration-700"
							stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 15 15"
							height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd"
								d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
								fill="currentColor">
							</path>
						</svg>
					</div>
					<hr />
					<div className="grid gap-5 mt-7 px-6">
						<FilterWithText name={textData?.categoryTitle} filterItems={categorydata} />
						<FilterWithOnlyRadio name={textData?.colorTitle} filterItems={colorAttributeData} setValue={setColorAttribute} />
						<FilterWithSlider name={textData?.priceTitle} setPriceRange={setPriceRange} setLoading={setLoading} />
					</div>
				</div>
			</div>
			{/* background overlay */}
			<div
				className={`lg:hidden fixed top-0 z-30 transition-all duration-500 ease-in-out  bg-[#868687] opacity-80 h-full w-full ${filterOpen ? "left-0" : "-left-full"
					}`}
				onClick={() => setFilterOpen(false)}
			/>
		</>
	)
}

// NOTE: This is the default data that you can use to test this component
FilterCollection.defaultProps = defaultData;