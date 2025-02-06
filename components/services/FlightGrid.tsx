import { FC } from 'react';
import FlightCard from './FlightCard';

// Sample flight data
const sampleFlights = [
  {
    airline: {
      name: "KLM Royal Dutch",
      logo: "https://images.unsplash.com/photo-1542296332-2e4473faf563",
    },
    departure: {
      city: "Amsterdam",
      airport: "AMS",
      time: "08:45",
    },
    arrival: {
      city: "London",
      airport: "LHR",
      time: "09:35",
    },
    duration: "1h 50m",
    stops: 0,
    price: 129,
    baggage: {
      cabin: true,
      checked: true,
    },
    badge: "Best Price",
  },
  {
    airline: {
      name: "Lufthansa",
      logo: "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad",
    },
    departure: {
      city: "Amsterdam",
      airport: "AMS",
      time: "10:15",
    },
    arrival: {
      city: "Paris",
      airport: "CDG",
      time: "11:45",
    },
    duration: "1h 30m",
    stops: 0,
    price: 149,
    baggage: {
      cabin: true,
      checked: true,
    },
  },
  {
    airline: {
      name: "Air France",
      logo: "https://images.unsplash.com/photo-1490430657723-4d607c1503fc",
    },
    departure: {
      city: "Amsterdam",
      airport: "AMS",
      time: "14:20",
    },
    arrival: {
      city: "Barcelona",
      airport: "BCN",
      time: "16:35",
    },
    duration: "2h 15m",
    stops: 0,
    price: 179,
    baggage: {
      cabin: true,
      checked: false,
    },
    badge: "Direct Flight",
  },
  {
    airline: {
      name: "British Airways",
      logo: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96",
    },
    departure: {
      city: "Amsterdam",
      airport: "AMS",
      time: "07:30",
    },
    arrival: {
      city: "Rome",
      airport: "FCO",
      time: "11:15",
    },
    duration: "3h 45m",
    stops: 1,
    price: 199,
    baggage: {
      cabin: true,
      checked: true,
    },
  },
];

const FlightGrid: FC = () => {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Popular Flights from Amsterdam
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white">
              <option>Sort by Price</option>
              <option>Sort by Duration</option>
              <option>Sort by Departure</option>
            </select>
          </div>
        </div>
        <div className="space-y-8">
          {sampleFlights.map((flight, index) => (
            <FlightCard
              key={index}
              {...flight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightGrid;
