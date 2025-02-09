import { getAffiliate } from '@/lib/affiliates';

export default function generateMetadata() {
  const yesim = getAffiliate('yesim');

  if (!yesim) {
    return null;
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'YeSim eSIM',
    description: yesim.description,
    brand: {
      '@type': 'Brand',
      name: 'YeSim',
      logo: `https://goflyzo.com${yesim.logo}`,
    },
    offers: {
      '@type': 'Offer',
      price: '0.50',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      reviewCount: '27000',
    },
  };

  return schema;
}
