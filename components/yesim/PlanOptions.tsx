import React from 'react';

export default function PlanOptions() {
  const plans = [
    {
      name: 'Trial Plan',
      data: '500 MB',
      duration: '3 days',
      price: '€0.50',
      features: [
        '50+ countries available',
        'Instant activation',
        'Free VPN included'
      ]
    },
    {
      name: 'Regional Plans',
      data: 'From 1GB',
      duration: 'Flexible duration',
      price: 'From €1.02',
      features: [
        'Coverage by region',
        'Multiple data options',
        'Extended validity'
      ]
    },
    {
      name: 'Global Plans',
      data: 'Unlimited options',
      duration: 'Pay as you go',
      price: 'Custom pricing',
      features: [
        '200+ destinations',
        'Virtual numbers available',
        'Business solutions'
      ]
    }
  ];

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Available Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {plan.name}
            </h3>
            <div className="mb-4">
              <p className="text-2xl font-bold text-orange-500">{plan.price}</p>
              <p className="text-gray-600 dark:text-gray-400">
                {plan.data} • {plan.duration}
              </p>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="h-5 w-5 text-orange-500 mr-2"
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
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
