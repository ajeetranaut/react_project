"use client";;
import Skeleton from "react-loading-skeleton";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
  textData: {
    filterButton: string;
    showText: {
      showing: string;
      of: string;
      results: string;
    },
    textType: string;
  }
  totalProductShow: number;
  totalProductCount: number;
  filterOpen?: boolean;
  setFilterOpen: (value: any) => void;
  setpage: (value: any) => void;
  setSort: (value: any) => void;
  productActive: number;
  setProductActive: (value: any) => void;
  showOptionsData: {
    [language: string]: {
      name: string;
      value: string;
    }[];
  }
  sortOptionsData: {
    [language: string]: {
      name: string;
      value: string;
    }[];
  }
  setLoading: (value: any) => void;
}

export const ProductHeader = ({
  totalProductShow,
  totalProductCount,
  setFilterOpen,
  filterOpen,
  showOptionsData,
  setpage,
  sortOptionsData,
  setSort,
  productActive,
  setProductActive,
  textData,
  setLoading
}: ComponentProps) => {
  // get option data from language 
  const showOptions = showOptionsData[textData?.textType]
  const sortOptions = sortOptionsData[textData?.textType]

  // show option change handler
  const onShowOptionsChange = (e: any) => {
    const { value } = e.target;
    setpage(value);
    setLoading(true);
  };

  // sort option change handler
  const onSortOptionsChange = (e: any) => {
    const { value } = e.target;
    setSort(value);
    setLoading(true);
  };

  return (
    <section className=" container mx-auto px-5 md:px-0">
      <div className="grid lg:flex gap-5  items-center lg:justify-between">
        <p className="font-normal text-lg text-secondary text-center">
          {/* Showing 1-25 of 56 results */}
          {textData?.showText?.showing} {totalProductShow || 0} {textData?.showText?.of} {totalProductCount || 0} {textData?.showText?.results}
        </p>
        {/* large device */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div
            onClick={() => setFilterOpen(!filterOpen)}
            className="hidden sm:flex lg:hidden items-center gap-2.5 rounded-lg px-5 py-3 border border-base-100 cursor-pointer"
          >
            <p className="font-normal text-base text-base-300 text-center">{textData?.filterButton}</p>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z"
                fill="#A1A1AA"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            {/* show options */}
            <div className="hidden sm:flex">
              {showOptions && showOptions.length > 0 ? (
                <select
                  className="pl-4 pr-10 py-2.5 border appearance-none border-base-100 focus:outline-none text-base-300 svg_icon cursor-pointer capitalize"
                  onChange={onShowOptionsChange}
                >
                  {showOptions?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <Skeleton height={40} width={100} />
              )}
            </div>
            {/* sort options */}
            <div className="hidden sm:flex">
              {sortOptions && sortOptions.length > 0 ? (
                <select
                  className="pl-4 pr-10 py-2.5 border appearance-none border-base-100 focus:outline-none text-base-300 svg_icon cursor-pointer capitalize"
                  onChange={onSortOptionsChange}
                >
                  {sortOptions?.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              ) : (
                <Skeleton height={40} width={100} />
              )}
            </div>
            <div
              className={` hidden sm:flex ${productActive === 0
                ? "bg-primary border border-primary"
                : " border border-base-100"
                } rounded-lg p-4 cursor-pointer`}
              onClick={() => setProductActive(0)}
            >
              <svg
                className={`${productActive === 0 ? "text-white" : "text-base-300"}`}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className={`hidden sm:flex ${productActive === 1
                ? "bg-primary border border-primary"
                : " border border-base-100"
                } rounded-lg p-4 cursor-pointer`}
              onClick={() => setProductActive(1)}
            >
              <svg
                className={`${productActive === 1 ? "text-white" : "text-base-300"}`}
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0H18V2H8V0ZM8 4H14V6H8V4ZM8 10H18V12H8V10ZM8 14H14V16H8V14ZM0 0H6V6H0V0ZM2 2V4H4V2H2ZM0 10H6V16H0V10ZM2 12V14H4V12H2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* small device */}
        <div className="sm:hidden flex items-center justify-between">
          <div
            className="flex items-center gap-2.5 rounded-lg px-5 py-3 border border-base-100 cursor-pointer"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <p className="font-normal text-base text-base-300 text-center">{textData?.filterButton}</p>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33333 10H9.66667V8.33333H6.33333V10ZM0.5 0V1.66667H15.5V0H0.5ZM3 5.83333H13V4.16667H3V5.83333Z"
                fill="#A1A1AA"
              />
            </svg>
          </div>
          {/* show options */}
          {showOptions && showOptions.length > 0 ? (
            <select
              className="pl-4 pr-10 py-2.5 border appearance-none border-base-100 focus:outline-none text-base-300 svg_icon cursor-pointer capitalize"
              onChange={onShowOptionsChange}
            >
              {showOptions?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          ) : (
            <Skeleton height={40} width={100} />
          )}
        </div>
        <div className="sm:hidden flex flex-wrap gap-2.5 items-center justify-between">
          {/* sort options */}
          {sortOptions && sortOptions.length > 0 ? (
            <select
              className="pl-4 pr-10 py-2.5 border appearance-none border-base-100 focus:outline-none text-base-300 svg_icon cursor-pointer capitalize"
              onChange={onSortOptionsChange}
            >
              {sortOptions?.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>
          ) : (
            <Skeleton height={40} width={100} />
          )}

          <div className="flex items-center gap-3">
            <div
              className={`${productActive === 0
                ? "bg-primary border border-primary"
                : " border border-base-100"
                } rounded-lg p-4 cursor-pointer`}
              onClick={() => setProductActive(0)}
            >
              <svg
                className={`${productActive === 0 ? "text-white" : "text-base-300"}`}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7V11H7V7H11ZM13 7H18V11H13V7ZM11 18H7V13H11V18ZM13 18V13H18V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H13ZM11 0V5H7V0H11ZM13 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V5H13V0ZM5 7V11H0V7H5ZM5 18H1C0.734784 18 0.48043 17.8946 0.292893 17.7071C0.105357 17.5196 0 17.2652 0 17V13H5V18ZM5 0V5H0V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className={`${productActive === 1
                ? "bg-primary border border-primary"
                : " border border-base-100"
                } rounded-lg p-4 cursor-pointer`}
              onClick={() => setProductActive(1)}
            >
              <svg
                className={`${productActive === 1 ? "text-white" : "text-base-300"}`}
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0H18V2H8V0ZM8 4H14V6H8V4ZM8 10H18V12H8V10ZM8 14H14V16H8V14ZM0 0H6V6H0V0ZM2 2V4H4V2H2ZM0 10H6V16H0V10ZM2 12V14H4V12H2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// NOTE: This is the default data that you can use to test this component
ProductHeader.defaultProps = defaultData;
