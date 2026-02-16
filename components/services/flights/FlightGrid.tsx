"use client";

import { FC, useState } from 'react';
import FlightCard from './FlightCard';

// Sample flight data
const sampleFlights = [
  {
    airline: {
      name: "Austrian Airlines",
      logo: "AS"
    },
    outbound: {
      departure: {
        time: "19:55",
        airport: "DUS",
        date: "17 feb.",
        terminal: "1"
      },
      arrival: {
        time: "15:30",
        airport: "BKK",
        date: "18 feb.",
        terminal: "1"
      },
      duration: "13u 35",
      stops: 1,
      stopLocation: "VIE",
      aircraft: "Boeing 777-200ER",
      meal: "Complimentary meals and drinks"
    },
    inbound: {
      departure: {
        time: "23:50",
        airport: "BKK",
        date: "11 mrt.",
        terminal: "1"
      },
      arrival: {
        time: "09:05",
        airport: "DUS",
        date: "12 mrt.",
        terminal: "2"
      },
      duration: "15u 15",
      stops: 1,
      stopLocation: "VIE",
      aircraft: "Boeing 777-200ER",
      meal: "Complimentary meals and drinks"
    },
    providers: [
      {
        name: "Gate1.nl",
        price: 1053,
        rating: 3,
        reviews: 1183,
        features: ["24/7 klantenservice"]
      },
      {
        name: "Gotogate",
        price: 1066,
        rating: 3,
        reviews: 3318,
        features: ["24/7 klantenservice"]
      },
      {
        name: "Mytrip",
        price: 1084,
        rating: 3,
        reviews: 2119,
        features: ["24/7 klantenservice"]
      },
      {
        name: "Trip.com",
        price: 1039,
        rating: 4,
        reviews: 5280,
        features: ["24/7 klantenservice", "Gratis annuleren"],
        url: "https://trip.tpo.lv/mG4HaNBx"
      }
    ]
  },
  {
    airline: {
      name: "Lufthansa",
      logo: "LH"
    },
    outbound: {
      departure: {
        time: "19:25",
        airport: "DUS",
        terminal: "2"
      },
      arrival: {
        time: "14:55",
        airport: "BKK",
        terminal: "1"
      },
      duration: "13u 30",
      stops: 1,
      stopLocation: "MUC",
      aircraft: "Airbus A350-900",
      meal: "Complimentary meals and drinks"
    },
    inbound: {
      departure: {
        time: "23:30",
        airport: "BKK",
        terminal: "1"
      },
      arrival: {
        time: "08:40",
        airport: "DUS",
        terminal: "2"
      },
      duration: "15u 10",
      stops: 1,
      stopLocation: "MUC",
      aircraft: "Airbus A350-900",
      meal: "Complimentary meals and drinks"
    },
    providers: [
      {
        name: "Booking.com",
        price: 1088,
        rating: 5,
        reviews: 4452,
        features: ["Nu kopen, later betalen"]
      },
      {
        name: "Trip.com",
        price: 1055,
        rating: 4,
        reviews: 5280,
        features: ["24/7 klantenservice", "Gratis annuleren"],
        url: "https://trip.tpo.lv/mG4HaNBx"
      }
    ]
  }
];

const FlightGrid: FC = () => {
  const [sortOption, setSortOption] = useState('recommended');
  const [flights, setFlights] = useState(sampleFlights);

  const handleSort = (option: string) => {
    setSortOption(option);
    const sortedFlights = [...flights];
    
    switch (option) {
      case 'price-low':
        sortedFlights.sort((a, b) => a.providers[0].price - b.providers[0].price);
        break;
      case 'price-high':
        sortedFlights.sort((a, b) => b.providers[0].price - a.providers[0].price);
        break;
      case 'duration':
        sortedFlights.sort((a, b) => {
          const durationA = parseInt(a.outbound.duration.split('u')[0]);
          const durationB = parseInt(b.outbound.duration.split('u')[0]);
          return durationA - durationB;
        });
        break;
      case 'departure':
        sortedFlights.sort((a, b) => {
          const timeA = parseInt(a.outbound.departure.time.replace(':', ''));
          const timeB = parseInt(b.outbound.departure.time.replace(':', ''));
          return timeA - timeB;
        });
        break;
      default:
        // Default sorting (recommended)
        setFlights(sampleFlights);
        return;
    }
    
    setFlights(sortedFlights);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </button>
          <span className="text-gray-600 dark:text-gray-300">784 resultaten</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 dark:text-gray-300">Sorteren op:</span>
          <select 
            className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-700 dark:text-gray-200"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="recommended">Aanbevolen</option>
            <option value="price-low">Prijs (laag naar hoog)</option>
            <option value="price-high">Prijs (hoog naar laag)</option>
            <option value="duration">Duur (kortst eerst)</option>
            <option value="departure">Vertrek (vroegst eerst)</option>
          </select>
        </div>
      </div>

      {/* Price Range */}
      <div className="flex justify-between items-center bg-[#111827] dark:bg-gray-900 text-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider mb-1 text-gray-300 dark:text-gray-400">Aanbevolen</div>
          <div className="text-3xl font-bold mb-1 text-white">€ 1053</div>
          <div className="text-sm text-gray-300 dark:text-gray-400">14u 25 (gemiddeld)</div>
        </div>
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider mb-1 text-gray-300 dark:text-gray-400">Goedkoopste</div>
          <div className="text-3xl font-bold mb-1 text-white">€ 696</div>
          <div className="text-sm text-gray-300 dark:text-gray-400">28u 23 (gemiddeld)</div>
        </div>
        <div className="text-center">
          <div className="text-sm uppercase tracking-wider mb-1 text-gray-300 dark:text-gray-400">Snelste</div>
          <div className="text-3xl font-bold mb-1 text-white">€ 2.036</div>
          <div className="text-sm text-gray-300 dark:text-gray-400">13u 48 (gemiddeld)</div>
        </div>
      </div>

      {/* Flight Cards */}
      <div className="space-y-6">
        {flights.map((flight, index) => (
          <FlightCard
            key={index}
            {...flight}
          />
        ))}
      </div>
    </div>
  );
};

export default FlightGrid;
