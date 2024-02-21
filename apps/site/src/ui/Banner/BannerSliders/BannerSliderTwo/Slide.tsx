import Image from "next/image";
import Link from "next/link";

type SlideProps = {
  data: {
    excerpt: string;
    title: {
      normalText: string;
      boldText: string;
    };
    price: {
      fromText: string;
      amount: string;
      fraction: string;
    };
    button: {
      title: string;
      link: string;
      target: string;
    };
    images: {
      imageOne: {
        src: string;
        alt: string;
      },
      imageTwo: {
        src: string;
        alt: string;
      },
    };
  };
};

const Slide = ({ data }: SlideProps) => {
  const { title, excerpt, price, button, images } = data

  return (
    <section className={` bg-[url('/image/banner-two/banner-bg.png')] bg-no-repeat bg-center`}>
      <div className="container mx-auto flex items-center justify-start px-5 md:px-0 h-[248px] md:h-[440px] lg:h-[660px] relative">
        <div className=" w-1/2 z-10">
          <div>
            <p className="hidden md:block font-semibold text-base md:text-lg lg:text-xl text-primary mb-2">{excerpt}</p>
            <h6 className="text-xl md:text-5xl lg:text-7xl font-light md:leading-[60px] xl:leading-[84px] text-neutral">
              {title?.normalText}
            </h6>
            <h2 className="text-xl md:text-5xl lg:text-7xl md:leading-[60px] xl:leading-[88px] font-black text-neutral">
              {title?.boldText}
            </h2>
          </div>
          <div className="my-3 md:my-6">
            <p className=" text-xs md:text-sm font-normal text-base-300">{price?.fromText}</p>
            <h3 className="md:text-4xl lg:text-5xl font-bold text-neutral leading-9  md:leading-[60px]">
              {price?.amount}<span className="text-lg md:text-xl lg:text-2xl">{price?.fraction}</span>
            </h3>
          </div>
          <Link
            href={button.link}
            target={button.target}
            className={
              "font-medium text-sm md:text-base px-5 md:px-[30px] py-2 md:py-3.5 rounded-full text-white bg-primary hover:bg-secondary transition hover:duration-700 ease-in-out"
            }
          >
            {button.title || "SHOP NOW"}
          </Link>
        </div>
        <div className="hidden md:block">
          <Image src={images.imageOne?.src} alt={"Image"} width={520} height={520} priority={true} />
        </div>
        <div className="block md:hidden">
          <Image src={images.imageOne?.src} alt={"Image"} width={170} height={174} priority={true} />
        </div>
        <div className="absolute bottom-[60px] right-0 hidden md:block">
          <Image src={images.imageTwo?.src} alt={"Image"} width={180} height={180} priority={true} />
        </div>
      </div>
    </section>
  );
};
export default Slide;
