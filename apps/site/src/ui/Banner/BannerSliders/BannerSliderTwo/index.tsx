"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	data: {
		excerpt: string;
		title: {
			normalText: string;
			boldText: string;
		};
		price: {
			fromText: string;
			amount: string;
			fraction: string;
		};
		button: {
			title: string;
			link: string;
			target: string;
		};
		images: {
			imageOne: {
				src: string;
				alt: string;
			},
			imageTwo: {
				src: string;
				alt: string;
			},
		};
	}[];
};

// NOTE: This is the component that you can use in your page
export const BannerSliderTwo = ({ data }: ComponentProps) => {
	const [active, setActive] = useState(0);
	var settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 5000,
		autoplaySpeed: 10000,
		cssEase: "linear",
	};

	return (
		<div style={{ overflow: "hidden" }} className=" relative">
			<Slider {...settings}>
				{data?.map((singleData: any, index: number) => (
					<div key={index} onFocus={() => setActive(index)}>
						<Slide
							data={singleData}
						/>
					</div>
				))}
			</Slider>
			<div className="absolute bottom-4 md:bottom-5 lg:bottom-[30px] w-full flex items-center justify-center gap-1 sm:gap-2 z-[2]">
				<div className={`h-1 md:h-[5px] w-5 md:w-[30px] rounded-[5px] ${active === 0 ? "bg-primary" : " bg-white"}`}></div>
				<div className={`h-1 md:h-[5px] w-5 md:w-[30px] rounded-[5px] ${active === 1 ? "bg-primary" : " bg-white"}`}></div>
				<div className={`h-1 md:h-[5px] w-5 md:w-[30px] rounded-[5px] ${active === 2 ? "bg-primary" : " bg-white"}`}></div>
			</div>
		</div>
	);
};

// NOTE: This is the default props that you can pass to this component
BannerSliderTwo.defaultProps = defaultData;
