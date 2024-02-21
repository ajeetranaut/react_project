"use client";

import React from "react";
import { defaultData } from "./data";
import { BlogCard } from "@/ui";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	authorByText: string;
	data: {
		id: number;
		title: string;
		slug: string;
		featuredmedia: {
			sourceUrl: string;
			alt: string;
		};
		category: {
			name: string;
		}[]
		content: string;
		author: string;
		authorId: number;
	}[];
	handleClick: (value: any) => void;
	pageData: number;
	loadButtonText: string;
};

export const CategoryCards = ({ data, authorByText, pageData, handleClick, loadButtonText }: ComponentProps) => {
	const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5, 6];
	return (
		<section className="container mx-auto mb-14 lg:mb-24 px-5 md:px-0">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 col-span-12 lg:col-span-8 h-fit">
				{cardData.map((singleData: any, index: number) => (
					<BlogCard key={index} data={singleData} authorByText={authorByText} />
				))}
			</div>
			{cardData?.length > 1 && cardData.length === pageData && (
				<>
					<div className="flex items-center justify-center mt-10 lg:mt-14">
						<div onClick={handleClick}>
							<button
								className="bg-secondary text-white font-medium text-base leading-6 px-7 py-4  hover:bg-primary hover:text-white transition hover:duration-700 rounded-md ease-in-out">
								{loadButtonText}
							</button>
						</div>
					</div>
				</>
			)}
		</section>
	);
}

// NOTE: This is the default data that you can use to test this component
CategoryCards.defaultProps = defaultData;