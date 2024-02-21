"use client";;
import Image from "next/image";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { CartCount } from "../CartCount";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	headerText?: {
		product: string;
		price: string;
		quantity: string;
		subtotal: string;
	}
	itemsData: {
		title: string;
		slug: string;
		item_key: string;
		featured_image: string;
		price: string;
		quantity: {
			value: number;
		}
		totals: {
			total: number;
			subtotal: string;
		}
	}[];
	onRemoveCartItem: (value: any) => void
	onUpdateCartItem: (itemKey: string, count: number) => void
};

export const CartItems = ({ itemsData, onRemoveCartItem, onUpdateCartItem, headerText }: ComponentProps) => {
	const AllCartItems = itemsData ? itemsData : [];
	const convertPrice = (price: string) => {
		const finalPrice = (parseInt(price) / 100).toFixed(2);
		return finalPrice;
	};
	return (
		<>
			{/* large screen view */}
			<div className="hidden md:grid grid-cols-12 gap-5 xl:gap-10 justify-between border bg-secondary-content rounded-xl w-full px-4 py-5">
				<div className="col-span-6">
					<p className="font-medium text-base uppercase pl-11  text-base-300">
						{headerText?.product}
					</p>
				</div>
				<div className="flex justify-between col-span-6">
					<p className="font-medium text-base uppercase text-base-300">
						{headerText?.price}
					</p>
					<p className="font-medium text-base uppercase text-base-300">
						{headerText?.quantity}
					</p>
					<p className="font-medium text-base uppercase text-base-300 pr-5">
						{headerText?.subtotal}
					</p>
				</div>
			</div>

			{AllCartItems?.map((singleData: any, index: number) => {
				return (
					<div
						key={index}
						className="hidden md:grid grid-cols-12 gap-5 xl:gap-10 justify-between w-full border mt-3 rounded-xl px-4 py-5"
					>
						<div className="flex items-center w-full gap-7 col-span-6">
							<div className="shrink-0">
								<RxCross2
									className="w-5 h-5 cursor-pointer text-base-200 hover:text-primary transition duration-300 ease-in-out"
									onClick={() => {
										onRemoveCartItem(singleData?.item_key);
									}}
								/>
							</div>
							<div className="bg-secondary-content flex items-center justify-center p-1 rounded-xl shrink-0">
								<Image
									src={singleData?.featured_image}
									alt={'product'}
									width={50}
									height={50}
									layout="intrinsic"
									objectFit="cover"
									priority={true}
									className="rounded-xl"
								/>
							</div>
							<Link href={`/shop/product/${singleData?.slug}`}>
								<p className="font-medium text-base text-secondary line-clamp-1">
									{singleData?.title}
								</p>
							</Link>
						</div>
						<div className="flex items-center justify-between col-span-6">
							<p className="font-medium text-base text-base-200">
								${convertPrice(singleData?.price)}
							</p>
							{/* cart quantity  */}
							<CartCount data={singleData} onUpdateCartItem={onUpdateCartItem} />
							<p className="font-medium text-base text-base-200 text-end">
								${(singleData?.totals?.total).toFixed(2)}
							</p>
						</div>
					</div>
				)
			}
			)}

			{/* small screen view */}
			<div className="w-full mt-10 md:hidden">
				{AllCartItems?.map((singleData: any, index: number) => {
					return (
						<div key={index} className="w-full p-4 mt-3 border rounded-xl">
							<div className="flex items-center justify-between w-full gap-6">
								<div className="shrink-0">
									<Image
										src={singleData?.featured_image}
										alt={'product'}
										width={50}
										height={50}
										layout="intrinsic"
										objectFit="cover"
										priority={true}
										className="rounded-xl"
									/>
								</div>
								<Link href={`/shop/product/${singleData?.slug}`}>
									<p className="font-medium text-base text-secondary line-clamp-1">
										{singleData?.title}
									</p>
								</Link>
								<RxCross2
									className="w-5 h-5 cursor-pointer text-base-200 shrink-0"
									onClick={() => {
										onRemoveCartItem(singleData?.item_key);
									}}
								/>
							</div>
							<div className="flex items-center justify-between mt-7">
								<div className="space-y-5">
									<p className="font-medium text-base uppercase text-base-300 text-start">
										{headerText?.price}
									</p>
									<p className="font-medium text-base uppercase text-base-300 text-start">
										{headerText?.quantity}
									</p>
									<p className="font-medium text-base uppercase text-base-300 text-end">
										{headerText?.subtotal}
									</p>
								</div>
								<div className="space-y-5">
									<p className="font-medium text-base text-base-200 text-end">
										${convertPrice(singleData?.price)}
									</p>
									{/* cart quantity  */}
									<CartCount data={singleData} onUpdateCartItem={onUpdateCartItem} />
									<p className="font-medium text-base text-base-200 text-end">
										${singleData?.totals?.total}
									</p>
								</div>
							</div>
						</div>
					)
				}
				)}
			</div>
		</>
	);
}

// NOTE: This is the default data that you can use to test this component
CartItems.defaultProps = defaultData;