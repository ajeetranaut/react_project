'use server';

// NOTE: Product Reviews data fetch
import { wooToken } from "../utils/woocommerce";

/**
 * Get Product Reviews by ID
 * @param id as product-id
 * @returns | { reviews, error} 
 */
export const getReviews = async (id: number, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
    // Define your WooCommerce API endpoint URL
    const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/reviews?product=${id}`;

    // Set up the headers for the API call
    const headers = {
        Authorization: `Basic ${wooToken}`,
    };

    // Make the API call using fetch and force cache
    const response = await fetch(apiUrl, { headers, cache });

    // Parse the JSON response
    const data = await response.json();

    if (response.ok) {
        const reviews = data?.map((Review: any) => ({
            id: Review?.id,
            name: Review?.reviewer,
            rating: Review?.rating,
            date: Review?.date_created,
            content: Review?.review,
        }));

        return {
            reviews,
            error: null,
        }
    }

    // Handle errors
    const error = {
        status: response.status,
        message: data.message || 'Unknown error',
    };

    return {
        reviews: [], error: error,
    }
}

// NOTE: WooCommerce API Query Parameters
export type PostReviewProps = {
    review: string;
    reviewer: string;
    reviewer_email: string;
    rating: number;
    product_id: number;
}
/**
 * post product= review
 * @param  addData(object) having product_id, review, reviewer, reviewer_email, rating
 * @returns | { data, error} 
 */
export const postReview = async (addData: PostReviewProps) => {
    const newQuery = addData ? addData : {}
    // map the query object to use on api url
    const queryStr =
        Object.entries(newQuery)
            .map(([key, value]) => `${key}=${value}`)
            .join('&') || ''

    // Define your WooCommerce API endpoint URL
    const apiUrl = `${process.env.API_URL}/wp-json/wc/v3/products/reviews?${queryStr}`;

    // Set up the headers for the API call
    const headers = {
        Authorization: `Basic ${wooToken}`,
        cache: 'no-cache',
    };

    // Make the API call using fetch and force cache
    const response = await fetch(apiUrl, { headers, method: 'POST' });

    // Parse the JSON response
    const data = await response.json();

    if (response.ok) {
        return {
            data,
            error: null,
        }
    }

    // Handle errors
    const error = {
        status: response.status,
        message: data.message || 'Unknown error',
    };

    return { data, error }
}
