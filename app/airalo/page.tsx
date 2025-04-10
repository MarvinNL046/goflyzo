import { getAffiliate } from '@/lib/affiliates';
import PlanOptions from '@/components/airalo/PlanOptions';
import ReviewSection from '@/components/airalo/ReviewSection';
import Image from 'next/image';

export const metadata = {
  title: 'Airalo eSIM | GoFlyzo',
  description: 'Get instant mobile data access worldwide with Airalo eSIM. Easy setup, affordable rates, and coverage in 190+ countries.',
};

export default function AiraloPage() {
  const airalo = getAffiliate('airalo');

  if (!airalo) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="relative h-16 w-48 mx-auto mb-8">
          <Image
            src={airalo.logo}
            alt="Airalo Logo"
            fill
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Travel Smarter with Airalo eSIM
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {airalo.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {airalo.features.map((feature, index) => (
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
          Why Choose Airalo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {airalo.benefits.map((benefit, index) => (
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
          href={airalo.links?.mainPage || airalo.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          style={{
            backgroundColor: airalo.primaryColor,
            color: airalo.textColor,
          }}
        >
          {airalo.cta.text}
        </a>
      </div>

      {/* Download App Section */}
      <div className="text-center mt-12 space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Download the Airalo App
        </h3>
        <div className="flex justify-center">
          <a
            href={airalo.links?.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/app-store.svg"
              alt="Download on App Store"
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
