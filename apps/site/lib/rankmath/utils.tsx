import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * tailwind class merge function
 * @param inputs
 * @example
 * const classes = twMerge('text-red-500', 'text-2xl')
 * console.log(classes)
 * @returns
 */
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(...inputs))
}

/**
 * filter the category by category category
 * @param slug category category as string
 * @param allCategories all categories as array
 * @returns | { category-data } as object
 * @example
 * const category = sortCategory(allCategories, slug)
 * console.log(category)
 */
export const sortCategory = (allCategories: any, slug: string) => {
	return allCategories?.find(
		(category: any) => category.slug === slug
	)
}

/**
 * date formatted function
 * @param dataInput date as string
 * @returns | { date } as string
 * @example
 * const date = dateFormate(dataInput)
 * console.log(date)
 */
export const dateFormate = (dataInput: any) => {
	const d = new Date(dataInput)
	return d?.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}

/**
 * Content replace function
 * @param content
 * @returns
 */
export const contentReplace = (content: string) => {
	const replace = content?.replace(/<p>/g, '<p/>')
	return replace?.replace(/(<([^>]+)>)/gi, '').slice(0, 200);
}

/**
 * seo data re-arrange function
 * @param seoData
 * @returns
 * @example
 * const seo = arrangeSeoData(seoData)
 * console.log(seo)
 */
export const arrangeSeoData = (seoData: any) => {
	const findByProperty = (property: any) => {
		return seoData?.find((item: any) => item?.props?.property === property)
	}
	const findByName = (name: any) => {
		return seoData?.find((item: any) => item?.props?.name === name)
	}

	const titleMeta = seoData?.find((item: any) => item?.type === 'title')
	const descMeta = findByName('description')
	const localeMetaOg = findByProperty('og:locale')
	const typeMetaOg = findByProperty('og:type')
	const titleMetaOg = findByProperty('og:title')
	const descMetaOg = findByProperty('og:description')
	const urlMetaOg = findByProperty('og:url')
	const siteNameMetaOg = findByProperty('og:site_name')
	const updatedTimeMetaOg = findByProperty('og:updated_time')
	const imgMetaOg = findByProperty('og:image')
	const imageAltMetaOg = findByProperty('og:image:alt')
	const articlePublishedMeta = findByProperty('article:published_time')
	const articleModifiedMeta = findByProperty('article:modified_time')
	const brandMeta = findByProperty('product:brand')
	const availabilityMeta = findByProperty('product:availability')
	const videoMetaOg = findByProperty('og:video')

	// twitter-meta
	const twitterCardMeta = findByName('twitter:card')
	const twitterTitleMeta = findByName('twitter:title')
	const twitterDescMeta = findByName('twitter:description')
	const twitterImgMeta = findByName('twitter:image')

	return {
		metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL as string),
		title:
			titleMeta?.props?.children ||
			'Metashop - Top Of Wordpress Woocommerce Store',
		description:
			descMeta?.props?.content ||
			'Discover the best WordPress Woocommerce Store with Metashop',
		robots: {
			index: true,
			follow: true,
		},
		// viewport: {
		//  width: 'device-width',
		// },
		article: {
			published_time:
				articlePublishedMeta?.props?.content || '2023-02-26T18:20:07+00:00',
			modified_time:
				articleModifiedMeta?.props?.content || '2023-03-04T19:10:10+00:00',
		},
		other: {
			brand: brandMeta?.props?.content || '',
			availability: availabilityMeta?.props?.content || '',
		},
		openGraph: {
			locale: localeMetaOg?.props?.content || 'en_US',
			// type: 'article',
			type: typeMetaOg?.props?.content === 'article' ? 'article' : 'website',
			title:
				titleMetaOg?.props?.content ||
				'Metashop - Top Of Wordpress Woocommerce Store',
			description:
				descMetaOg?.props?.content ||
				'Discover the best WordPress Woocommerce Store with Metashop',
			url: urlMetaOg?.props?.content || '',
			site_name: siteNameMetaOg?.props?.content || 'Metashop',
			updated_time:
				updatedTimeMetaOg?.props?.content || '2023-03-04T19:10:10+00:00',
			images: [
				{
					url:
						imgMetaOg?.props?.content ||
						process.env.API_URL,
					width: 1024,
					height: 769,
					alt: imageAltMetaOg?.props?.content || 'Metashop Website',
				},
			],
			video: [{ url: videoMetaOg?.props?.content || '' }],
		},
		twitter: {
			card: twitterCardMeta?.props?.content || 'summary_large_image',
			title:
				twitterTitleMeta?.props?.content ||
				'Metashop - Top Of Wordpress Woocommerce Store',
			description:
				twitterDescMeta?.props?.content ||
				'Discover the best WordPress Woocommerce Store with Metashop',
			siteId: '',
			creator: '',
			creatorId: '',
			images: [
				twitterImgMeta?.props?.content ||
				'https://wp.jstemplate.net/wp-content/uploads/2021/05/fig_template-1024x769.jpg',
			],
		},
	}
}
