import { FC } from 'react';
import CarCard from './CarCard';

// Feature icons
const featureIcons = {
  transmission: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  ),
  seats: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  luggage: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  ac: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

// Sample car rentals
const sampleCars = [
  {
    vehicle: {
      name: "Volkswagen Golf",
      type: "Compact",
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
    },
    company: {
      name: "Hertz",
      logo: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f",
    },
    features: [
      { name: "Transmission", value: "Automatic", icon: featureIcons.transmission },
      { name: "Seats", value: "5 People", icon: featureIcons.seats },
      { name: "Luggage", value: "2 Bags", icon: featureIcons.luggage },
      { name: "Air Conditioning", value: "Yes", icon: featureIcons.ac },
    ],
    price: {
      amount: 45,
      period: "day",
    },
    location: "Amsterdam Airport",
    badge: "Best Seller",
  },
  {
    vehicle: {
      name: "BMW 3 Series",
      type: "Premium",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
    },
    company: {
      name: "Avis",
      logo: "https://images.unsplash.com/photo-1549925245-f20a7c0f9945",
    },
    features: [
      { name: "Transmission", value: "Automatic", icon: featureIcons.transmission },
      { name: "Seats", value: "5 People", icon: featureIcons.seats },
      { name: "Luggage", value: "3 Bags", icon: featureIcons.luggage },
      { name: "Air Conditioning", value: "Yes", icon: featureIcons.ac },
    ],
    price: {
      amount: 75,
      period: "day",
    },
    location: "Amsterdam Central",
    badge: "Premium",
  },
  {
    vehicle: {
      name: "Toyota Camry",
      type: "Standard",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
    },
    company: {
      name: "Enterprise",
      logo: "https://images.unsplash.com/photo-1551522435-a13afa10f103",
    },
    features: [
      { name: "Transmission", value: "Automatic", icon: featureIcons.transmission },
      { name: "Seats", value: "5 People", icon: featureIcons.seats },
      { name: "Luggage", value: "3 Bags", icon: featureIcons.luggage },
      { name: "Air Conditioning", value: "Yes", icon: featureIcons.ac },
    ],
    price: {
      amount: 55,
      period: "day",
    },
    location: "Amsterdam South",
  },
  {
    vehicle: {
      name: "Mercedes-Benz Vito",
      type: "Van",
      image: "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de",
    },
    company: {
      name: "Sixt",
      logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    },
    features: [
      { name: "Transmission", value: "Automatic", icon: featureIcons.transmission },
      { name: "Seats", value: "8 People", icon: featureIcons.seats },
      { name: "Luggage", value: "4 Bags", icon: featureIcons.luggage },
      { name: "Air Conditioning", value: "Yes", icon: featureIcons.ac },
    ],
    price: {
      amount: 95,
      period: "day",
    },
    location: "Amsterdam Airport",
    badge: "Group Travel",
  },
];

const CarGrid: FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Available Vehicles
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white">
              <option>Sort by Price</option>
              <option>Sort by Size</option>
              <option>Sort by Type</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {sampleCars.map((car, index) => (
            <CarCard
              key={index}
              {...car}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarGrid;
