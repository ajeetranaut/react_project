'use client';
import { useGlobalContext } from '@/context/store';
import { BrandData } from '@/data/BrandData';
import { SliderTwoDataAll } from '@/data/SliderTwoData';
import { BannerSliderTwo, Brands, FlashSale, Gap, IconBoxOne, MiniBanner, Newsletter, RecentlyViewed, TrendingProducts } from '@/ui';
import { getCookie } from 'cookies-next';
import { getProducts } from 'lib/woocommerce/getProducts';
import { Fragment, useEffect, useState, useTransition } from 'react';

const PageBody = () => {
  const { dictionaries, lang } = useGlobalContext()
  const [featuredData, setFeaturedData] = useState<[] | null>(null)
  const [recentlyViewedData, setRecentlyViewedData] = useState<[] | null>(null)
  const [, startTransition] = useTransition()

  // *** NOTE: Get featured products data from WooCommerce API
  useEffect(() => {
    startTransition(() => {
      getProducts({
        per_page: 4,
        featured: true,
      }).then((res) => {
        if (res.error) {
          setFeaturedData([])
          return
        }
        setFeaturedData(res.data)
      })
    })
    return () => {
      setFeaturedData([])
    }
  }, [])

  // *** NOTE: Get recently viewed products data from WooCommerce API
  useEffect(() => {
    const recentlyViewedIds = getCookie('metashop:recentlyViewed')
    // *** Get the recently viewed products from cookie ***
    if (recentlyViewedIds) {
      const ids = JSON.parse(recentlyViewedIds as string)

      if (ids.length === 0) {
        setRecentlyViewedData([])
        return
      }
      startTransition(() => {
        getProducts({
          include: ids,
        }).then((res) => {
          if (res.error) {
            setRecentlyViewedData([])
            return
          }
          setRecentlyViewedData(res.data)
        })
      })
    } else {
      setRecentlyViewedData([])
    }

    return () => {
      setRecentlyViewedData([])
    }
  }, [])

  return (
    <main>
      <BannerSliderTwo data={SliderTwoDataAll[lang]} />
      <Gap />
      <IconBoxOne data={dictionaries.home.support} />
      <Gap />
      <FlashSale
        {...{
          sectionTitle: dictionaries.home.selling_products.title,
          buttonText: dictionaries.home.selling_products.btnText,
          data: featuredData
        }}
      />
      <Gap />
      <MiniBanner data={dictionaries.home.products_banners} />
      <Gap />
      <TrendingProducts
        tabData={dictionaries.home.trending_products.tabData}
        btn={dictionaries.home.trending_products.btn}
      />
      <Gap />
      <Newsletter
        {...{
          title: dictionaries.home.newsletter.title,
          subtitle: dictionaries.home.newsletter.subtitle,
          placeholder: dictionaries.home.newsletter.placeholder,
          buttonText: dictionaries.home.newsletter.buttonText,
        }}
      />
      <Gap />
      {!recentlyViewedData || recentlyViewedData?.length > 0 && (
        <Fragment>
          <RecentlyViewed
            {...{
              title: dictionaries.home.recently_viewed.title,
              buttonText: dictionaries.home.recently_viewed.btnText,
              data: recentlyViewedData,
            }}
          />
          <Gap />
        </Fragment>
      )}
      <Brands data={BrandData} />
      <Gap />
    </main>
  )
}

export default PageBody