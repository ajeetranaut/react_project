import defaultData from "./data.json";

// NOTE: This is the type of props that you can pass to this component
interface ComponentProps {
    productInfo: {
        name: string;
        options: [string];
    }[]
}

export const AdditionalInfo = ({ productInfo }: ComponentProps) => {
    return (
        <section className="p-5 md:p-12 bg-white">
            {productInfo?.map((singleData: any, index: number) => (
                <div
                    className={`py-4 pl-5 lg:pl-7  flex flex-col gap-1 md:flex-row ${index % 2 === 0 ? "bg-secondary-content" : " bg-white"
                        }`}
                    key={index}
                >
                    <p className="font-normal text-base text-secondary w-full md:w-1/2">{singleData.name}</p>

                    <div key={index} className=" w-full">
                        <p className="font-normal text-base text-base-200 w-full md:w-1/2">
                            {singleData.options[0] ? singleData.options[0] : ""}
                            &nbsp;&nbsp;
                            {singleData.options[1] ? singleData.options[1] : ""}
                            &nbsp;&nbsp;
                            {singleData.options[2] ? singleData.options[2] : ""}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
AdditionalInfo.defaultProps = defaultData;