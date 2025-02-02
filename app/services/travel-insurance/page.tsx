import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Travel Insurance - Protect Your Journey",
  description: "Get comprehensive travel insurance coverage for your trips. Compare plans and secure your journey with GoFlyzo's trusted insurance partners.",
  openGraph: {
    title: "Travel Insurance - Protect Your Journey | GoFlyzo",
    description: "Get comprehensive travel insurance coverage for your trips. Compare plans and secure your journey with our trusted insurance partners.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        width: 1200,
        height: 630,
        alt: "Travel insurance and protection concept",
      },
    ],
  },
};

const features = [
  {
    title: "Instant Coverage",
    description: "Get insured immediately with digital policy delivery and 24/7 claims support.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Global Medical Coverage",
    description: "Access to worldwide medical assistance and emergency evacuation services.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Plans",
    description: "Choose from single-trip, multi-trip, or custom coverage options to suit your needs.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="trip-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Trip Type
      </label>
      <select
        id="trip-type"
        name="trip-type"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="single">Single Trip</option>
        <option value="multi">Multi-Trip Annual</option>
        <option value="business">Business Travel</option>
        <option value="cruise">Cruise</option>
        <option value="adventure">Adventure Sports</option>
      </select>
    </div>
    <div>
      <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Number of Travelers
      </label>
      <select
        id="travelers"
        name="travelers"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="1">1 Traveler</option>
        <option value="2">2 Travelers</option>
        <option value="3">3 Travelers</option>
        <option value="4">4 Travelers</option>
        <option value="5">5+ Travelers</option>
        <option value="group">Group (10+)</option>
      </select>
    </div>
    <div>
      <label htmlFor="coverage-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Coverage Type
      </label>
      <select
        id="coverage-type"
        name="coverage-type"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="basic">Basic Coverage</option>
        <option value="standard">Standard Coverage</option>
        <option value="premium">Premium Coverage</option>
        <option value="custom">Custom Coverage</option>
      </select>
    </div>
    <div>
      <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Age of Primary Traveler
      </label>
      <select
        id="age"
        name="age"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="0-17">Under 18</option>
        <option value="18-30">18-30</option>
        <option value="31-50">31-50</option>
        <option value="51-65">51-65</option>
        <option value="66+">66 or older</option>
      </select>
    </div>
    <div className="sm:col-span-2">
      <label htmlFor="existing-conditions" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Pre-existing Medical Conditions
      </label>
      <div className="mt-1">
        <select
          id="existing-conditions"
          name="existing-conditions"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="none">None</option>
          <option value="yes">Yes (Additional coverage may be required)</option>
        </select>
      </div>
    </div>
  </>
);

export default function TravelInsurancePage() {
  return (
    <ServicePageTemplate
      title="Protect Your Journey"
      description="Travel with confidence knowing you're covered. Get comprehensive travel insurance that protects you, your trip, and your belongings."
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
      features={features}
      searchLabel="Find Insurance Plans"
      searchPlaceholder="Enter your destination"
      additionalFields={additionalFields}
    />
  );
}
