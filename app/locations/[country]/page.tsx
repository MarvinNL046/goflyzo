import { getLocationsByCountry, getAllCountries } from '@/lib/locations';
import { getServerSupabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { generateLocationSchema, generateBreadcrumbSchema } from '@/lib/schema';
import AIContent from '@/components/locations/AIContent';

interface PageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    country: country.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const country = decodeURIComponent(params.country);
  const locations = getLocationsByCountry(country);

  if (!locations.length) {
    return {};
  }

  const ogUrl = new URL('https://goflyzo.com/api/og');
  ogUrl.searchParams.set('title', `Explore ${locations[0].country}`);
  ogUrl.searchParams.set('subtitle', `Discover amazing destinations in ${locations[0].country}`);
  ogUrl.searchParams.set('image', locations[0].image);

  return {
    title: `${locations[0].country} Travel Guide | GoFlyzo`,
    description: `Explore our curated list of destinations in ${locations[0].country}. Find local insights, travel tips, and recommendations for your next adventure.`,
    openGraph: {
      title: `${locations[0].country} Travel Guide | GoFlyzo`,
      description: `Explore our curated list of destinations in ${locations[0].country}. Find local insights, travel tips, and recommendations for your next adventure.`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: `Travel destinations in ${locations[0].country}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${locations[0].country} Travel Guide | GoFlyzo`,
      description: `Explore our curated list of destinations in ${locations[0].country}. Find local insights, travel tips, and recommendations for your next adventure.`,
      images: [ogUrl.toString()],
    },
  };
}

export default async function CountryPage({ params }: PageProps) {
  const country = decodeURIComponent(params.country);
  const locations = getLocationsByCountry(country);

  if (!locations.length) {
    notFound();
  }

  // Fetch AI content from Supabase
  const supabase = await getServerSupabase();
  console.log('Fetching content for country:', country.toLowerCase());
  const { data: aiContent, error } = await supabase
    .from('location_content')
    .select('*')
    .eq('country', country.toLowerCase())
    .order('last_updated', { ascending: false })
    .limit(1)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      console.log('No content found for country:', country);
    } else {
      console.error('Error fetching location content:', error);
    }
  } else {
    console.log('Found content for country:', country, aiContent);
  }

  // Generate schema data
  const countrySchema = generateLocationSchema(
    locations[0].country,
    `Explore our curated list of destinations in ${locations[0].country}. Find local insights, travel tips, and recommendations for your next adventure.`,
    locations[0].image,
    `https://goflyzo.com/locations/${encodeURIComponent(locations[0].country.toLowerCase())}`,
    'country'
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Destinations', url: '/locations' },
    { name: locations[0].country, url: `/locations/${encodeURIComponent(locations[0].country.toLowerCase())}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([countrySchema, breadcrumbSchema]),
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Destinations in {locations[0].country}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our curated list of destinations in {locations[0].country}, complete with local insights and travel tips.
          </p>
        </div>

        {aiContent && aiContent.content && (
          <div className="mb-12">
            <AIContent 
              country={locations[0].country}
              content={aiContent.content}
              lastUpdated={aiContent.last_updated}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Link
              key={location.city}
              href={`/locations/${encodeURIComponent(location.country.toLowerCase())}/${encodeURIComponent(location.city.toLowerCase())}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={location.image}
                  alt={`${location.city}, ${location.country}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {location.city}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                  {location.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
