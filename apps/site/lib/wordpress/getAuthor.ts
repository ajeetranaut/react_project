'use server';

// NOTE: WP Author API Query Parameters
type QueryParams = {
  page?: number
  per_page?: number
  search?: string
  exclude?: string
  include?: string
  offset?: number
  order?: string
  orderby?: string
  hide_empty?: string
  post?: string
  slug?: string
}

/**
 * Get post data from wordpress.
 * @param query An object with WP author available arguments
 * For all available query see the documentation: https://developer.wordpress.org/rest-api/reference/posts/.
 * @returns  { data, error }
 */

export const getAuthors = async (query?: QueryParams, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {

  const initialQuery = {
    per_page: 10,
  };
  // map the query object to use on api url
  const finalQury = query ? query : initialQuery;
  const queryStr =
    Object.entries(finalQury)
      .map(([key, value]) => `${key}=${value}`)
      .join('&') || ''

  // fetch posts from the API
  const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/users?${queryStr}`,
    {
      cache
    }
  )

  if (res.ok) {
    const data = await res.json()
    const author = data?.map((author: any) => ({
      id: author.id,
      name: author.name,
      slug: author.slug,
      avatar: author.avatar_urls[96],
    }));
    return {
      data: author || [],
      error: false,
    }
  } else {
    return {
      data: [],
      error: true,
    };
  }
}


// NOTE: WP Author By ID API call
export const getAuthorById = async (id: string | string[] | undefined, cache: 'force-cache' | 'no-cache' | 'no-store' = 'force-cache') => {
  const res = await fetch(`${process.env.API_URL}/wp-json/wp/v2/users/${id}`,
    {
      cache
    }
  )
  if (res.ok) {
    const data = await res.json()
    const author = {
      id: data.id,
      name: data.name,
      slug: data.slug,
      avatar: data.avatar_urls[96],
    };
    return {
      data: author || [],
      error: false,
    }
  } else {
    return {
      data: [],
      error: true,
    };
  }
}