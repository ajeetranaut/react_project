"use client";

import moment from "moment";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { defaultData } from "./data";
import avatar from './icons/avatar.png';


// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	postID: number;
	replyFormText?: {
		cancelText: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		messagePlaceholder: string;
		replyButtonText: string;
	}
	item: {
		id: number;
		author: string;
		publishTime: string;
		content: string;
		avatar: {
			src: string;
			alt: string;
		}
	};
};

export const CommentItem = ({ item, postID, replyFormText }: ComponentProps) => {
	const [commentLoader, setCommentLoader] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const [showErrMessage, setShowErrMessage] = useState(false);
	const [errMessage, setErrMessage] = useState("");

	const [isOpen, setIsOpen] = React.useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data: any) => {
		setCommentLoader(true);
		const replyDataInput = {
			author_name: data?.name,
			author_email: data?.email,
			content: data?.message,
			post: postID,
			parentId: data?.commentId,
		};
	};

	const contentReplace = (content: string) => {
		const replace = content?.replace(/<p>/g, "<p/>");
		const replace2 = replace?.replace(/(<([^>]+)>)/gi, "");
		return replace2;
	};

	const bodyRef = React.useRef(null);


	return (
		<div className="pt-10 border-b">
			<div className="flex items-center justify-between">
				<div className="flex items-start gap-5">
					<Image src={item?.avatar?.src ? item?.avatar?.src : avatar} alt={item?.avatar?.alt ? item?.avatar?.alt : "image"} height={64} width={64} className="rounded-full" priority={true} />
					<div>
						<p className="font-sans text-base font-semibold text-themeSecondary">{item?.author}</p>
						<span className="font-sans text-sm text-themeGrayLight">
							{moment(item?.publishTime).startOf("hour").fromNow()}
						</span>
					</div>
				</div>

				{/* start modal here */}
				<div>
					{isOpen && (
						<div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
							<div
								ref={bodyRef}
								className="transition-all transform bg-white rounded-lg shadow-lg sm:max-w-lg sm:w-full border"
							>
								<form onSubmit={handleSubmit(onSubmit)} className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
									<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
										<p
											onClick={() => {
												setIsOpen(!isOpen);
												reset();
											}}
											className="pb-4 text-lg font-medium leading-6 text-gray-900 transition-all duration-300 cursor-pointer hover:text-blue-300 ml-auto w-fit"
										>
											{replyFormText?.cancelText}
										</p>
										{showMessage && (
											<p className="px-10 mt-10 mb-6 font-bold border-l-4 rounded-lg bg-success-content text-success font-2xl py-7 border-success">
												Thanks For Your Comment. Your Comment Is Under Review Now.
											</p>
										)}
										{showErrMessage && (
											<p className="px-10 mt-10 mb-6 font-bold border-l-4 rounded-lg bg-warning-content text-warning font-2xl py-7 border-warning">
												{errMessage}
											</p>
										)}
										<div className="mt-2 hidden">
											<input
												className="block w-full px-4 py-3 transition duration-150 ease-in-out border rounded-md form-input sm:text-sm sm:leading-5 focus:outline-none"
												type="text"
												placeholder="Id"
												defaultValue={item?.id}
												{...register("commentId")}
											/>
										</div>
										<div className="mt-2">
											<input
												className={`block w-full px-4 py-3 transition duration-150 ease-in-out border rounded-md form-input sm:text-sm sm:leading-5 focus:outline-none ${errors?.name ? "border-red-500" : "border-secondary-content"
													}`}
												type="text"
												placeholder={replyFormText?.namePlaceholder}
												{...register("name", { required: true })}
											/>
										</div>
										<div className="mt-2">
											<input
												className={`block w-full px-4 py-3 transition duration-150 ease-in-out border rounded-md form-input sm:text-sm sm:leading-5 focus:outline-none ${errors?.email ? "border-red-500" : "border-secondary-content"
													}`}
												type="email"
												placeholder={replyFormText?.emailPlaceholder}
												{...register("email", { required: true })}
											/>
										</div>
										<div className="mt-2">
											<textarea
												className={`block w-full h-32 px-4 py-3 transition duration-150 ease-in-out border rounded-md form-input sm:text-sm sm:leading-5 focus:outline-none ${errors?.message ? "border-red-500" : "border-secondary-content"
													}`}
												placeholder={replyFormText?.messagePlaceholder}
												{...register("message", { required: true })}
											/>
										</div>
										<button
											disabled={commentLoader}
											type="submit"
											className="px-6 py-3 mt-5 text-white bg-blue-500 rounded flex justify-center capitalize"
										>
											<span className={`${commentLoader ? "ml-2" : ""}`}>{commentLoader ? "Wait.." : replyFormText?.replyButtonText}</span>
										</button>
									</div>
								</form>
							</div>
						</div>
					)}
				</div>
				{/*end  modal here */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer h-fit bg-secondary-content"
				>
					<p className="font-medium text-xs sm:text-sm">{replyFormText?.replyButtonText}</p>
					<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1.25 5.5H8.75C10.3413 5.5 11.8674 6.13214 12.9926 7.25736C14.1179 8.38258 14.75 9.9087 14.75 11.5V13M1.25 5.5L5.75 10M1.25 5.5L5.75 1"
							stroke="#4B5563"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</div>
			<div className="pt-5 mb-10 md:ml-20 lg:pt-2">
				<p className="font-sans text-base text-themeLightDark">{contentReplace(item?.content)}</p>
				{/* reply section can be added here  */}
			</div>
		</div>
	);
}

// NOTE: This is the default data that you can use to test this component
CommentItem.defaultProps = defaultData;