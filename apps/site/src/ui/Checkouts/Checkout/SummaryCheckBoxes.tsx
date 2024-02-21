import { Fragment } from 'react';
import { ICompanyPolicyDataInterface, IPolicyDataInterface, ISignUpDataInterface } from "./checkoutTypes";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    policyData?: IPolicyDataInterface;
    signUpData?: ISignUpDataInterface;
    companyPolicyData?: ICompanyPolicyDataInterface;
};

export const SummaryCheckBoxes = ({ policyData, signUpData, companyPolicyData }: ComponentProps) => {
    return (
        <div className="mt-8">
            {/* tracking-coupon checkbox */}
            {policyData && (
                <Fragment>
                    <div className="mb-5">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 justify-between">
                                <input id="Coupons" type="checkbox" defaultChecked />
                                <label htmlFor="Coupons" className="font-normal text-sm text-base-300/80">
                                    {policyData.title || "Text me Tracking Updates  & Periodic Coupons (optional)"}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="font-normal text-sm text-base-300/80">
                            {policyData.description ||
                                "Your personal data will be used to process your order, support your experience throughout this website, and for other purpose describe in our"}
                            <a
                                href={policyData.link.url || "#"}
                                target={policyData.link.target || "_self"}
                                rel="noopener noreferrer"
                                className="font-semibold text-base-300/80 hover:text-red-500 transition hover:duration-300"
                            >
                                {" "}
                                {policyData.link.title || "privacy policy"}
                            </a>
                        </p>
                    </div>
                </Fragment>
            )}
            {/* newsletter checkbox */}
            {signUpData && (
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center justify-between">
                            <input id="subscription" type="checkbox" defaultChecked />
                            <label htmlFor="subscription" className="ml-1 font-normal text-sm text-base-300/80">
                                {signUpData.title || "Sign me up to receive emil updates and news (optional)"}
                            </label>
                        </div>
                    </div>
                </div>
            )}
            {/* agreement checkbox */}
            {companyPolicyData && (
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-1 items-center justify-between">
                            <input id="policy" type="checkbox" defaultChecked />
                            <label htmlFor="policy" className="ml-1 font-normal text-sm text-base-300/80">
                                {companyPolicyData.title || "I agree with the"}
                                <a
                                    href={companyPolicyData.link.url || "#"}
                                    target={companyPolicyData.link.target || "_self"}
                                    rel="noopener noreferrer"
                                    className="font-semibold text-red-500 hover:text-base-content transition hover:duration-300"
                                >
                                    {" "}
                                    {companyPolicyData.companyName || "Company Policies"}
                                </a>
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
