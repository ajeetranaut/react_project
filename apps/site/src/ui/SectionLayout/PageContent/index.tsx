import Link from 'next/link';
import React from 'react'
import { ProductCardOne } from "@/ui";
import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    children: React.ReactNode;
    sidebar?: "yes" | "no";
};

export const PageContent = ({
    children,
    sidebar
}: ComponentProps) => {
    return (
        <div className={`${sidebar === "no" ? "col-span-3" : "w-full lg:w-9/12"}`}>{children}</div>
    )
}

// NOTE: This is the default data that you can use to test this component
PageContent.defaultProps = defaultData;