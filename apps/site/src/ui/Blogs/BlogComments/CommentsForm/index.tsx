"use client";

import { LoaderRound } from "@/loaders/Loader";
import { addBlogComment } from "lib/wordpress/getBlogs";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { defaultData } from "./data";

// NOTE: This is the type of props that you can pass to this component
type ComponentProps = {
    postId: number;
    fromText?: {
        responseText: string
        headerText: string
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        replyButtonText: string;
    }
};

export const CommentsForm = ({ postId, fromText }: ComponentProps) => {
    const [, startTransition] = useTransition();
    const [commentLoader, setCommentLoader] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showErrMessage, setShowErrMessage] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        setCommentLoader(true);
        const commentDataInput = {
            author_name: data?.name as string,
            author_email: data?.email as string,
            content: data?.message as string,
            post: postId as number,
        };

        try {
            startTransition(() => {
                addBlogComment(commentDataInput).then((res: any) => {
                    if (!res?.error) {
                        setShowErrMessage(false);
                        setErrMessage("");
                        setShowMessage(true);
                        setCommentLoader(false);
                    } else {
                        setShowMessage(false);
                        setShowErrMessage(true);
                        setErrMessage("Server Error");
                        setCommentLoader(false);
                    }
                })
            })
        } catch (error: any) {
            setShowMessage(false);
            setShowErrMessage(true);
            setErrMessage(error?.message);
            setCommentLoader(false);
        }
    };

    return (
        <section>
            {showMessage && (
                <p className="px-10 mt-10 mb-6 font-bold border-l-4 rounded-lg bg-success-content text-success font-2xl py-7 border-success">
                    {fromText?.responseText}
                </p>
            )}
            {showErrMessage && (
                <p className="px-10 mt-10 mb-6 font-bold border-l-4 rounded-lg bg-warning-content text-warning font-2xl py-7 border-warning">
                    {errMessage}
                </p>
            )}
            <h3 className="font-bold text-xl md:text-2xl sm:leading-8 font-sans mb-5 text-secondary">
                {fromText?.headerText}
            </h3>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-5 md:flex-row">
                    <input
                        className={`w-full px-6 py-3 text-base outline-none bg-secondary-content border rounded ${errors?.name ? "border-red-500" : "border-secondary-content"
                            }`}
                        placeholder={fromText?.namePlaceholder}
                        type="text"
                        {...register("name", { required: true })}
                    />
                    <input
                        className={`w-full px-6 py-3 text-base outline-none bg-secondary-content border rounded ${errors?.email ? "border-red-500" : "border-secondary-content"
                            }`}
                        placeholder={fromText?.namePlaceholder}
                        type="email"
                        {...register("email", { required: true })}
                    />
                </div>
                <textarea
                    rows={4}
                    cols={50}
                    placeholder={fromText?.messagePlaceholder}
                    className={`block w-full px-5 py-3 my-5 font-medium border rounded placeholder:text-base placeholder:text-base-200 focus:outline-none bg-secondary-content ${errors?.message ? "border-red-500" : "border-secondary-content "
                        }`}
                    {...register("message", { required: true })}
                />
                <button
                    disabled={commentLoader}
                    type="submit"
                    className="px-8 py-4 text-base leading-6 text-white transition rounded-md bg-primary hover:bg-secondary hover:duration-300 flex justify-center"
                >
                    {commentLoader && <LoaderRound />}
                    <span className={`${commentLoader ? "ml-2" : ""}`}>{commentLoader ? "Please Wait.." : fromText?.messagePlaceholder}</span>
                </button>
            </form>
        </section>
    );
};

// NOTE: This is the default data that you can use to test this component
CommentsForm.defaultProps = defaultData;