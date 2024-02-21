"use client";

import { useGlobalContext } from "@/context/store";
import { IProductCategory } from "@/types";
import { BlockLayout, BreadcrumbOne, EmptyDataFound, Gap, Pagination, ProductCardOne } from "@/ui";
import { getCategories } from "lib/woocommerce/getCategories";
import { getProducts } from "lib/woocommerce/getProducts";
import React, { Fragment, useEffect, useState, useTransition, } from "react";

const ProductCategoryBody = ({ slug, }: { slug: string }) => {
  const [, startTransition] = useTransition();
  const { dictionaries } = useGlobalContext();
  const [catproducts, setCatproducts] = useState<[] | null>(null);
  const [category, setcategory] = useState<IProductCategory | null>(null)
  const [totalProductCount, setTotalProductCount] = useState(0)
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageLimit] = React.useState(8);
  const [isLoading, setIsLoading] = React.useState(true);

  // NOTE: Get category data from WooCommerce API by slug
  useEffect(() => {
    startTransition(() => {
      (async () => {
        const { data: categories } = await getCategories({ slug })
        setcategory(categories?.[0])
      })();
    });
    return () => {
      setcategory(null)
    }
  }, [slug]);

  // fetch category products with pagination
  useEffect(() => {
    if (category?.id) {
      setIsLoading(true)
      const closeId = setTimeout(() => {
        startTransition(() => {
          (async () => {
            const { data: categoryProducts, total } = await getProducts({
              category: category?.id,
              per_page: pageLimit,
              page: currentPage + 1,
            })
            setCatproducts(categoryProducts)
            setTotalProductCount(total)
            setIsLoading(false)
          })();
        })
      }, 100);
      return () => clearTimeout(closeId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, currentPage, pageLimit]);

  const handlePageChange = (data: any) => {
    setCurrentPage(data.selected);
  };

  const CategoryName = category?.name || ''

  return (
    <Fragment>
      <BreadcrumbOne title={`${dictionaries?.product_category?.breadcrumb?.title} ${CategoryName}`} loading={isLoading} />

      <Gap className="mt-16" />
      <BlockLayout>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {isLoading &&
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((singleData: any, index: number) => <ProductCardOne key={index} data={singleData} />)}
          </div>
          {!isLoading && catproducts && catproducts.length == 0 && (
            <EmptyDataFound message="No Products Available at This Category" />
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center">
            {!isLoading && catproducts && catproducts.length > 0 &&
              catproducts.map((singleData: any, index: number) => <ProductCardOne
                key={index}
                data={singleData}
              />)}
          </div>
          {!(catproducts && totalProductCount <= pageLimit) &&
            <div className="flex items-center justify-center w-full">
              <Pagination totalCount={totalProductCount} showPerPage={pageLimit} handlePageChange={handlePageChange} />
            </div>
          }
        </div>
        <Gap className="mt-14" />
      </BlockLayout>
      <Gap />

    </Fragment>
  );
};
export default ProductCategoryBody;
