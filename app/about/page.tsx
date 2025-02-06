import React from 'react';

export const metadata = {
  title: 'About Us | GoFlyzo',
  description: 'Learn about GoFlyzo, your one-stop travel solution for finding the best prices and most convenient travel services.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About GoFlyzo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your one-stop destination for seamless travel planning and the best deals
          </p>
        </div>

        {/* Founder Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Story</h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Founded by Marvin in the Netherlands in 1988, GoFlyzo was born from a vision to revolutionize how people plan and book their travels. As an experienced traveler himself, Marvin understood the challenges of finding the best deals and coordinating various aspects of travel planning.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              This personal experience led to the creation of GoFlyzo - a platform that simplifies the travel planning process by bringing together all the essential services in one place.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Mission</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the most trusted and convenient one-stop platform for all travel-related needs, making travel planning effortless and enjoyable for everyone.
              </p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide travelers with the best prices, most convenient booking experience, and comprehensive travel solutions through our innovative platform.
              </p>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">What We Offer</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Comprehensive Services</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">✈️ Flight Bookings</li>
                <li className="flex items-center">🏨 Hotel Reservations</li>
                <li className="flex items-center">🚗 Car Rentals</li>
                <li className="flex items-center">📱 Travel eSIMs</li>
                <li className="flex items-center">🛡️ Travel Insurance</li>
                <li className="flex items-center">🚢 Ferry Services</li>
                <li className="flex items-center">🚕 Taxi Services</li>
                <li className="flex items-center">🚂 Train Bookings</li>
              </ul>
            </div>
            <div className="border dark:border-gray-700 rounded-lg p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Platform Benefits</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-center">💰 Best Price Comparisons</li>
                <li className="flex items-center">🎯 User-Friendly Interface</li>
                <li className="flex items-center">🔄 Integrated Services</li>
                <li className="flex items-center">⚡ Quick Booking Process</li>
                <li className="flex items-center">💪 Reliable Partners</li>
                <li className="flex items-center">🔒 Secure Transactions</li>
                <li className="flex items-center">📱 Mobile Responsive</li>
                <li className="flex items-center">🌍 Global Coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Why Choose GoFlyzo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Convenience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                All your travel needs in one place. No more juggling between different websites and services.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Best Prices</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We partner with leading travel providers to ensure you get the most competitive prices for all services.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">User Experience</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our platform is designed with you in mind, making travel planning simple and enjoyable.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment Section */}
        <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Our Commitment</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            At GoFlyzo, we&apos;re committed to revolutionizing the way people plan and book their travels. We understand that every journey is unique, and we strive to provide personalized solutions that meet your specific needs.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our dedication to convenience, transparency, and customer satisfaction drives everything we do. We continuously work to improve our platform and expand our services to better serve your travel needs.
          </p>
        </section>
      </div>
    </div>
  );
}
