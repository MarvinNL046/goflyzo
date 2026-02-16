"use client";

import AffiliateWidget from '@/components/common/AffiliateWidget';

const GYG_POPULAR_TOURS = '<script async src="https://tpembd.com/content?trs=421888&shmarker=602467&place=USA&items=3&locale=en&powered_by=true&campaign_id=108&promo_id=4039" charset="utf-8"></script>';
const GYG_CITY_WIDGET = '<script async src="https://tpembd.com/content?trs=421888&shmarker=602467&locale=en-US&powered_by=true&campaign_id=108&promo_id=4040" charset="utf-8"></script>';

export function GygPopularToursEmbed() {
  return (
    <AffiliateWidget
      scriptContent={GYG_POPULAR_TOURS}
      className="w-full min-h-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
    />
  );
}

export function GygCityEmbed() {
  return (
    <AffiliateWidget
      scriptContent={GYG_CITY_WIDGET}
      className="w-full min-h-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
    />
  );
}
