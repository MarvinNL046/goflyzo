"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ServicePageSkeleton from "@/components/services/ServicePageSkeleton";
import HotelGrid from "@/components/services/HotelGrid";
import AffiliateWidget from "@/components/common/AffiliateWidget";

const TRIP_HOTELS_WIDGET = '<script async src="https://tpembd.com/content?trs=384595&shmarker=602467&lang=www&layout=S10391&powered_by=true&campaign_id=121&promo_id=4038" charset="utf-8"></script>';

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

export default function HotelsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ServicePageSkeleton />;
  }

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80"
            alt="Hotel hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Your Perfect Stay
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Compare prices from all major hotel booking sites. Get exclusive deals and save on your next stay.
          </p>
        </div>
      </div>

      {/* Trip.com Hotel Search Widget */}
      <div className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Search Hotels on Trip.com
          </h2>
          <AffiliateWidget
            scriptContent={TRIP_HOTELS_WIDGET}
            className="w-full min-h-[200px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
          />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-md shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <HotelGrid />
    </div>
  );
}
