import { CommentItem } from "@/ui";
import { defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    postID: number;
    replyFormText?: {
        cancelText: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        replyButtonText: string;
    }
    getAllComments: {
        id: number;
        author: string;
        publishTime: string;
        content: string;
        avatar: {
            src: string;
            alt: string;
        }
    }[];
};

export const CommentsSection = ({ getAllComments, postID, replyFormText }: ComponentProps) => {
    return (
        <section className="relative mt-10">
            <div className="relative flex items-center">
                <hr className="w-full border-t border-themeWhite" />
                <p className="absolute left-0 right-0 px-4 py-2 mx-auto font-sans text-base font-semibold rounded text-themeSecondary w-fit bg-secondary-content">
                    {getAllComments?.length ? getAllComments?.length : 0}
                </p>
            </div>

            {getAllComments?.map((item: any, index: number) => (
                <CommentItem key={index} item={item} postID={postID} replyFormText={replyFormText} />
            ))}
        </section>
    )
}

// NOTE: This is the default data that you can use to test this component
CommentsSection.defaultProps = defaultData;