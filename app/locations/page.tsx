import { Metadata } from "next";
import Link from "next/link";
import { getCountries, getLocationsByCountry, createSlug } from "../utils/locations";

export const metadata: Metadata = {
  title: "Travel Destinations | GoFlyzo",
  description: "Explore our comprehensive list of travel destinations worldwide. Find the best deals on hotels, flights, and more.",
};

export default function LocationsPage() {
  const countries = getCountries();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Travel Destinations
          </h1>
          <p className="text-xl md:text-2xl">
            Explore amazing destinations around the world
          </p>
        </div>
      </div>

      {/* Countries Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-6">
          {countries.map((country) => {
            const locations = getLocationsByCountry(country);
            return (
              <div key={country} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {country}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/locations/${createSlug(location.country)}/${createSlug(location.city)}`}
                      className="block p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {location.city}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {location.services.length} services available
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
