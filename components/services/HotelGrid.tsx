'use client';

import { FC, useState, useEffect } from 'react';
import HotelCard from './HotelCard';

interface HotelData {
  name: string;
  location: string;
  description: string;
  pricePerNight: number;
  rating: number;
  image: string;
  amenities: Array<{
    name: string;
    icon: JSX.Element;
  }>;
  affiliateLink?: string;
  badge?: string;
  stars: number;
}

// Common amenity icons
const amenityIcons = {
  wifi: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  ),
  parking: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  pool: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  breakfast: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>
  ),
  gym: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
};

// Sample hotel data
const sampleHotels = [
  {
    name: "Luxury Grand Hotel",
    location: "Amsterdam City Center",
    description: "Experience luxury in the heart of Amsterdam with stunning canal views and world-class amenities.",
    pricePerNight: 299,
    rating: 9.2,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    amenities: [
      { name: "Free WiFi", icon: amenityIcons.wifi },
      { name: "Parking", icon: amenityIcons.parking },
      { name: "Pool", icon: amenityIcons.pool },
      { name: "Breakfast", icon: amenityIcons.breakfast },
      { name: "Gym", icon: amenityIcons.gym },
    ],
    badge: "Free Cancellation",
    stars: 5,
    affiliateLink: "https://trip.tp.st/yeelXIdE",
  },
  {
    name: "Boutique Canal House",
    location: "Jordaan, Amsterdam",
    description: "Charming boutique hotel in a historic canal house with modern comforts and authentic Dutch style.",
    pricePerNight: 199,
    rating: 8.9,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    amenities: [
      { name: "Free WiFi", icon: amenityIcons.wifi },
      { name: "Breakfast", icon: amenityIcons.breakfast },
    ],
    badge: "Breakfast Included",
    stars: 4,
    affiliateLink: "https://trip.tp.st/yeelXIdE",
  },
  {
    name: "Modern City Suites",
    location: "Amsterdam South",
    description: "Contemporary suites perfect for business travelers and families seeking comfort and convenience.",
    pricePerNight: 159,
    rating: 8.7,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
    amenities: [
      { name: "Free WiFi", icon: amenityIcons.wifi },
      { name: "Parking", icon: amenityIcons.parking },
      { name: "Gym", icon: amenityIcons.gym },
    ],
    stars: 4,
    affiliateLink: "https://trip.tp.st/yeelXIdE",
  },
  {
    name: "Harbor View Hotel",
    location: "Amsterdam Harbor",
    description: "Stunning waterfront hotel with panoramic views of Amsterdam's historic harbor.",
    pricePerNight: 249,
    rating: 9.0,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    amenities: [
      { name: "Free WiFi", icon: amenityIcons.wifi },
      { name: "Parking", icon: amenityIcons.parking },
      { name: "Pool", icon: amenityIcons.pool },
      { name: "Gym", icon: amenityIcons.gym },
    ],
    badge: "Best View",
    stars: 5,
    affiliateLink: "https://trip.tp.st/yeelXIdE",
  },
];

interface CategorySection {
  title: string;
  description: string;
  hotels: HotelData[];
}

const HotelGrid: FC = () => {
  const [categories, setCategories] = useState<CategorySection[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Use sample data
    setCategories([
      {
        title: "Luxury Hotels",
        description: "Experience the finest 5-star hotels in Amsterdam",
        hotels: sampleHotels.filter(h => h.stars === 5),
      },
      {
        title: "Best Value",
        description: "High-quality hotels with excellent prices",
        hotels: sampleHotels.filter(h => h.stars === 4 && h.pricePerNight < 300),
      },
      {
        title: "Popular Choice",
        description: "Most booked hotels by our travelers",
        hotels: sampleHotels.filter(h => h.stars >= 3).slice(0, 6),
      },
    ]);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Loading Hotels...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {category.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {category.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.hotels.map((hotel, index) => (
                <HotelCard
                  key={index}
                  {...hotel}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelGrid;
