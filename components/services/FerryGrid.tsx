import { FC } from 'react';
import FerryCard from './FerryCard';

// Amenity icons
const amenityIcons = {
  restaurant: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v18H3V3z M16 3v7a4 4 0 01-4 4v0a4 4 0 01-4-4V3" />
    </svg>
  ),
  wifi: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  lounge: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
  carDeck: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
  ),
};

// Sample ferry routes
const sampleRoutes = [
  {
    route: {
      from: "Amsterdam",
      to: "Newcastle",
      image: "https://images.unsplash.com/photo-1469434226186-0669e47cc08b",
    },
    operator: {
      name: "DFDS Seaways",
      logo: "https://images.unsplash.com/photo-1559762717-99c81ac85459",
    },
    schedule: {
      departure: "17:30",
      arrival: "09:30",
      duration: "16h",
    },
    amenities: [
      { name: "Restaurant", icon: amenityIcons.restaurant },
      { name: "WiFi", icon: amenityIcons.wifi },
      { name: "Lounge", icon: amenityIcons.lounge },
      { name: "Car Deck", icon: amenityIcons.carDeck },
    ],
    price: {
      amount: 89,
      currency: "€",
    },
    badge: "Popular Route",
  },
  {
    route: {
      from: "Amsterdam",
      to: "Hamburg",
      image: "https://images.unsplash.com/photo-1445452916036-9022dfd33aa8",
    },
    operator: {
      name: "Stena Line",
      logo: "https://images.unsplash.com/photo-1566375638485-16677c72e746",
    },
    schedule: {
      departure: "09:00",
      arrival: "18:30",
      duration: "9h 30m",
    },
    amenities: [
      { name: "Restaurant", icon: amenityIcons.restaurant },
      { name: "WiFi", icon: amenityIcons.wifi },
      { name: "Car Deck", icon: amenityIcons.carDeck },
    ],
    price: {
      amount: 69,
      currency: "€",
    },
  },
  {
    route: {
      from: "Amsterdam",
      to: "Copenhagen",
      image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc",
    },
    operator: {
      name: "Color Line",
      logo: "https://images.unsplash.com/photo-1565538420870-da08ff96a207",
    },
    schedule: {
      departure: "15:00",
      arrival: "08:00",
      duration: "17h",
    },
    amenities: [
      { name: "Restaurant", icon: amenityIcons.restaurant },
      { name: "WiFi", icon: amenityIcons.wifi },
      { name: "Lounge", icon: amenityIcons.lounge },
      { name: "Car Deck", icon: amenityIcons.carDeck },
    ],
    price: {
      amount: 99,
      currency: "€",
    },
    badge: "Best Value",
  },
  {
    route: {
      from: "Amsterdam",
      to: "Oslo",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
    },
    operator: {
      name: "Fjord Line",
      logo: "https://images.unsplash.com/photo-1566375638445-7425f4175216",
    },
    schedule: {
      departure: "16:00",
      arrival: "10:00",
      duration: "18h",
    },
    amenities: [
      { name: "Restaurant", icon: amenityIcons.restaurant },
      { name: "WiFi", icon: amenityIcons.wifi },
      { name: "Lounge", icon: amenityIcons.lounge },
      { name: "Car Deck", icon: amenityIcons.carDeck },
    ],
    price: {
      amount: 119,
      currency: "€",
    },
    badge: "Scenic Route",
  },
];

const FerryGrid: FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Popular Ferry Routes
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white">
              <option>Sort by Departure</option>
              <option>Sort by Duration</option>
              <option>Sort by Price</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sampleRoutes.map((route, index) => (
            <FerryCard
              key={index}
              {...route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FerryGrid;
