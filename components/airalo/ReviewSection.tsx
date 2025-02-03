import React from 'react';

const ReviewSection = () => (
  <div className="bg-white dark:bg-gray-900 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Airalo eSIM Review 2025
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The World&apos;s Leading eSIM Provider for Global Connectivity
        </p>
      </div>

      <div className="mt-16">
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <h3 className="text-2xl font-semibold mb-4">What is Airalo?</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Airalo has revolutionized international connectivity by creating the world&apos;s first and largest eSIM marketplace. 
            With coverage in over 200 countries and regions, they&apos;ve eliminated the hassle of purchasing physical SIM cards 
            while traveling. Their service allows you to instantly connect to local networks through a digital SIM card, 
            saving both time and money.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Unmatched Coverage",
              description: "Access reliable networks in 200+ countries with 5G support where available",
            },
            {
              title: "Budget-Friendly",
              description: "Plans starting from just $4.50, with flexible options for every travel need",
            },
            {
              title: "Instant Setup",
              description: "Get connected immediately with digital delivery and easy QR code activation",
            },
            {
              title: "Flexible Plans",
              description: "Choose between data-only or complete packages with calls and SMS",
            },
            {
              title: "Latest Technology",
              description: "Stay connected with 5G-ready networks where available",
            },
            {
              title: "User-Friendly",
              description: "Quick installation through their intuitive mobile app",
            },
          ].map((advantage, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {advantage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ReviewSection;
