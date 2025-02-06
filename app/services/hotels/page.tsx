import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";
import HotelGrid from "../../../components/services/HotelGrid";

export const metadata: Metadata = {
  title: "Book Hotels Worldwide",
  description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide with GoFlyzo.",
  openGraph: {
    title: "Book Hotels Worldwide | GoFlyzo",
    description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        width: 1200,
        height: 630,
        alt: "Luxury hotel room",
      },
    ],
  },
};

const features = [
  {
    title: "Best Price Guarantee",
    description: "We match or beat any competitor's price for the same hotel booking.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Verified Reviews",
    description: "Real reviews from verified guests help you make informed decisions.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Free Cancellation",
    description: "Flexible booking options with free cancellation on most rooms.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Check-in
      </label>
      <input
        type="date"
        name="check-in"
        id="check-in"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Check-out
      </label>
      <input
        type="date"
        name="check-out"
        id="check-out"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Guests
      </label>
      <select
        id="guests"
        name="guests"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="1">1 Guest</option>
        <option value="2">2 Guests</option>
        <option value="3">3 Guests</option>
        <option value="4">4 Guests</option>
        <option value="5">5+ Guests</option>
      </select>
    </div>
    <div>
      <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Rooms
      </label>
      <select
        id="rooms"
        name="rooms"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="1">1 Room</option>
        <option value="2">2 Rooms</option>
        <option value="3">3 Rooms</option>
        <option value="4">4+ Rooms</option>
      </select>
    </div>
  </>
);

export default function HotelsPage() {
  return (
    <ServicePageTemplate
      title="Find Your Perfect Stay"
      description="Compare prices from all major hotel booking sites. Get exclusive deals and save on your next stay."
      heroImage="https://images.unsplash.com/photo-1566073771259-6a8506099945"
      features={features}
      searchLabel="Search Hotels"
      searchPlaceholder="Enter city or hotel name"
      additionalFields={additionalFields}
      afterHeroContent={<HotelGrid />}
    />
  );
}
