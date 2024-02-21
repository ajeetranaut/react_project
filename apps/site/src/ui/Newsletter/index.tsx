"use client";
import Image from "next/image";
import React from "react";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface NewsletterProps {
  title?: string;
  subtitle?: {
    normal: string;
    bold: string;
  };
  placeholder?: string;
  buttonText?: string;
  src?: string;
  imageWidth?: number;
  imageHeight?: number;
  formSubmit?: (data: string) => void;
  formLoading?: boolean;
}

export const Newsletter = ({
  title = "Subscribe Our Newsletter",
  subtitle = {
    normal: "Get 20%",
    bold: "Flat Discount",
  },
  buttonText = "Subscribe",
  placeholder = "Your Email",
  src = "/image/newslatter.png",
  imageWidth = 467,
  imageHeight = 356,
  formSubmit,
  formLoading = false,
}: NewsletterProps) => {
  const [email, setEmail] = React.useState<string>("");
  const [loader, setLoader] = React.useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(true);

    const data = {
      email,
    } as unknown as string;

    if (formSubmit) {
      formSubmit(data);
    } else {
      setTimeout(() => {
        console.warn("No formSubmit function provided, please provide formSubmit function to get data");
        setLoader(false);
      }, 1000);
    }
    e.currentTarget.reset();
  };

  return (
    <section className="px-5 md:px-0">
      <div className=" bg-secondary-content rounded-3xl flex items-center  justify-center container mx-auto ">
        <div className="w-full lg:w-8/12 p-7 md:p-20 xl:pl-24">
          <h3 className="font-medium text-xl md:text-2xl sm:leading-8 font-sans text-secondary text-center lg:text-start">
            {title}
          </h3>
          <h3 className="font-normal text-2xl md:text-5xl leading-10 lg:leading-[60px] mt-2 md:mt-4 text-neutral text-center lg:text-start">
            {subtitle?.normal} {subtitle?.bold && <span className="font-bold">{subtitle?.bold}</span>}
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mt-6 md:mt-10 flex items-center justify-center lg:justify-start flex-col md:flex-row gap-2 md:gap-4"
          >
            <input
              placeholder={placeholder}
              onChange={handleChange}
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              className="w-full md:w-7/12 lg:w-5/12 text-base leading-7 px-6 py-3 outline-none border border-neutral-content bg-white"
            />
            <button
              type="submit"
              disabled={loader || formLoading}
              className={`text-base leading-7 px-7 py-3 bg-secondary text-white hover:bg-primary hover:text-white transition hover:duration-700 rounded-md ${loader || formLoading ? "loading" : ""
                }`}
            >
              {loader || formLoading ? "Processing..." : buttonText}
            </button>
          </form>
        </div>
        <div className="hidden lg:block w-4/12">
          <Image
            src={src}
            alt={"image"}
            width={imageWidth}
            height={imageHeight}
            layout="intrinsic"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
Newsletter.defaultProps = defaultData;
