import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Taxi & Transfer Services",
  description: "Book reliable airport transfers and taxi services worldwide. Pre-book your ride with trusted local operators for hassle-free transportation.",
  openGraph: {
    title: "Taxi & Transfer Services | GoFlyzo",
    description: "Book reliable airport transfers and taxi services worldwide. Pre-book your ride with trusted local operators for hassle-free transportation.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559829233-eb54e8256642",
        width: 1200,
        height: 630,
        alt: "Professional taxi service",
      },
    ],
  },
};

const features = [
  {
    title: "Fixed Prices",
    description: "No surprises - all fares are confirmed at booking with no hidden charges.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Meet & Greet",
    description: "Professional drivers with name boards for airport pickups.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Flight Monitoring",
    description: "Free waiting time and flight tracking for airport transfers.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Service Type
      </label>
      <select
        id="service-type"
        name="service-type"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="airport">Airport Transfer</option>
        <option value="hourly">Hourly Hire</option>
        <option value="point">Point to Point</option>
        <option value="tour">City Tour</option>
      </select>
    </div>
    <div>
      <label htmlFor="pickup-location" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Pickup Location
      </label>
      <input
        type="text"
        name="pickup-location"
        id="pickup-location"
        placeholder="Airport, hotel, or address"
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
        placeholder="Hotel, airport, or address"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Pickup Date & Time
      </label>
      <input
        type="datetime-local"
        name="pickup-time"
        id="pickup-time"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Passengers
      </label>
      <select
        id="passengers"
        name="passengers"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="1">1-2 Passengers</option>
        <option value="3">3-4 Passengers</option>
        <option value="5">5-6 Passengers</option>
        <option value="7">7-8 Passengers</option>
        <option value="group">Group (9+ Passengers)</option>
      </select>
    </div>
    <div>
      <label htmlFor="vehicle-class" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Vehicle Class
      </label>
      <select
        id="vehicle-class"
        name="vehicle-class"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="luxury">Luxury</option>
        <option value="van">Minivan</option>
        <option value="bus">Minibus</option>
      </select>
    </div>
  </>
);

export default function TaxiServicesPage() {
  return (
    <ServicePageTemplate
      title="Professional Transfer Services"
      description="Book reliable airport transfers and taxi services worldwide. Pre-book your ride with trusted local operators for hassle-free transportation."
      heroImage="https://images.unsplash.com/photo-1559829233-eb54e8256642"
      features={features}
      searchLabel="Book Transfer"
      searchPlaceholder="Enter city or airport"
      additionalFields={additionalFields}
    />
  );
}
