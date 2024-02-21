import { ProductOne, ProductThree } from "@/ui";
import { EmptyDataFound } from "../emptyData/EmptyDataFound";

interface ShopProductsWrapperProps {
  productActive?: any;
  allProductsData?: any;
  allProductsLoading?: boolean;
}

export const ShopProductsWrapper = ({
  productActive,
  allProductsData,
  allProductsLoading,
}: ShopProductsWrapperProps) => {
  const isEmptyData = allProductsData?.length < 1 && !allProductsLoading;
  const productGridView = productActive === 0 && !isEmptyData;
  const productListView = productActive === 1 && !isEmptyData;
  return (
    <div>
      {allProductsLoading ? (
        <>
          {(productGridView && <ProductOne data={[]} />) ||
            (productListView && <ProductThree data={[]} />)}
        </>
      ) : (
        <>
          {(productGridView && <ProductOne data={allProductsData} />) ||
            (productListView && <ProductThree data={allProductsData} />)}
          {isEmptyData && (
            <div className="py-10">
              <EmptyDataFound message="No Products Available" />
            </div>
          )}
        </>
      )}
    </div>
  );
};
