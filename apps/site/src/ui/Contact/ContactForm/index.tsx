"use client";

import { FormLoader } from "@/components/formLoader/FormLoader";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	src: string;
	formText?: {
		headerText?: string
		namePlaceholder: string;
		emailPlaceholder: string;
		subjectPlaceholder: string;
		messagePlaceholder: string;
		buttonText: string;
		loadButtonText: string;
	}
	onSubmitForm: (e: any) => any;
	register: any;
	handleSubmit: (data: any) => any;
	errors: any;
	loader?: boolean;
};

export const ContactForm = ({
	src,
	handleSubmit,
	register,
	errors,
	onSubmitForm,
	loader,
	formText
}: ComponentProps) => {
	return (
		<section className="px-5 md:px-0">
			<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-14">
				<div>
					<h2 className="font-bold text-xl lg:text-3xl md:leading-10 text-secondary">
						{formText?.headerText}
					</h2>
					<form onSubmit={handleSubmit(onSubmitForm)} className="mt-7">
						<div className="flex items-center gap-5">
							<input
								className={`w-full px-5 py-3 text-base outline-none bg-secondary-content border rounded placeholder:text-base-200 ${errors?.name ? 'border-red-400' : ''
									}`}
								placeholder={formText?.namePlaceholder}
								type="text"
								{...register('name', { required: true })}
							/>
							<input
								className={`w-full px-5 py-3 text-base outline-none bg-secondary-content border rounded placeholder:text-base-200 ${errors?.email ? 'border-red-400' : ''
									}`}
								placeholder={formText?.emailPlaceholder}
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
								type="email"
								name="email"
								{...register('email', { required: true })}
							/>
						</div>
						<input
							className={`w-full px-5 py-3 text-base outline-none bg-secondary-content border rounded placeholder:text-base-200 mt-5 ${errors?.subject ? 'border-red-400' : ''
								}`}
							placeholder={formText?.subjectPlaceholder}
							type="text"
							name="subject"
							{...register('subject', { required: true })}
						/>
						<textarea
							rows={8}
							cols={50}
							placeholder={formText?.messagePlaceholder}
							name="message"
							className={`w-full px-5 py-3 text-base outline-none bg-secondary-content border rounded placeholder:text-base-200 mt-5 ${errors?.message ? 'border-red-400' : ''
								}`}
							{...register('message', { required: true })}
						/>
						<div className="w-fit h-auto mt-5">
							<button
								type="submit"
								className={`flex justify-center items-center gap-3 bg-primary text-white transition hover:duration-700 font-medium text-base leading-6 px-7 py-4 rounded-md ease-in-out ${loader ? 'cursor-not-allowed bg-secondary' : 'hover:bg-secondary'
									}`}
								disabled={loader}
							>
								{loader ? formText?.loadButtonText : formText?.buttonText}
								{loader && (
									<FormLoader color="text-white" />
								)}
							</button>
						</div>
					</form>
				</div>
				<div>
					<iframe
						src="https://www.google.com/maps/d/embed?mid=1Ud5DRnqhKifdeHQ0wjENsGgLp_0&hl=en_US&ehbc=2E312F"
						width="660"
						height="510"
						style={{ border: 0 }}
						aria-hidden="false"
						className={"rounded-xl md:block hidden"}
					/>
					{/*<Image*/}
					{/*	src={src}*/}
					{/*	alt={'map'}*/}
					{/*	width={660}*/}
					{/*	height={510}*/}
					{/*	layout="intrinsic"*/}
					{/*	objectFit="cover"*/}
					{/*	priority={true}*/}
					{/*	className="rounded-xl"*/}
					{/*/>*/}
				</div>
			</div>
		</section>
	);
};

// NOTE: This is the default data that you can use to test this component
ContactForm.defaultProps = defaultData;
