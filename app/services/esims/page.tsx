import { getAffiliate } from '@/lib/affiliates';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'eSIM Services | GoFlyzo',
  description: 'Get instant mobile data access worldwide with eSIM technology. Easy setup, affordable rates, and coverage in 190+ countries.',
};

export default function EsimsPage() {
  const airalo = getAffiliate('airalo');

  if (!airalo) {
    return null;
  }

  const features = [
    'Instant digital delivery',
    'No physical SIM card needed',
    'Coverage in 190+ countries',
    'Flexible data plans',
    'Easy QR code activation',
    'Multiple device support',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Travel with eSIM Technology
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Stay connected anywhere in the world with instant mobile data access. No physical SIM card required.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-gray-600 dark:text-gray-300">{feature}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Provider Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Recommended Provider
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {airalo.description}
            </p>
            <Link
              href="/airalo"
              className="inline-block px-8 py-4 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: airalo.primaryColor,
                color: airalo.textColor,
              }}
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-16 w-48">
            <Image
              src={airalo.logo}
              alt="Airalo Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Why Choose eSIM?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {airalo.benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
