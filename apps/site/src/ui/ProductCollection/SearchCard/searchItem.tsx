'use client';
import { useGlobalContext } from "@/context/store";
import { LoaderRound } from "@/loaders/Loader";
import { addToCartHandler } from "@/utils/cart.utils";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { HiStar } from "react-icons/hi2";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "react-rating";

type Props = {
	item: any;
	setShow: (value: boolean) => void;
};

const SearchItem = ({ item, setShow }: Props) => {
	const { mutateCart } = useGlobalContext()
	const [, startTransition] = useTransition();

	// *** filter product color attributes ***
	const colorAttribute = item?.attributes.find((attribute: any) => attribute.name.toLowerCase() === "color") as any;
	const [itemValue, setItemValue] = React.useState("");
	const [count, setCount] = React.useState(1);
	const [loader, setLoader] = React.useState(false);

	// *** select default color ***
	React.useEffect(() => {
		setItemValue(colorAttribute?.options?.[0]);
	}, [item, colorAttribute]);

	// *** Toaste function ***
	const productToast = (message: string, type: any) => {
		if (type == 'success') {
			toast.success(`${message}`);
		} else if (type == 'error') {
			toast.error(`${message}`);
		}
	};

	// *** Out of stock variant ***
	const stockOut = item?.stock === "outofstock";

	return (
		<div className="flex items-center justify-between gap-5 border-t border-neutral-content py-5">
			<div className="flex items-center gap-5">
				<div className="flex w-28 flex-none items-center justify-center p-2 bg-secondary-content rounded-xl relative shrink-0">
					<Image
						src={item.image[0].src}
						alt="image"
						width={90}
						height={90}
						layout="intrinsic"
						objectFit="cover"
						priority={true}
						className="w-full rounded"
					/>
					<p className="absolute top-4 right-3 text-xs text-white bg-primary rounded-lg px-2 pt-0.5">
						{item.discount.toFixed(0)}%
					</p>
				</div>
				<div>
					<Link
						href={`/shop/product/${item?.slug}`}
						className="font-bold text-xs sm:text-sm text-secondary hover:text-primary transition hover:duration-700 line-clamp-2"
						onClick={() => setShow(false)}
					>
						{item?.name}
					</Link>
					<div className="flex items-center gap-2 mt-2">
						<p className="font-semibold text-base text-primary"> ${item?.sale_price}</p>
						<p className="font-normal text-xs sm:text-sm text-base-200 line-through">
							${item?.regular_price}
						</p>
					</div>
					<div className="flex items-center gap-2 mt-1">
						<div className="flex items-center gap-0.5">
							{/* @ts-ignore */}
							<Rating
								readonly
								initialRating={item?.rating}
								emptySymbol={<HiStar className="text-base-100 h-4 w-4" />}
								fullSymbol={<HiStar className="text-warning h-4 w-4" />}
							/>
						</div>
						<p className="font-normal text-xs sm:text-sm text-base-200">({item?.reviews})</p>
					</div>
				</div>
			</div>
			<button
				className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary-content"
				onClick={() => {
					//   TODO: Add to cart handler
					const cartKey = getCookie("cart_key") as string;
					addToCartHandler(item, itemValue, setLoader, count, productToast, cartKey, startTransition, mutateCart).then(() => {
						setShow(false)
					})
				}}
				disabled={loader || stockOut}
			>
				{loader ? <LoaderRound /> : <RiShoppingCartLine className="w-5 h-5 text-base-300 hover:text-primary transition duration-300 ease-in-out cursor-pointer" />}
			</button>
		</div>
	)
}
export default SearchItem;