'use client';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    name: string;
    filterItems?: { name: string; id?: string | number }[];
    setValue: (value: any) => void
    setLoading?: (value: any) => void
}

export const FilterWithOnlyRadio = ({ name, filterItems, setValue, setLoading }: ComponentProps) => {
    const [isOpen, setIsOpen] = React.useState(true);
    const [itemValue, setItemValue] = React.useState("");

    const handleOnchange = (e: any) => {
        const value = e?.target?.value;
        if (value) {
            setValue(value);
            setItemValue(value);
            setLoading && setLoading(true)
        }
    };
    return (
        <div className="border border-neutral-content rounded-t-xl h-auto">
            {/* filter header */}
            <div onClick={() => setIsOpen(!isOpen)} className="bg-secondary-content w-full py-6 rounded-t-xl px-6">
                {name ? (
                    <div className="flex items-center justify-between cursor-pointer">
                        <p className="font-normal text-lg uppercase text-secondary">{name}</p>
                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H14V2H0V0Z" fill="#71717A" />
                        </svg>
                    </div>
                ) : (
                    <Skeleton height={20} />
                )}
            </div>
            {isOpen && (
                <div className="grid grid-cols-5 lg:flex flex-wrap items-center w-full p-4 gap-x-1.5">
                    {filterItems && filterItems.length > 0
                        ? filterItems.map((item, index) => (
                            <label key={index} htmlFor={item?.name} className="cursor-pointer h-fit p-1">
                                <div
                                    className={`p-4 rounded-full border ${itemValue == item?.id ? "border-primary" : " border-neutral-content"
                                        }  relative`}
                                >
                                    <input
                                        id={item?.name}
                                        name="color-group"
                                        color={item?.name}
                                        type="radio"
                                        value={item?.id}
                                        style={{ backgroundColor: item?.name }}
                                        className={`cursor-pointer appearance-none	inline-block  w-6 h-6 rounded-full absolute right-1 top-1`}
                                        onChange={handleOnchange}
                                    />
                                </div>
                            </label>
                        ))
                        : [1, 2, 3, 4, 5, 6].map((index: number) => (
                            <div key={index} className="flex flex-wrap justify-center gap-2 items-center">
                                <Skeleton className="rounded" circle={true} height={30} width={30} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}

// NOTE: This is the default data that you can use to test this component
FilterWithOnlyRadio.defaultProps = defaultData;