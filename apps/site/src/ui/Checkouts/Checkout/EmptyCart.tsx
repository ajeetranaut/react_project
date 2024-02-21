


// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    emptyText?: string
};

export const EmptyCart = ({ emptyText }: ComponentProps) => {
    return (
        <div className="flex-col flex gap-5 justify-center items-center min-h-[200px]">
            <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16 text-gray-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <desc></desc>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="6" cy="19" r="2"></circle>
                <circle cx="17" cy="19" r="2"></circle>
                <path d="M17 17h-11v-14h-2"></path>
                <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13"></path>
                <path d="M17 3l4 4"></path>
                <path d="M21 3l-4 4"></path>
            </svg>
            <h3 className="text-center text-gray-400 text-xl">
                {emptyText || "Your cart is currently empty."}
            </h3>
        </div>
    )
}
