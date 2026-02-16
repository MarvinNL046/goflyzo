"use client";

import AffiliateWidget from '@/components/common/AffiliateWidget';

const KLOOK_WIDGET = '<script async src="https://tpembd.com/content?currency=USD&trs=421888&shmarker=602467&locale=en&category=4&amount=3&powered_by=true&campaign_id=137&promo_id=4497" charset="utf-8"></script>';

export default function KlookEmbed() {
  return (
    <AffiliateWidget
      scriptContent={KLOOK_WIDGET}
      className="w-full min-h-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
    />
  );
}
