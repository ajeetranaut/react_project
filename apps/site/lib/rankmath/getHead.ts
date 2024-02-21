/**
 * get rank-math seo data
 * @param url  page url
 * @returns  seo data
 */
export const getSeoHead = async (url: string) => {
	// const controller = new AbortController();

	// const timeoutId = setTimeout(() => controller.abort(), 500); // Set timeout in milliseconds

	return await fetch(
		`${process.env.API_URL}/wp-json/rankmath/v1/getHead?url=${url}`,
		{
			// signal: controller.signal,
		}
	)
		.then((res: any) => {
			return res.json();
		})
		.catch((error) => {
			throw error;
		})
	// .finally(() => clearTimeout(timeoutId));
};
