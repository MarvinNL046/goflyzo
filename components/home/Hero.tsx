import { FC } from 'react';
import CTAButton from '../common/CTAButton';
import ImageCarousel from '../common/ImageCarousel';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    alt: "Mountain landscape with person standing on cliff edge"
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    alt: "Aerial view of beach and ocean"
  },
  {
    src: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5",
    alt: "City skyline with modern architecture"
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    alt: "Luxury hotel room with ocean view"
  },
  {
    src: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
    alt: "Ancient temple at sunset"
  }
];

const Hero: FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234B5563' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Your Ultimate Travel
              <span className="text-blue-600 dark:text-blue-400"> Companion</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Find the best deals on hotels, flights, eSIMs, and more. Let us help you plan your perfect journey with exclusive offers and trusted travel services.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <CTAButton href="/services/hotels" size="lg">
                Find Hotels
              </CTAButton>
              <CTAButton href="/services/flights" variant="outline" size="lg">
                Book Flights
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Best Price Guarantee
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>

          <div className="relative lg:ml-auto">
            <div className="relative w-full">
              <div className="relative">
                <ImageCarousel
                  images={heroImages}
                  width={600}
                  height={400}
                  interval={5000}
                  className="shadow-2xl"
                />
                {/* Floating elements */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 flex items-center space-x-4 z-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Quick Booking</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Book in under 2 minutes</p>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 z-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">$</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Save up to</p>
                      <p className="text-lg font-bold text-gray-900 dark:text-white">50% OFF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
