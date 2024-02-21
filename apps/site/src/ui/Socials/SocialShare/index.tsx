"use client";

import { usePathname } from 'next/navigation';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
  title: string
};

// NOTE: This is the component that you can use in your page
export const SocialShare = ({ title }: ComponentProps) => {
  const pathname = usePathname()

  const fullUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  return (
    <div className="flex gap-7">
      <p className="font-medium text-base text-neutral">{title}</p>
      <div className="flex gap-2">
        <FacebookShareButton url={fullUrl}>
          <FacebookIcon size={26} round />
        </FacebookShareButton>
        <TwitterShareButton url={fullUrl}>
          <TwitterIcon size={26} round />
        </TwitterShareButton>
        <LinkedinShareButton url={fullUrl}>
          <LinkedinIcon size={26} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={fullUrl}>
          <WhatsappIcon size={26} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

// NOTE: This is the default data that you can use to test this component
SocialShare.defaultProps = defaultData;
