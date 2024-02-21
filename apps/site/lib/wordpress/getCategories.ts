'use server';

// NOTE: WP Categories API Query Parameters
type QueryParams = {
    page?: number
    per_page?: number
    search?: string
    exclude?: string
    include?: string
    order?: string
    orderby?: string
    hide_empty?: string
    parent?: string
    post?: string
    slug?: string
}

/**
 * Fetch all available categories data from the WordPress API
 * @param query An object that defines the query parameters to send with the API request.
 * For all available query see the documentation: https://developer.wordpress.org/rest-api/reference/categories/
 * @returns | { data, error }
 */
export const getCategories = async (query?: QueryParams, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {

    const initialQuery = {
        per_page: 10,
    }
    /**
     * initialQuery is the default query object for fetching tags
     *  It specifies to retrieve 10 posts per page, ordered by name, in descending order
     *  If a custom query object is passed as an argument, use that, otherwise use the default query object
     */

    const newQuery = query ? query : initialQuery

    // map the query object to use on api url
    const queryStr =
        Object.entries(newQuery)
            .map(([key, value]) => `${key}=${value}`)
            .join('&') || ''

    const res = await fetch(
        `${process.env.API_URL}/wp-json/wp/v2/categories?${queryStr}`,
        {
            cache
        }
    )
    if (res.ok) {
        const data = await res.json()
        const categoryFilter = data?.filter((item: any) => item?.name != "Uncategorized");
        return {
            data: categoryFilter || [],
            error: null,
        }
    } else {
        return {
            data: [],
            error: true,
        };
    }
}
