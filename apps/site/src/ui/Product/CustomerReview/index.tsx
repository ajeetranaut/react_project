"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import { ReviewCard } from "@/ui";
import { getReviews, postReview } from "lib/woocommerce/getReviews";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { HiStar } from "react-icons/hi2";
import Rating from "react-rating";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
	productId: number;
	reviewInputText: {
		header: string;
		ratingText: string;
		buttonText: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		reviewPlaceholder: string;
	}
}

type FormValues = {
	name: string;
	email: string;
	message: string;
};

export const CustomerReview = ({ productId, reviewInputText }: ComponentProps) => {
	const [loading, setLoading] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(false);
	const [reviews, setReviews] = useState([]);
	const [rating, setRating] = React.useState(0);

	const handleRating = (rate: number) => {
		setRating(rate);
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>();


	// fetch-review data by product-id
	useEffect(() => {
		if (productId) {
			(async () => {
				setIsLoading(true)
				const { reviews: reviewsData } = await getReviews(productId);
				setReviews(reviewsData)
				setIsLoading(false)
			})();
		}
	}, [productId]);

	// submit review for product
	const onSubmit = handleSubmit((data: any) => {
		if (rating === 0) {
			return toast.error('Please select rating');

		}
		const addData = {
			review: data?.message,
			reviewer: data?.name,
			reviewer_email: data?.email,
			rating: rating,
			product_id: productId,
		};
		setLoading(true);
		postReview(addData)
			.then((res) => {
				if (res?.data && !res.error) {
					toast.success('Review added successfully');
					reset();
					setLoading(false);
				} else if (res.error) {
					toast.error('Something is wrong!');
					setLoading(false);
				}
			})
			.catch(() => {
				toast.error('Something is wrong!');
				setLoading(false);
			});
	});

	return (
		<section className="flex flex-col lg:flex-row gap-12">
			<div className="w-full lg:w-1/2 h-[34rem] overflow-y-auto scrollBar">
				<div className="grid grid-cols-1 gap-3 justify-items-center">
					{/* not result message */}
					{reviews && reviews.length === 0 && !loading && !isLoading && (
						<h3 className="mt-20 text-primary font-bold text-xl md:text-2xl sm:leading-8 font-sans">
							No reviews yet
						</h3>
					)}
					{/* review lists */}
					{!isLoading && reviews?.map((items: any, index: number) => <ReviewCard data={items} key={index} />)}
					{/* review loader */}
					{isLoading && <FormLoader color="text-red-500" size="h-7 w-7" />}
				</div>
			</div>
			<div className="w-full lg:w-1/2">
				<div className="">
					<h3 className=" text-secondary font-bold text-xl md:text-2xl sm:leading-8 font-sans">
						{reviewInputText?.header}
					</h3>
					<p className="font-semibold text-base text-secondary mt-6"> {reviewInputText?.ratingText}</p>
					<div className="flex gap-1 mt-3">
						{/* @ts-ignore */}
						<Rating
							onClick={handleRating}
							initialRating={rating}
							emptySymbol={<HiStar className="text-base-100 h-6 w-6" />}
							fullSymbol={<HiStar className="text-warning h-6 w-6" />}
						/>
					</div>
					<form className="mt-8" onSubmit={onSubmit}>
						<div className="flex flex-col md:flex-row items-center gap-5">
							<input
								className={`w-full px-5 py-3 text-base outline-none bg-white border rounded placeholder:text-base-200 ${errors.name && "border-red-500"
									}`}
								placeholder={reviewInputText?.namePlaceholder}
								type="text"
								{...register("name", {
									required: true,
								})}
							/>
							<input
								className={`w-full px-5 py-3 text-base outline-none bg-white border rounded placeholder:text-base-200 ${errors.email && "border-red-500"
									}`}
								placeholder={reviewInputText?.emailPlaceholder}
								type="email"
								{...register("email", {
									required: true,
								})}
							/>
						</div>
						<textarea
							rows={8}
							cols={50}
							placeholder={reviewInputText?.reviewPlaceholder}
							className={`w-full px-5 py-3 text-base outline-none bg-white border rounded placeholder:text-base-200 mt-5 ${errors.message && "border-red-500"
								}`}
							{...register("message", {
								required: true,
							})}
						/>
						<button
							className={`font-medium cursor-pointer ease-in-out text-base leading-6 px-7  py-4 bg-secondary text-white hover:bg-primary hover:text-white transition hover:duration-700 flex gap-4 items-center justify-center w-full mt-7 ${loading ? "bg-secondary" : ""}`}
						>
							{loading && <FormLoader />}
							{loading ? "Processing..." : reviewInputText?.buttonText}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

// NOTE: This is the default data that you can use to test this component
// CustomerReview.defaultProps = defaultData;