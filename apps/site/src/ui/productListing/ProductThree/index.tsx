import { ProductCardTwo } from "@/ui";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
  data: {
    id: number;
    name: string;
    slug: string;
    image: {
      src: string;
      alt: string;
    }[];
    price: string;
    sale_price: string;
    regular_price: string;
    discount: number;
    reviews: string;
    rating: number;
    short_description: string;
  }[];
};

export const ProductThree = ({ data }: ComponentProps) => {
  const cardData = data?.length > 0 ? data : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <section className="pt-10 pb-14">
      <div className="grid gap-7">
        {cardData.map((singleData: any, index: number) => (
          <ProductCardTwo key={index} data={singleData} />
        ))}
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
ProductThree.defaultProps = defaultData;
