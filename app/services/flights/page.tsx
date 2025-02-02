import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Book Flights Worldwide",
  description: "Find and book flights to destinations worldwide. Compare prices, schedules, and airlines to get the best deals on air travel with GoFlyzo.",
  openGraph: {
    title: "Book Flights Worldwide | GoFlyzo",
    description: "Find and book flights to destinations worldwide. Compare prices, schedules, and airlines to get the best deals on air travel.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
        width: 1200,
        height: 630,
        alt: "Airplane flying through clouds",
      },
    ],
  },
};

const features = [
  {
    title: "Price Match Promise",
    description: "Find a lower price elsewhere? We'll match it and give you extra travel credit.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Booking",
    description: "Change your flight dates with minimal or no fees on selected tickets.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for any flight-related queries or changes.",
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
      <label htmlFor="departure" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Departure
      </label>
      <input
        type="text"
        name="departure"
        id="departure"
        placeholder="From which city?"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="arrival" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Arrival
      </label>
      <input
        type="text"
        name="arrival"
        id="arrival"
        placeholder="To which city?"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Departure Date
      </label>
      <input
        type="date"
        name="departure-date"
        id="departure-date"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="return-date" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Return Date
      </label>
      <input
        type="date"
        name="return-date"
        id="return-date"
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
        <option value="1">1 Passenger</option>
        <option value="2">2 Passengers</option>
        <option value="3">3 Passengers</option>
        <option value="4">4 Passengers</option>
        <option value="5">5+ Passengers</option>
      </select>
    </div>
    <div>
      <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Class
      </label>
      <select
        id="class"
        name="class"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="economy">Economy</option>
        <option value="premium">Premium Economy</option>
        <option value="business">Business</option>
        <option value="first">First Class</option>
      </select>
    </div>
  </>
);

export default function FlightsPage() {
  return (
    <ServicePageTemplate
      title="Find Your Perfect Flight"
      description="Search and compare flights from hundreds of airlines and travel sites. Get the best deals on airfare for your next trip."
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
      features={features}
      searchLabel="Search Flights"
      searchPlaceholder="Where would you like to go?"
      additionalFields={additionalFields}
    />
  );
}
