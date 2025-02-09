import { getAffiliate } from '@/lib/affiliates';

const plans = [
  {
    name: 'Regional',
    description: 'Perfect for traveling within a specific region',
    features: [
      'Coverage in multiple countries within a region',
      'Flexible data allowances',
      'Valid for up to 30 days',
      'Instant activation',
    ],
  },
  {
    name: 'Global',
    description: 'Ideal for worldwide travelers',
    features: [
      'Coverage in 190+ countries',
      'Multiple data packages',
      'Valid for up to 30 days',
      'Instant activation',
    ],
  },
  {
    name: 'Local',
    description: 'Best for single country visits',
    features: [
      'Country-specific coverage',
      'Various data options',
      'Valid for up to 30 days',
      'Instant activation',
    ],
  },
];

export default function PlanOptions() {
  const airalo = getAffiliate('airalo');

  if (!airalo) {
    return null;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Choose Your Plan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              {plan.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {plan.description}
            </p>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-gray-600 dark:text-gray-300"
                >
                  <svg
                    className="h-6 w-6 text-green-500 mr-2"
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
            <a
              href={airalo.links?.mainPage || airalo.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 rounded-lg font-semibold transition-colors"
              style={{
                backgroundColor: airalo.primaryColor,
                color: airalo.textColor,
              }}
            >
              View Plans
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
