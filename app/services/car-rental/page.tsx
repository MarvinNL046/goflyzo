import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";
import CarGrid from "../../../components/services/CarGrid";

export const metadata: Metadata = {
  title: "Car Rental - Find Your Perfect Vehicle",
  description: "Rent cars worldwide with flexible pickup and return options. Compare prices from top rental companies and find the perfect vehicle for your journey.",
  openGraph: {
    title: "Car Rental - Find Your Perfect Vehicle | GoFlyzo",
    description: "Rent cars worldwide with flexible pickup and return options. Compare prices from top rental companies and find the perfect vehicle for your journey.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
        width: 1200,
        height: 630,
        alt: "Luxury rental car",
      },
    ],
  },
};

const features = [
  {
    title: "Best Price Guarantee",
    description: "Find the best rates from top rental companies worldwide, guaranteed.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Pickup & Return",
    description: "Choose from thousands of convenient locations worldwide.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer service and roadside assistance.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Pickup Location
      </label>
      <input
        type="text"
        name="pickup-location"
        id="pickup-location"
        placeholder="City, Airport, or Address"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="dropoff-location" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Drop-off Location
      </label>
      <input
        type="text"
        name="dropoff-location"
        id="dropoff-location"
        placeholder="Same as pickup"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Pickup Date & Time
      </label>
      <input
        type="datetime-local"
        name="pickup-date"
        id="pickup-date"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="dropoff-date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Drop-off Date & Time
      </label>
      <input
        type="datetime-local"
        name="dropoff-date"
        id="dropoff-date"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="vehicle-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Vehicle Type
      </label>
      <select
        id="vehicle-type"
        name="vehicle-type"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">All Types</option>
        <option value="economy">Economy</option>
        <option value="compact">Compact</option>
        <option value="midsize">Midsize</option>
        <option value="suv">SUV</option>
        <option value="luxury">Luxury</option>
        <option value="van">Van</option>
      </select>
    </div>
    <div>
      <label htmlFor="driver-age" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Driver&apos;s Age
      </label>
      <select
        id="driver-age"
        name="driver-age"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="25+">25 or older</option>
        <option value="21-24">21-24</option>
        <option value="18-20">18-20 (Additional fees may apply)</option>
      </select>
    </div>
  </>
);

export default function CarRentalPage() {
  return (
    <ServicePageTemplate
      title="Rent Your Perfect Car"
      description="Compare and book from a wide selection of vehicles worldwide. Get the best rates from top rental companies with our price match guarantee."
      heroImage="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d"
      features={features}
      searchLabel="Search Vehicles"
      searchPlaceholder="Enter pickup location"
      additionalFields={additionalFields}
      afterHeroContent={<CarGrid />}
      affiliateLink="https://trip.tp.st/oLwZ3h1y"
    />
  );
}
