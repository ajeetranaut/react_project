import React from 'react'

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    children: React.ReactNode;
    Reverse?: "yes" | "no";
};

export const BlockLayout = ({
    children,
    Reverse
}: ComponentProps) => {
    return (
        <div className={`${Reverse === "no" ? "flex flex-col lg:flex-row gap-12" : Reverse === "yes" ? "flex flex-col-reverse lg:flex-row gap-12" : ""} justify-center container mx-auto px-5 sm:px-0 w-full`}>{children}</div>
    )
}

// NOTE: This is the default data that you can use to test this component