import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Train Services - Book Rail Tickets",
  description: "Book train tickets for destinations worldwide. Compare prices and schedules from major rail operators for comfortable and scenic journeys.",
  openGraph: {
    title: "Train Services - Book Rail Tickets | GoFlyzo",
    description: "Book train tickets for destinations worldwide. Compare prices and schedules from major rail operators for comfortable and scenic journeys.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1474487548417-781cb71495f3",
        width: 1200,
        height: 630,
        alt: "Modern train on railway tracks",
      },
    ],
  },
};

const features = [
  {
    title: "Global Rail Network",
    description: "Access to train routes across Europe, Asia, and the Americas.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Best Price Guarantee",
    description: "Find the best rail fares with our price comparison technology.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Mobile Tickets",
    description: "Paperless travel with digital tickets on your phone.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="departure-station" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Departure Station
      </label>
      <input
        type="text"
        name="departure-station"
        id="departure-station"
        placeholder="Enter departure station"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="arrival-station" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Arrival Station
      </label>
      <input
        type="text"
        name="arrival-station"
        id="arrival-station"
        placeholder="Enter arrival station"
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
      <label htmlFor="departure-time" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Preferred Time
      </label>
      <select
        id="departure-time"
        name="departure-time"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="any">Any Time</option>
        <option value="morning">Morning (6:00 - 12:00)</option>
        <option value="afternoon">Afternoon (12:00 - 18:00)</option>
        <option value="evening">Evening (18:00 - 24:00)</option>
        <option value="night">Night (0:00 - 6:00)</option>
      </select>
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
        <option value="1">1 Adult</option>
        <option value="2">2 Adults</option>
        <option value="3">3 Adults</option>
        <option value="4">4 Adults</option>
        <option value="group">Group (5+ Adults)</option>
      </select>
    </div>
    <div>
      <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Travel Class
      </label>
      <select
        id="class"
        name="class"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="economy">Economy/Standard</option>
        <option value="business">Business/First Class</option>
        <option value="sleeper">Sleeper/Night Train</option>
        <option value="luxury">Luxury/Premium</option>
      </select>
    </div>
  </>
);

export default function TrainServicesPage() {
  return (
    <ServicePageTemplate
      title="Book Train Tickets Worldwide"
      description="Compare and book train tickets for destinations across the globe. Find the best rail fares and enjoy comfortable, scenic journeys."
      heroImage="https://images.unsplash.com/photo-1474487548417-781cb71495f3"
      features={features}
      searchLabel="Search Train Routes"
      searchPlaceholder="Enter station or city"
      additionalFields={additionalFields}
    />
  );
}
