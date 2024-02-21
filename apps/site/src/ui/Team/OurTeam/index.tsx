import Image from "next/image";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type OurTeamProps = {
  title: string;
  description: string;
  list: {
    avatar: string;
    name: string;
    title: string;
  }[];
};

// NOTE: This is the component that you can use in your page
export const OurTeam = ({ title, description, list }: OurTeamProps) => {
  return (
    <section className="bg-[#F1F5F9] py-28">
      <div className=" container mx-auto">
        <div className="flex items-center justify-center">
          <div className=" md:w-9/12 lg:w-6/12 xl:w-5/12">
            <h3 className="text-3xl md:text-3xl lg:text-4xl lg:leading-10 font-semibold text-secondary text-center">
              {title}
            </h3>
            <p className="font-normal text-lg text-base-300 mt-5 text-center">{description}</p>
          </div>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 justify-items-center px-4 sm:px-0">
          {list &&
            list.map(
              (
                item: {
                  avatar: string;
                  name: string;
                  title: string;
                },
                index: number,
              ) => (
                <div key={index}>
                  <Image src={item.avatar} alt={"avatar"} width={315} height={360} priority={true} />
                  <h3 className="text-xl md:text-2xl sm:leading-8 font-sans font-medium text-neutral">
                    {item.name}
                  </h3>
                  <p className="font-normal text-base text-neutral">{item.title}</p>
                </div>
              ),
            )}
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
OurTeam.defaultProps = defaultData;
