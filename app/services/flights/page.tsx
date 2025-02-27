import { Metadata } from "next";
import FlightSearchLayout from "../../../components/services/flights/FlightSearchLayout";
import FlightFilters from "../../../components/services/flights/FlightFilters";
import FlightGrid from "../../../components/services/flights/FlightGrid";
import FlightSidebar from "../../../components/services/flights/FlightSidebar";

export const metadata: Metadata = {
  title: "Book Flights Worldwide | GoFlyzo",
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

export default function FlightsPage() {
  return (
    <FlightSearchLayout
      filters={<FlightFilters />}
      mainContent={<FlightGrid />}
      sidebar={<FlightSidebar />}
    />
  );
}
