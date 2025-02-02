import { Metadata } from "next";
import Image from "next/image";
import { getLocationBySlug } from "../../../utils/locations";
import { notFound } from "next/navigation";

interface LocationPageProps {
  params: {
    country: string;
    city: string;
  };
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.country, params.city);
  
  if (!location) {
    return {
      title: 'Location Not Found | GoFlyzo',
      description: 'The requested travel destination could not be found.'
    };
  }

  return {
    title: location.meta.title,
    description: location.meta.description,
    openGraph: {
      title: location.meta.title,
      description: location.meta.description,
      images: [
        {
          url: location.image,
          width: 1200,
          height: 630,
          alt: `${location.city}, ${location.country}`,
        },
      ],
    },
  };
}

export default function LocationPage({ params }: LocationPageProps) {
  const location = getLocationBySlug(params.country, params.city);

  if (!location) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src={location.image}
          alt={`${location.city}, ${location.country}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {location.city}, {location.country}
              </h1>
              <p className="text-xl md:text-2xl">
                {location.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            Available Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {location.services.map((service: string, index: number) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {service}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Find the best {service.toLowerCase()} deals in {location.city}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Search {service}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
