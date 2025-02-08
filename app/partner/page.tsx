import { Metadata } from 'next';
import PartnerForm from '@/components/partner/PartnerForm';

export const metadata: Metadata = {
  title: 'Become a Partner | GoFlyzo',
  description: 'Join our network of trusted travel partners and reach millions of travelers worldwide. Easy API integration, 24/7 support, and access to a global customer base.',
  openGraph: {
    title: 'Become a Partner | GoFlyzo',
    description: 'Join our network of trusted travel partners and reach millions of travelers worldwide.',
    url: 'https://goflyzo.com/partner',
    siteName: 'GoFlyzo',
    images: [
      {
        url: 'https://goflyzo.com/api/og?title=Become+a+Partner&subtitle=Join+Our+Travel+Network',
        width: 1200,
        height: 630,
        alt: 'GoFlyzo Partner Program',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-blue-600 dark:bg-blue-800">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Partner with GoFlyzo
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-blue-100">
            Join our network of trusted travel partners and reach millions of travelers worldwide.
            Get access to our global customer base and grow your business with our easy-to-use API integration.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Partner With Us?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Everything you need to grow your travel business
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Preview */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Easy Integration
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 lg:mx-auto">
              Our API is designed to be developer-friendly with comprehensive documentation and support.
            </p>
          </div>

          <div className="mt-10">
            <pre className="p-4 bg-gray-800 text-gray-100 rounded-lg overflow-x-auto">
              <code>{`
// Example API Integration
const goFlyzo = new GoFlyzo({
  apiKey: 'your_api_key',
  environment: 'production'
});

// List available services
const services = await goFlyzo.services.list();

// Create a booking
const booking = await goFlyzo.bookings.create({
  serviceId: 'hotel_123',
  checkIn: '2024-03-01',
  checkOut: '2024-03-05',
  guests: 2
});
              `}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
              Get Started
            </h2>
            <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <div className="mt-12">
              <PartnerForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    title: 'Global Reach',
    description: 'Access millions of travelers worldwide through our platform.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Easy Integration',
    description: 'Simple API integration with comprehensive documentation and support.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    description: 'Dedicated partner support team available around the clock.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Real-time Analytics',
    description: 'Detailed insights and analytics to track your performance.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Secure Platform',
    description: 'Enterprise-grade security and compliance standards.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Integration',
    description: 'Multiple integration options to suit your business needs.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
];
