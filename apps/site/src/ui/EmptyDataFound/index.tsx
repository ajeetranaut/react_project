

const defaultData = {
    message: "No Available Data Found"
}

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    message?: string;
}

export const EmptyDataFound = ({ message }: ComponentProps) => {

    return <h2 className="font-normal text-xl lg:text-3xl md:leading-10 w-full  text-primary h-40 flex items-center justify-center">{message}</h2>;
}

// NOTE: This is the default data that you can use to test this component
EmptyDataFound.defaultProps = defaultData;