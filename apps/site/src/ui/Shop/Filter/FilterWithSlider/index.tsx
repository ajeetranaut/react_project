'use client'

import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Range } from "react-range";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	name: string;
	setPriceRange: (value: any) => void
	setLoading?: (value: boolean) => void
}

export const FilterWithSlider = ({ name, setPriceRange, setLoading }: ComponentProps) => {
	const [isOpen, setIsOpen] = React.useState(true);
	const [values, setValues] = React.useState([0, 2000]);

	useEffect(() => {
		// after price range changed, 0.3 seconds later, set final price range
		const timer = setTimeout(() => {
			setPriceRange(values);
			if (setLoading) {
				setLoading(true)
			}
		}, 300);

		return () => clearTimeout(timer);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setPriceRange, values]);

	return (
		<div className="border border-neutral-content rounded-t-xl">
			{/* filter header */}
			<div onClick={() => setIsOpen(!isOpen)} className="bg-secondary-content w-full py-6 rounded-t-xl px-6">
				{name ? (
					<div className="flex items-center justify-between cursor-pointer">
						<p className="font-normal text-lg uppercase text-secondary">{name}</p>
						<svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0H14V2H0V0Z" fill="#71717A" />
						</svg>
					</div>
				) : (
					<Skeleton height={20} />
				)}
			</div>

			{isOpen && (
				<div className="p-6">
					<Range
						step={1}
						min={0}
						max={2000}
						values={values}
						onChange={(values) => setValues(values)}
						renderTrack={({ props, children }) => (
							<div
								{...props}
								style={{
									...props.style,
									height: "6px",
									width: "100%",
									backgroundColor: "#FF6650",
									borderRadius: "4px",
								}}
							>
								{children}
							</div>
						)}
						renderThumb={({ props }) => (
							<div
								{...props}
								style={{
									...props.style,
									height: "15px",
									width: "15px",
									borderRadius: "100%",
									backgroundColor: "#FF6650",
									borderColor: "white",
								}}
							/>
						)}
					/>
					<div className="mt-2">
						<p className="flex justify-between text-base-300 font-normal text-base">
							<span>${values[0].toFixed(1)}</span>
							<span>${values[1].toFixed(1)}</span>
						</p>
					</div>
				</div>
			)}
		</div>
	)
}

// NOTE: This is the default data that you can use to test this component
FilterWithSlider.defaultProps = defaultData;