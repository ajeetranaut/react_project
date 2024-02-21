"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slide from "./Slide";

export default function SyncSlider({
	data,
}: {
	data: {
		title: string;
		excerpt: string;
		button: {
			title: string;
			link: string;
			target: string;
		};
		image: {
			src: string;
			width: number;
			height: number;
			index: number;
		};
		offer: string;
		offerType: string;
	}[];
}) {
	{
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

		const [active, setActive] = useState(0);

		return (
			<div style={{ overflow: "hidden" }} className=" relative">
				<Slider {...settings}>
					{data.map((singleData: any, index: number) => (
						<div key={index} onFocus={() => setActive(index)}>
							<Slide
								title={singleData.title}
								excerpt={singleData.excerpt}
								button={singleData.button}
								image={singleData.image}
								offer={singleData.offer}
								offerType={singleData.offerType}
							/>
						</div>
					))}
				</Slider>
				<div className="absolute bottom-14 w-full flex items-center justify-center gap-2 z-[2]">
					<div className={`h-[5px] w-8 ${active === 0 ? "bg-primary" : " bg-neutral-content"}`}></div>
					<div className={`h-[5px] w-8 ${active === 1 ? "bg-primary" : " bg-neutral-content"}`}></div>
					<div className={`h-[5px] w-8 ${active === 2 ? "bg-primary" : " bg-neutral-content"}`}></div>
				</div>
			</div>
		);
	}
}
