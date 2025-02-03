import React from 'react';
import { getAffiliateData } from '../../app/utils/affiliates';
import AffiliateWidget from '../common/AffiliateWidget';

const PlanOptions = () => {
  const airaloData = getAffiliateData('esims', 'airalo');

  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Comprehensive Plan Options
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find the perfect eSIM package for your travel needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {[
            {
              type: "Local eSIMs",
              description: "Perfect for single-country trips",
              features: [
                "Connects to local networks",
                "Best rates for single country",
                "Data packages from 1GB to Unlimited",
                "Optional calls & SMS",
                "Starting at $4.50"
              ]
            },
            {
              type: "Regional eSIMs",
              description: "Ideal for multi-country travel",
              features: [
                "Coverage across entire regions",
                "Perfect for road trips",
                "Seamless cross-border usage",
                "Multiple network support",
                "Starting at $15"
              ]
            },
            {
              type: "Global eSIMs",
              description: "Best for worldwide travelers",
              features: [
                "200+ countries coverage",
                "Single eSIM worldwide",
                "5G where available",
                "Flexible data options",
                "Starting at $25"
              ]
            }
          ].map((plan, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {plan.type}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {plan.description}
                </p>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="h-5 w-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
              Find Your Perfect Plan
            </h3>
            {airaloData?.widget && (
              <AffiliateWidget
                scriptContent={airaloData.widget}
                className="w-full min-h-[300px] bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanOptions;
