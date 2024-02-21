"use client"
import { useGlobalContext } from "@/context/store";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { footerData as defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type FooterProps = {
  logoImage: string;
  emailSubscribeData: {
    title: string;
    placeholder: string;
    description: string;
    buttonText: string;
    formSubmit?: (data: string) => void;
  };
  paymentIconData: {
    icon: string;
  }[];
  socialData: {
    id: number;
    icon: string;
    link: string;
  }[];
  infoData: {
    address: {
      title: string;
      description: string;
    };
    phone: {
      title: string;
      description: string;
    };
    email: {
      title: string;
      description: string;
    };
  };
  quickLinkData: {
    title: string;
    data: {
      name: string;
      link: string;
    }[];
  };
  accountData: {
    title: string;
    data: {
      name: string;
      link: string;
    }[];
  };
  supportData: {
    title: string;
    data: {
      name: string;
      link: string;
    }[];
  };
  copy_right: {
    description: string;
  };
};

export const Footer = ({
  logoImage,
  emailSubscribeData,
  paymentIconData,
  socialData,
  infoData,
  quickLinkData,
  accountData,
  supportData,
  copy_right,
}: FooterProps) => {
  // email-subscribe fom task
  const [email, setEmail] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(false);
  const { direction } = useGlobalContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    const data = {
      email,
    } as unknown as string;

    if (emailSubscribeData.formSubmit) {
      emailSubscribeData.formSubmit(data);
    } else {
      setTimeout(() => {
        console.warn("No formSubmit function provided, please provide formSubmit function to get data");
        setLoader(false);
      }, 1000);
    }
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-black">
      <div className="container mx-auto px-5 md:px-10 lg:px-0">
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 md:gap-14 lg:gap-0">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image src={logoImage} alt="Logo" width={158} height={32} className="text-white" />
              </Link>
            </div>
            {/* info  */}
            {infoData.address && (
              <Fragment>
                <p className="font-medium text-xs sm:text-sm text-white pt-6">{infoData.address.title}</p>
                <p className="font-normal text-xs sm:text-sm text-base-100">{infoData.address.description}</p>
              </Fragment>
            )}
            {infoData.phone && (
              <Fragment>
                <p className="font-medium text-xs sm:text-sm text-white pt-6">{infoData.phone.title}</p>
                <p className="font-normal text-xs sm:text-sm text-base-100">{infoData.phone.description}</p>
              </Fragment>
            )}
            {infoData.email && (
              <Fragment>
                <p className="font-medium text-xs sm:text-sm text-white pt-6">{infoData.email.title}</p>
                <p className="font-normal text-xs sm:text-sm text-base-100 mb-6">
                  {infoData.email.description}
                </p>
              </Fragment>
            )}
            {/* social-link  */}
            {/* <SocialLink data={SocialData} /> */}
            {/* social-link  */}
            <div className="flex gap-2">
              {socialData.map((singleData: any, index: number) => (
                <Link href={singleData?.link} key={index}>
                  <div className="p-3 w-fit bg-base-content rounded-full group">
                    <p className=" text-white group-hover:text-primary transition hover:duration-700 text-base">
                      {singleData?.icon}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Quick Link  */}
            <div className="mt-1.5">
              <p className="font-bold text-lg text-white">{quickLinkData.title}</p>
              <div className="flex flex-col gap-2.5 mt-4 w-full">
                {quickLinkData?.data?.map((singleData: any, index: number) => (
                  <div key={index}>
                    <Link href={singleData.link}>
                      <p className="font-normal text-xs sm:text-sm w-fit text-base-100 whitespace-nowrap hover:text-primary transition hover:duration-700">
                        {singleData.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* Account Link*/}
            <div className="mt-1.5">
              <p className="font-bold text-lg text-white">{accountData.title}</p>
              <div className="flex flex-col gap-2.5 mt-4 w-full">
                {accountData?.data?.map((singleData: any, index: number) => (
                  <div key={index}>
                    <Link href={singleData.link}>
                      <p className="font-normal text-xs sm:text-sm w-fit text-base-100 whitespace-nowrap hover:text-primary transition hover:duration-700">
                        {singleData.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-24 lg:hidden">
            {/* Quick Link  */}
            <div className="mt-1.5">
              <p className="font-bold text-lg text-white">{quickLinkData.title}</p>
              <div className="flex flex-col gap-2.5 mt-4 w-full">
                {quickLinkData?.data?.map((singleData: any, index: number) => (
                  <div key={index}>
                    <Link href={singleData.link}>
                      <p className="font-normal text-xs sm:text-sm w-fit text-base-100 whitespace-nowrap hover:text-primary transition hover:duration-700">
                        {singleData.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* Account Link */}
            <div className="mt-1.5">
              <p className="font-bold text-lg text-white">{accountData.title}</p>
              <div className="flex flex-col gap-2.5 mt-4 w-full">
                {accountData?.data?.map((singleData: any, index: number) => (
                  <div key={index}>
                    <Link href={singleData.link}>
                      <p className="font-normal text-xs sm:text-sm w-fit text-base-100 whitespace-nowrap hover:text-primary transition hover:duration-700">
                        {singleData.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {/* Support Link */}
            <div className="mt-1.5">
              <p className="font-bold text-lg text-white">{supportData.title}</p>
              <div className="flex flex-col gap-2.5 mt-4 w-full">
                {supportData?.data?.map((singleData: any, index: number) => (
                  <div key={index}>
                    <Link href={singleData.link}>
                      <p className="font-normal text-xs sm:text-sm w-fit text-base-100 whitespace-nowrap hover:text-primary transition hover:duration-700">
                        {singleData.name}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className=" w-fit">
            {/* EmailSubscribe  */}
            <div>
              <p className="font-bold text-lg text-white mb-6">Newsletter</p>
              <p className="font-normal text-xs sm:text-sm text-base-100 mb-4">
                {emailSubscribeData.description}
              </p>
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  required
                  className={`w-full xl:w-fit text-white text-sm leading-5 px-4 py-2.5 outline-none bg-secondary placeholder:text-base-200 ${direction === "ltr" ? "rounded-l-full" : "rounded-r-full"
                    }`}
                  placeholder={emailSubscribeData?.placeholder}
                />
                <button
                  type="submit"
                  disabled={loader}
                  className={`text-base leading-6 px-6 py-2.5 bg-primary text-white hover:bg-secondary transition hover:duration-700 ${direction === "ltr" ? "rounded-r-full" : "rounded-l-full"
                    } ${loader ? "loading" : ""}`}
                >
                  <p className="font-semibold text-xs sm:text-sm py-[2px]">
                    {" "}
                    {loader ? "Processing..." : emailSubscribeData?.buttonText}
                  </p>
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className=" border-secondary w-full" />
        <div className="py-6 flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-between">
          <p className="font-normal text-base text-base-100">{copy_right.description}</p>
          {/* Payment-icons  */}
          <div className="flex gap-2">
            {paymentIconData?.map((singlePayment, index) => (
              <Image
                src={singlePayment.icon}
                alt="Logo"
                width={60}
                className="cursor-pointer"
                height={32}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// NOTE: This is the default data that you can use to test this component
Footer.defaultProps = defaultData;
