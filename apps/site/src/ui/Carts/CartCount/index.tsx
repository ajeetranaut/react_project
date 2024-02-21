"use client";

import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    data: {
        title: string;
        slug: string;
        item_key: string;
        featured_image: string;
        price: string;
        quantity: {
            value: number;
        }
        totals: {
            total: number;
            subtotal: string;
        }
    };
    onUpdateCartItem: (itemKey: string, count: number) => void

};

export const CartCount = ({ data, onUpdateCartItem }: ComponentProps) => {
    const [value, setValue] = React.useState(data?.quantity?.value);
    const handleCartIncrease = () => {
        setValue(value + 1);
        onUpdateCartItem(data?.item_key, value + 1);
    };
    const handleCartDecrease = () => {
        setValue(value - 1);
        onUpdateCartItem(data?.item_key, value - 1);
    };
    return (
        <div className="flex items-center justify-center h-10 border w-28 border-base-100 rounded-3xl">
            <button disabled={value == 1} onClick={handleCartDecrease} className="pr-2 text-lg text-base-200">
                <BiMinus />
            </button>
            <input
                className="w-8 text-base font-medium text-center focus:outline-none text-secondary"
                value={value}
                readOnly
                type="text"
            />
            <button onClick={handleCartIncrease} className="pl-2 text-lg text-base-200">
                <BiPlus />
            </button>
        </div>
    );
}

// NOTE: This is the default data that you can use to test this component
CartCount.defaultProps = defaultData;