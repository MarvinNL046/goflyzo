import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

interface Coverage {
  name: string;
  amount: string;
  icon: JSX.Element;
}

interface InsuranceCardProps {
  provider: {
    name: string;
    logo: string;
  };
  plan: {
    name: string;
    description: string;
  };
  coverages: Coverage[];
  price: {
    amount: number;
    period: string;
  };
  affiliateLink?: string;
  badge?: string;
}

const InsuranceCard: FC<InsuranceCardProps> = ({
  provider,
  plan,
  coverages,
  price,
  affiliateLink = '#',
  badge,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Provider Image */}
      <div className="relative h-40 w-full">
        <Image
          src={provider.logo}
          alt={provider.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <div>
            <span className="font-medium text-white text-lg">
              {provider.name}
            </span>
            <div className="text-gray-200 text-sm mt-1">
              {plan.name}
            </div>
          </div>
          {badge && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>

      {/* Plan Details */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {plan.description}
        </p>

        {/* Coverage Details */}
        <div className="grid gap-4">
          {coverages.map((coverage, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-blue-600 dark:text-blue-400 flex-shrink-0">
                  {coverage.icon}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {coverage.name}
                </span>
              </div>
              <span className="font-medium text-gray-900 dark:text-white">
                {coverage.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t dark:border-gray-700">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              €{price.amount}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              per {price.period}
            </div>
          </div>
          <CTAButton href={affiliateLink} size="sm">
            View Plan
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default InsuranceCard;
