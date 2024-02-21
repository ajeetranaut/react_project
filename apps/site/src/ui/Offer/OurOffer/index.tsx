import Image from "next/legacy/image";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type OurOfferProps = {
  title: string;
  offers: {
    title: string;
    description: string;
  }[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const OurOffer = ({ title, offers, image }: OurOfferProps) => {
  return (
    <section className=" container mx-auto flex flex-col md:flex-row gap-10 md:gap-14 px-5 md:px-0">
      <div className="w-full  md:w-1/2">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority={true} />
      </div>
      <div className="w-full md:w-5/12">
        <h2 className="text-xl lg:text-3xl md:leading-10 font-bold text-neutral">{title}</h2>
        {/* NOTE: Offers Lists */}
        {offers.map((offer: { title: string; description: string }, index: number) => (
          <div
            className="mt-7 border-b-2 border-neutral-content pb-8 last-of-type:pb-0 last-of-type:border-0"
            key={index}
          >
            <h3 className="text-xl md:text-2xl sm:leading-8 font-sans font-medium text-secondary">
              {offer.title}
            </h3>
            <p className="font-normal text-base text-base-300 mt-3">{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
OurOffer.defaultProps = defaultData;
