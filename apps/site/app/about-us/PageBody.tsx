'use client';
import { useGlobalContext } from '@/context/store';
import { BrandData } from '@/data/BrandData';
import { AboutUsBanner, Brands, BreadcrumbTwo, Gap, IconBoxOne, OurOffer, OurTeam } from '@/ui';
import { Fragment } from 'react';

const PageBody = () => {
  const { dictionaries } = useGlobalContext();
  return (
    <Fragment>
      <BreadcrumbTwo
        title={dictionaries.about_us.breadcrumb.title}
        description={dictionaries.about_us.breadcrumb.description}
      />
      <Gap />
      <AboutUsBanner {...dictionaries.about_us.banner} />
      <Gap />
      <IconBoxOne data={dictionaries.about_us.support} />
      <Gap />
      <OurTeam {...dictionaries.about_us.our_teams} />
      <Gap />
      <OurOffer {...dictionaries.about_us.our_offers} />
      <Gap />
      <Brands data={BrandData} />
      <Gap />
    </Fragment>
  );
}

export default PageBody