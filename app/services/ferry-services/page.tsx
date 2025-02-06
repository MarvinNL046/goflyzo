import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";
import FerryGrid from "../../../components/services/FerryGrid";

export const metadata: Metadata = {
  title: "Ferry Services - Book Your Sea Journey",
  description: "Book ferry tickets for scenic water routes and island hopping. Compare prices and schedules from major ferry operators worldwide.",
  openGraph: {
    title: "Ferry Services - Book Your Sea Journey | GoFlyzo",
    description: "Book ferry tickets for scenic water routes and island hopping. Compare prices and schedules from major ferry operators worldwide.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2",
        width: 1200,
        height: 630,
        alt: "Ferry sailing on open water",
      },
    ],
  },
};

const features = [
  {
    title: "Extensive Routes",
    description: "Access to hundreds of ferry routes worldwide, connecting islands and coastal destinations.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Real-time Schedules",
    description: "Up-to-date departure times and live updates on all ferry services.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Bookings",
    description: "Easy amendments and cancellations on most ferry tickets.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="departure-port" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Departure Port
      </label>
      <input
        type="text"
        name="departure-port"
        id="departure-port"
        placeholder="From which port?"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />
    </div>
    <div>
      <label htmlFor="arrival-port" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Arrival Port
      </label>
      <input
        type="text"
        name="arrival-port"
        id="arrival-port"
        placeholder="To which port?"
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
        Return Date (Optional)
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
        <option value="group">Group (10+)</option>
      </select>
    </div>
    <div>
      <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Vehicle (Optional)
      </label>
      <select
        id="vehicle"
        name="vehicle"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="none">No Vehicle</option>
        <option value="car">Car</option>
        <option value="motorcycle">Motorcycle</option>
        <option value="bicycle">Bicycle</option>
        <option value="campervan">Campervan/RV</option>
        <option value="bus">Bus/Coach</option>
      </select>
    </div>
  </>
);

export default function FerryServicesPage() {
  return (
    <ServicePageTemplate
      title="Book Your Ferry Journey"
      description="Discover scenic ferry routes worldwide. Compare schedules and book tickets for your next sea journey with our trusted ferry partners."
      heroImage="https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2"
      features={features}
      searchLabel="Search Ferry Routes"
      searchPlaceholder="Enter departure or destination port"
      additionalFields={additionalFields}
      afterHeroContent={<FerryGrid />}
    />
  );
}
