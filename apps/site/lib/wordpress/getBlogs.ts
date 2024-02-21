'use server';

// NOTE: WP Blogs API Query Parameters
export type ProductQueryProps = {
    page?: number;
    per_page?: number;
    search?: string;
    after?: string;
    modified_after?: string;
    author?: string;
    author_exclude?: string;
    before?: string;
    modified_before?: string;
    exclude?: string;
    include?: string;
    offset?: string;
    order?: string;
    orderby?: string;
    search_columns?: string;
    slug?: string;
    status?: string;
    categories?: number;
    categories_exclude?: string;
    tags?: number;
    tags_exclude?: string;
    sticky?: boolean;
}

/**
 * Get post data from wordpress.
 * @param query An object with WP blogs available arguments
 * For all available query see the documentation: https://developer.wordpress.org/rest-api/reference/posts/.
 * @returns  { data, error }
 */
export const getBlogs = async (query?: ProductQueryProps, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
    const initialQuery = {
        per_page: 10,
        orderby: 'date',
        status: 'publish',
    };
    // map the query object to use on api url
    const finalQury = query ? query : initialQuery;
    const queryStr =
        Object.entries(finalQury)
            .map(([key, value]) => `${key}=${value}`)
            .join('&') || ''

    // fetch posts from the API
    const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/posts?_embed&${queryStr}`,
        {
            cache
        }
    )

    if (res.ok) {
        const data = await res.json()
        // filter out posts only allow title. excerpt, and featured image, author, and date
        const posts = data?.map((post: any) => ({
            id: post?.id || "",
            title: post?.title?.rendered || "",
            slug: post?.slug || "",
            // featuredmedia: {
            //     sourceUrl: post?._embedded?.["wp:featuredmedia"][0]?.source_url || "",
            //     alt: post?._embedded?.["wp:featuredmedia"][0]?.alt_text || "",
            // },
            author: post?._embedded?.author[0]?.name,
            authorId: post?._embedded?.author[0]?.id,
            category: post?._embedded?.["wp:term"][0],
            tags: post?._embedded?.["wp:term"][1],
            publishTime: post?.date,
            avatar: post?._embedded?.author?.[0]?.avatar_urls[96],
            content: post?.content?.rendered,
        }));
        return {
            data: posts || [],
            error: null
        };

    } else {
        return {
            data: [],
            error: true,
        };
    }

};


/**
 * Get post comment from wordpress.
 * @param query An object with WP blogs available arguments
 * @returns  { data, error }
 */
export const getBlogComments = async (postId: string | number, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
    // fetch posts from the API
    const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/comments?post=${postId}&parent=0`,
        {
            cache,
        }
    )

    if (res.ok) {
        const data = await res.json()
        // filter out posts only allow title. excerpt, and featured image, author, and date
        const commentsByPost = data?.map((comment: any) => ({
            id: comment.id,
            author: comment.author_name,
            authorId: comment.author,
            content: comment.content.rendered,
            publishTime: comment.date,
            avatar: comment.author_avatar_urls[96],
        }));
        return {
            data: commentsByPost || [],
            error: null
        };

    } else {
        return {
            data: [],
            error: true,
        };
    }

};


/**
 * Add to blog comments
 * @param  commentData | author_name, author_email,content and post  props
 * @returns  { data, error }
 */

type CommentDataProps = {
    author_name: string;
    author_email: string;
    content: string;
    post: number;
};
export const addBlogComment = async (commentData: CommentDataProps, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
    try {
        const enCodedAuth = btoa(`${process.env.NEXT_PUBLIC_WP_AUTH_USER}` + ":" + `${process.env.NEXT_PUBLIC_WP_AUTH_PASS}`);

        // if cart key is available, call api to add into existing cart
        const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/comments/?post=${commentData?.post}&content=${commentData?.content}&author_name=${commentData?.author_name}&author_email=${commentData?.author_email}`, {
            method: 'POST',
            headers: {
                Authorization: `Basic ${enCodedAuth}`,
            },
            cache
        })

        if (res.ok) {
            const data = await res.json()
            return {
                message: "Comment added successfully",
                data: data,
            };
        } else {
            return {
                message: "Failed added to add comment",
                data: null,
                error: true
            };
        }
    } catch (error: any) {
        throw error;
    }
};


