"use client";
import Link from "next/link";
import defaultData from "./data.json";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  description: string;
};

export const BreadcrumbTwo = ({ title, description }: Props) => {
  const router = usePathname();
  const segments = router ? router.split("/") : ["/"];
  const replaceName = segments[segments.length - 1]?.replace(/-/g, " ");

  return (
    <div className="bg-info-content h-52 flex items-center">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="grid sm:flex items-center justify-between w-full">
          <div>
            <h3 className="text-2xl md:text-5xl  leading-10 lg:leading-[60px] font-bold capitalize">{title}</h3>
            {description && <p className="font-normal text-lg text-[#475569] mt-2">{description}</p>}
          </div>
          <div className="flex items-center gap-4 mt-5 sm:mt-0">
            <Link
              href="/"
              className="font-normal text-base text-[#475569] hover:text-primary transition hover:duration-700 capitalize"
            >
              Home
            </Link>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.97656 5.99999L0.851562 1.87499L2.0299 0.696655L7.33323 5.99999L2.0299 11.3033L0.851562 10.125L4.97656 5.99999Z"
                fill="currentColor"
              />
            </svg>
            <p className="font-normal text-base text-[#475569] capitalize">{replaceName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
BreadcrumbTwo.defaultProps = defaultData;
