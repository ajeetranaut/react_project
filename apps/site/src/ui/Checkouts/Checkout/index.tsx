"use client";

import React from "react";
import defaultData from "./data.json";
import { OrderSummery } from "./OrderSummery";
import { IUserDataInterface, ICartDataInterface, ISummeryDataInterface, IPolicyDataInterface, ISignUpDataInterface, ICompanyPolicyDataInterface, ISummaryTextData, IBillingTextData } from "./checkoutTypes";
import { OrderForm } from "./OrderForm";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
  loading?: boolean;
  userData?: IUserDataInterface;
  formSubmit?: (data: any) => void;
  formLoader?: boolean;
  couponSubmit?: (data: any) => void;
  couponLoader?: boolean;
  removeCouponHandler?: () => void;
  autoFill?: boolean;
  cartData?: ICartDataInterface[];
  summeryData?: ISummeryDataInterface;
  policyData?: IPolicyDataInterface;
  signUpData?: ISignUpDataInterface;
  companyPolicyData?: ICompanyPolicyDataInterface;
  userLogin?: boolean;
  summaryTextData?: ISummaryTextData;
  billingTextData?: IBillingTextData;
};

export const Checkout = (
  {
    loading,
    userData,
    formSubmit,
    formLoader,
    couponSubmit,
    couponLoader,
    removeCouponHandler,
    autoFill,
    cartData,
    summeryData,
    policyData,
    signUpData,
    companyPolicyData,
    userLogin,
    summaryTextData,
    billingTextData,
  }: ComponentProps) => {

  /* -------------------------------------------------------------------------- */
  /*                          if cartData is not passed                         */
  /* -------------------------------------------------------------------------- */
  if (!cartData) {
    cartData = null as any;
  }

  /* -------------------------------------------------------------------------- */
  /*                        if summeryData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!summeryData) {
    summeryData = {
      total: 0,
      subtotal: 0,
      discount: 0,
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                         if policyData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!policyData) {
    policyData = {
      title: "",
      description: "",
      link: {
        title: "",
        url: "",
        target: "",
      },
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                         if signUpData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!signUpData) {
    signUpData = {
      title: "",
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                     if companyPolicyData is not passed                     */
  /* -------------------------------------------------------------------------- */
  if (!companyPolicyData) {
    companyPolicyData = {
      title: "",
      companyName: "",
      link: {
        title: "",
        url: "",
        target: "",
      },
    };
  }

  return (
    <div className="container mx-auto">
      <div className="lg:flex grid gap-10 mt-16 mb-28">
        {/* Form Body */}
        <OrderForm
          cartData={cartData}
          loading={loading}
          billingTextData={billingTextData}
          formSubmit={formSubmit}
          formLoader={formLoader}
          autoFill={autoFill}
          userData={userData}
          userLogin={userLogin}
        />

        {/* Checkout Order Summery */}
        <OrderSummery
          cartData={cartData}
          loading={loading}
          summaryTextData={summaryTextData}
          removeCouponHandler={removeCouponHandler}
          couponSubmit={couponSubmit}
          couponLoader={couponLoader}
          summeryData={summeryData}
          policyData={policyData}
          companyPolicyData={companyPolicyData}
          signUpData={signUpData}
        />
      </div>
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
Checkout.defaultProps = defaultData;
