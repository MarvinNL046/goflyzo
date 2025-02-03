import { getLocationByCountryAndCity } from '@/lib/locations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { generateLocationSchema, generateBreadcrumbSchema } from '@/lib/schema';

interface PageProps {
  params: {
    country: string;
    city: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const country = decodeURIComponent(params.country);
  const city = decodeURIComponent(params.city);
  const location = getLocationByCountryAndCity(country, city);

  if (!location) {
    return {};
  }

  const ogUrl = new URL('https://goflyzo.com/api/og');
  ogUrl.searchParams.set('title', `${location.city}, ${location.country}`);
  ogUrl.searchParams.set('subtitle', location.description);
  ogUrl.searchParams.set('image', location.image);

  return {
    title: `${location.city}, ${location.country} Travel Guide | GoFlyzo`,
    description: location.description,
    openGraph: {
      title: `${location.city}, ${location.country} Travel Guide | GoFlyzo`,
      description: location.description,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: `Travel guide for ${location.city}, ${location.country}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${location.city}, ${location.country} Travel Guide | GoFlyzo`,
      description: location.description,
      images: [ogUrl.toString()],
    },
  };
}

export default function CityPage({ params }: PageProps) {
  const country = decodeURIComponent(params.country);
  const city = decodeURIComponent(params.city);
  const location = getLocationByCountryAndCity(country, city);

  if (!location) {
    notFound();
  }

  const services = location.services.split(',').map(s => s.trim());

  // Generate schema data
  const citySchema = generateLocationSchema(
    `${location.city}, ${location.country}`,
    location.description,
    location.image,
    `https://goflyzo.com/locations/${encodeURIComponent(location.country.toLowerCase())}/${encodeURIComponent(location.city.toLowerCase())}`,
    'city'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Destinations', url: '/locations' },
    { name: location.country, url: `/locations/${encodeURIComponent(location.country.toLowerCase())}` },
    { name: location.city, url: `/locations/${encodeURIComponent(location.country.toLowerCase())}/${encodeURIComponent(location.city.toLowerCase())}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([citySchema, breadcrumbSchema]),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src={location.image}
              alt={`${location.city}, ${location.country}`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content Section */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {location.city}, {location.country}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {location.description}
            </p>

            {/* Available Services */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Available Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service: string) => (
                  <Link
                    key={service}
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-gray-900 dark:text-gray-100">
                      {service}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to Country */}
            <Link
              href={`/locations/${encodeURIComponent(location.country.toLowerCase())}`}
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to {location.country} destinations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
