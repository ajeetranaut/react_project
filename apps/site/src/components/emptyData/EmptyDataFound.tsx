import React from "react";

interface EmptyDataFoundProps {
	message?: string;
}

export const EmptyDataFound = ({ message = "No Products Available" }: EmptyDataFoundProps) => {
	return <h2 className="w-full font-normal text-xl lg:text-3xl md:leading-10 text-primary h-40 flex items-center justify-center">{message}</h2>;
};
