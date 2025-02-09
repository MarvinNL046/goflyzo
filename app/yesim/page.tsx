import React from 'react';
import { getAffiliate } from '@/lib/affiliates';
import { Metadata } from 'next';
import PlanOptions from '@/components/yesim/PlanOptions';
import ReviewSection from '@/components/yesim/ReviewSection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'YeSim eSIM | GoFlyzo',
  description: 'Get instant mobile data access worldwide with YeSim eSIM. Coverage in 200+ destinations, virtual phone numbers, and free VPN included.',
  openGraph: {
    title: 'YeSim eSIM | GoFlyzo',
    description: 'Get instant mobile data access worldwide with YeSim eSIM. Coverage in 200+ destinations, virtual phone numbers, and free VPN included.',
    type: 'website',
  },
  other: {
    'google-site-verification': process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function YeSimPage() {
  const yesim = getAffiliate('yesim');

  if (!yesim) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative h-16 w-48 mx-auto mb-8">
          <Image
            src={yesim.logo}
            alt="YeSim Logo"
            fill
            sizes="(max-width: 768px) 100vw, 192px"
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Travel Smarter with YeSim eSIM
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {yesim.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {yesim.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <p className="text-gray-600 dark:text-gray-300">{feature}</p>
          </div>
        ))}
      </div>

      {/* Plan Options */}
      <PlanOptions />

      {/* Benefits Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Why Choose YeSim?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {yesim.benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection />

      {/* CTA Section */}
      <div className="text-center mt-16">
        <a
          href={yesim.links?.mainPage || yesim.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-colors"
          style={{
            backgroundColor: yesim.primaryColor,
            color: yesim.textColor,
          }}
        >
          {yesim.cta.text}
        </a>
      </div>

      {/* Download App Section */}
      <div className="text-center mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Download the YeSim App
        </h3>
        <div className="flex justify-center space-x-4">
          <a
            href={yesim.links?.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/appStoreLogos/appstore_apple.webp"
              alt="Download on App Store"
              width={140}
              height={42}
              className="w-[140px] h-[42px]"
            />
          </a>
          <a
            href={yesim.links?.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/appStoreLogos/google_play.webp"
              alt="Get it on Google Play"
              width={140}
              height={42}
              className="w-[140px] h-[42px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
