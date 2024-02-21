import Image from "next/legacy/image";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type AboutUsBannerProps = {
  title: string;
  sub_title: string;
  description: string;
  lgImage: {
    src: string;
    alt: string;
    imageWidth: number;
    imageHeight: number;
  };
  smImage: {
    src: string;
    alt: string;
    imageWidth: number;
    imageHeight: number;
  };
};

// NOTE: This is the component that you can use in your page
export const AboutUsBanner = ({ title, sub_title, description, lgImage, smImage }: AboutUsBannerProps) => {
  return (
    <section className=" container mx-auto">
      <div className="flex items-center justify-center">
        <div className=" md:w-9/12 lg:w-6/12 xl:w-5/12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl lg:leading-10 font-semibold  text-secondary text-center">
            {title}
          </h1>
          <h1 className="text-3xl md:text-3xl lg:text-4xl lg:leading-10 font-semibold  text-secondary text-center">
            {sub_title}
          </h1>
          <p className="font-normal text-lg  text-base-300 mt-5 text-center">{description}</p>
        </div>
      </div>
      {/* NOTE: Desktop image */}
      <div className="hidden sm:block mt-8 md:mt-10 lg:mt-14 px-4 sm:px-0">
        <Image
          src={lgImage.src}
          alt={lgImage.alt}
          width={lgImage.imageWidth}
          height={lgImage.imageHeight}
          priority={true}
        />
      </div>

      {/* NOTE: Mobile image */}
      <div className="sm:hidden flex justify-center mt-8 md:mt-10 lg:mt-14 px-4 sm:px-0">
        <Image
          src={smImage.src}
          alt={smImage.alt}
          width={smImage.imageWidth}
          height={smImage.imageHeight}
          priority={true}
        />
      </div>
    </section>
  );
};

// NOTE: This is the default props that you can pass to this component
AboutUsBanner.defaultProps = defaultData;
