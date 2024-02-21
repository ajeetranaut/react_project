import Image from "next/image";
import Link from "next/link";

type SlideProps = {
  title: string;
  excerpt: string;
  button: {
    title: string;
    link: string;
    target: string;
  };
  image: {
    src: string;
    width: number;
    height: number;
  };
  offer?: string;
  offerType?: "NEW" | "SALE" | "HOT";
};

const Slide = ({ title, excerpt, button, image, offer, offerType = "NEW" }: SlideProps) => {
  return (
    <section className="bg-secondary-content">
      <div className="container mx-auto flex items-center justify-between px-5 md:px-0 h-[430px] md:h-[430px] lg:h-[700px] relative">
        <div className=" w-1/2 z-10">
          {offer && (
            <div className=" flex gap-2 md:gap-5">
              <button className="font-medium cursor-pointer text-sm px-[14px] md:px-5 py-1.5 md:py-2 rounded-full bg-primary text-white hover:bg-secondary transition hover:duration-700 mb-4 ease-in-out">
                {offerType}
              </button>
              <h3 className={"text-xl md:text-2xl sm:leading-8 font-sans font-normal"}>
                <span className="hidden md:inline font-medium">{offer}</span>
              </h3>
            </div>
          )}
          <h3 className="text-2xl md:text-5xl lg:text-7xl leading-10 lg:leading-[88px] font-black text-neutral">
            {title}
          </h3>
        </div>
        <div className="md:absolute md:top-0 left-44  md:left-80 lg:left-1/3 z-0">
          <Image src={image.src} alt={"Image"} width={image.width} height={image.height} priority={true} />
        </div>
        <div className=" w-[370px] hidden lg:block">
          <h1 className="text-3xl md:text-3xl lg:text-4xl lg:leading-10 font-bold text-neutral">{excerpt}</h1>
          <Link
            href={button.link}
            target={button.target}
            className={
              "font-medium cursor-pointer text-base leading-6 px-7 py-4 rounded-full bg-primary text-white hover:bg-secondary transition hover:duration-700 mt-7 ease-in-out inline-block"
            }
          >
            {button.title || "SHOP NOW"}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Slide;
