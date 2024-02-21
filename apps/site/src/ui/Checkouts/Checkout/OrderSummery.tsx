"use client";;
import { LoaderGrowing } from "@/components/formLoader/FormLoader";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { SummaryCheckBoxes } from "./SummaryCheckBoxes";
import { ICartDataInterface, ICompanyPolicyDataInterface, IPolicyDataInterface, ISignUpDataInterface, ISummaryTextData, ISummeryDataInterface } from "./checkoutTypes";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
	cartData?: ICartDataInterface[];
	loading?: boolean;
	summaryTextData?: ISummaryTextData
	removeCouponHandler?: () => void;
	couponSubmit?: (data: any) => void;
	couponLoader?: boolean;
	summeryData: ISummeryDataInterface;
	policyData?: IPolicyDataInterface;
	companyPolicyData?: ICompanyPolicyDataInterface;
	signUpData?: ISignUpDataInterface;
};

export const OrderSummery = (
	{
		cartData,
		loading,
		summaryTextData,
		removeCouponHandler,
		couponSubmit,
		couponLoader,
		summeryData,
		policyData,
		companyPolicyData,
		signUpData,
	}: ComponentProps) => {

	// coupon form register hook
	const {
		register: couponRegister,
		handleSubmit: couponHandleSubmit,
		formState: { errors: couponErrors, isValid: couponIsValid },
	} = useForm({
		mode: "onBlur",
	});

	// /* -------------------------------------------------------------------------- */
	// /*                         Coupon Code submit handler                         */
	// /* -------------------------------------------------------------------------- */
	// const couponSubmitHandler = async (data: any) => {
	//   // form data console
	//   if (couponSubmit) {
	//     couponSubmit(data);
	//   } else {
	//     console.log("couponSubmit", data);
	//   }
	// };

	/* -------------------------------------------------------------------------- */
	/*                         Remove Coupon Code handler                         */
	/* -------------------------------------------------------------------------- */
	const couponRemoveHandler = async (data: any) => {
		// form data console
		if (removeCouponHandler) {
			removeCouponHandler();
		} else {
			console.warn("Remove Coupon Props not passed. Please pass removeCouponHandler function props.");
		}
	};

	return (
		<div id="summary" className="2xl:max-w-md lg:w-1/3 w-11/12 mx-auto h-fit">
			<div className="bg-white sticky top-2 p-6 shadow-md rounded-xl overflow-hidden">
				{/* Form Loader */}
				{(!cartData || loading) && <LoaderGrowing />}
				{/* Title */}
				<h1 className="font-semibold text-2xl pb-7">{summaryTextData?.headerText}</h1>
				{/* Order summary */}
				<div className="relative max-h-80 overflow-y-auto mb-10 scrollBar">
					{cartData && cartData.length > 0 ? (
						cartData.map((item: any) => (
							<div className="mb-7 flex gap-5" key={item.id}>
								{/* Image here */}
								<div className="flex-none">
									{item?.featured_image ? (
										<Image
											src={item.featured_image}
											alt="Product"
											width={90}
											height={90}
											className="w-full rounded-md object-cover"
											priority
											placeholder="blur"
											blurDataURL={item.featured_image}
										/>
									) : (
										<div className="w-[90px] h-[90px] rounded-md bg-[#F2F4F4] flex items-center justify-center" />
									)}
								</div>
								{/* Product details */}
								<div className="flex-initial w-auto mr-1">
									<h3 className="line-clamp-2 text-lg text-[#283747] mb-3 leading-5">{item.title}</h3>
									<span className="text-[#283747] leading-7">
										{"$" + Math.round(Number(item.price) / 100 / item.quantity.value).toFixed(2)}
									</span>
								</div>
							</div>
						))
					) : (
						<div className="flex justify-center items-center h-14">
							<h1 className="text-lg font-medium text-center text-gray-400">{summaryTextData?.emptyText}</h1>
						</div>
					)}
				</div>
				{/* Discount Coupon input */}
				{/* <form onSubmit={couponHandleSubmit(couponSubmitHandler)}>
                    <div className="flex">
                        <div className="w-full">
                        <div className="relative">
                            <label
                            htmlFor="couponCode"
                            className={`absolute -top-2 ${couponErrors.couponCode ? "text-red-400" : "text-[#85929E]"
                                } left-3 bg-white text-xs`}
                            >
                            {summaryTextData?.couponText}
                            </label>
                            <input
                            className={`appearance-none border rounded-tl-md rounded-bl-md w-full py-3.5 px-5 ${couponErrors.couponCode ? "border-red-400" : "border-[#DDE6F5]"
                                } text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline`}
                            type="text"
                            id="couponCode"
                            placeholder="Coupon Code"
                            {...couponRegister("couponCode", {
                                required: true,
                            })}
                            />
                        </div>
                        </div>
                        <button
                        type="submit"
                        disabled={!couponIsValid || couponLoader}
                        className={`bg-gradient-to-br ${couponIsValid ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed"
                            } from-[#75B1FF] to-accent flex justify-center items-center rounded-r duration-500 ease-in-out py-3 px-5 text-base text-white`}
                        >
                        {couponLoader ? <FormLoader color="text-white" /> : summaryTextData?.couponButtonText}
                        </button>
                    </div>
                </form> */}
				{/* information */}
				<div className="mt-5">
					<ul>
						{/* Sub-Total */}
						<li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E]">
							<span>{summaryTextData?.subtotalText}</span>
							<span className="text-[#1B2631]">
								${summeryData?.subtotal?.toFixed(2) || 0}
								{/* <span className="text-[#85929E] text-sm">/year</span> */}
							</span>
						</li>
						{/* Discount */}
						<li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E]">
							<span>{summaryTextData?.discountText}</span>
							<span className="text-[#FA4F58] flex gap-3 items-center">
								- ${summeryData?.discount.toFixed(2) || 0}
								{/* add delete icon */}
								{summeryData?.discount > 0 && (
									<svg
										stroke="currentColor"
										fill="currentColor"
										stroke-width="0"
										viewBox="0 0 24 24"
										height="1em"
										width="1em"
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 cursor-pointer"
										onClick={couponRemoveHandler}
									>
										<g>
											<path fill="none" d="M0 0h24v24H0z"></path>
											<path d="M7 4V2h10v2h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5zM6 6v14h12V6H6zm3 3h2v8H9V9zm4 0h2v8h-2V9z"></path>
										</g>
									</svg>
								)}
							</span>
						</li>
						{/* Renewal On */}
						<li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E] border-t-2">
							<span className="text-bold">{summaryTextData?.totalText}</span>
							<span className="text-[#1B2631]">
								${summeryData?.total?.toFixed(2) || 0}
								{/* <span className="text-[#85929E] text-sm">/year</span> */}
							</span>
						</li>
					</ul>
				</div>
				{/* checkboxes */}
				<SummaryCheckBoxes policyData={policyData} signUpData={signUpData} companyPolicyData={companyPolicyData} />
			</div>
		</div>
	);
};
