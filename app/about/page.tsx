import React from 'react';

export const metadata = {
  title: 'About Us | GoFlyzo',
  description: 'Learn about GoFlyzo, your one-stop travel solution for finding the best prices and most convenient travel services.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About GoFlyzo</h1>
        <p className="text-xl text-gray-600">
          Your one-stop destination for seamless travel planning and the best deals
        </p>
      </div>

      {/* Founder Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
        <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
          <p className="text-lg mb-4">
            Founded by Marvin in the Netherlands in 1988, GoFlyzo was born from a vision to revolutionize how people plan and book their travels. As an experienced traveler himself, Marvin understood the challenges of finding the best deals and coordinating various aspects of travel planning.
          </p>
          <p className="text-lg">
            This personal experience led to the creation of GoFlyzo - a platform that simplifies the travel planning process by bringing together all the essential services in one place.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-700">
              To be the most trusted and convenient one-stop platform for all travel-related needs, making travel planning effortless and enjoyable for everyone.
            </p>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-700">
              To provide travelers with the best prices, most convenient booking experience, and comprehensive travel solutions through our innovative platform.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Comprehensive Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✈️ Flight Bookings</li>
              <li>🏨 Hotel Reservations</li>
              <li>🚗 Car Rentals</li>
              <li>📱 Travel eSIMs</li>
              <li>🛡️ Travel Insurance</li>
              <li>🚢 Ferry Services</li>
              <li>🚕 Taxi Services</li>
              <li>🚂 Train Bookings</li>
            </ul>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Platform Benefits</h3>
            <ul className="space-y-2 text-gray-700">
              <li>💰 Best Price Comparisons</li>
              <li>🎯 User-Friendly Interface</li>
              <li>🔄 Integrated Services</li>
              <li>⚡ Quick Booking Process</li>
              <li>💪 Reliable Partners</li>
              <li>🔒 Secure Transactions</li>
              <li>📱 Mobile Responsive</li>
              <li>🌍 Global Coverage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Why Choose GoFlyzo</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Convenience</h3>
            <p className="text-gray-700">
              All your travel needs in one place. No more juggling between different websites and services.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
            <p className="text-gray-700">
              We partner with leading travel providers to ensure you get the most competitive prices for all services.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">User Experience</h3>
            <p className="text-gray-700">
              Our platform is designed with you in mind, making travel planning simple and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Our Commitment</h2>
        <p className="text-lg text-gray-700 mb-4">
          At GoFlyzo, we&apos;re committed to revolutionizing the way people plan and book their travels. We understand that every journey is unique, and we strive to provide personalized solutions that meet your specific needs.
        </p>
        <p className="text-lg text-gray-700">
          Our dedication to convenience, transparency, and customer satisfaction drives everything we do. We continuously work to improve our platform and expand our services to better serve your travel needs.
        </p>
      </section>
    </div>
  );
}
