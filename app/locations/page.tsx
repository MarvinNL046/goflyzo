import { getAllCountries } from '@/lib/locations';
import Link from 'next/link';
import { generateLocationSchema, generateBreadcrumbSchema } from '@/lib/schema';

export async function generateMetadata() {
  const ogUrl = new URL('https://goflyzo.com/api/og');
  ogUrl.searchParams.set('title', 'Travel Destinations');
  ogUrl.searchParams.set('subtitle', 'Explore amazing places around the world');

  return {
    title: 'Travel Destinations | GoFlyzo',
    description: 'Explore our curated list of travel destinations around the world. Find local insights, travel tips, and recommendations for your next adventure.',
    openGraph: {
      title: 'Travel Destinations | GoFlyzo',
      description: 'Explore our curated list of travel destinations around the world. Find local insights, travel tips, and recommendations for your next adventure.',
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: 'GoFlyzo Travel Destinations',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Travel Destinations | GoFlyzo',
      description: 'Explore our curated list of travel destinations around the world. Find local insights, travel tips, and recommendations for your next adventure.',
      images: [ogUrl.toString()],
    },
  };
}

export default async function LocationsPage() {
  const countries = await getAllCountries();

  // Generate schema data
  const destinationsSchema = generateLocationSchema(
    'Travel Destinations',
    'Explore our curated list of travel destinations around the world. Find local insights, travel tips, and recommendations for your next adventure.',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800',
    'https://goflyzo.com/locations',
    'country'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Destinations', url: '/locations' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([destinationsSchema, breadcrumbSchema]),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Travel Destinations
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated list of destinations around the world, complete with local insights and travel tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <Link
              key={country}
              href={`/locations/${encodeURIComponent(country.toLowerCase())}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {country}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore destinations in {country}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
