interface SchemaOrgContext {
  '@context': 'https://schema.org';
  '@type': string;
}

export interface TravelDestinationSchema extends SchemaOrgContext {
  '@type': 'TouristDestination';
  name: string;
  description: string;
  image: string;
  url: string;
  touristType: string[];
  geo?: {
    '@type': 'GeoCoordinates';
    latitude: number;
    longitude: number;
  };
}

export function generateLocationSchema(
  name: string,
  description: string,
  image: string,
  url: string,
  type: 'country' | 'city'
): TravelDestinationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name,
    description,
    image,
    url,
    touristType: [
      'Sightseeing',
      'Cultural Tourism',
      type === 'city' ? 'Urban Tourism' : 'Country Tourism',
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://goflyzo.com${item.url}`,
    })),
  };
}
