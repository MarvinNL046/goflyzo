import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

interface DataPlan {
  data: string;
  validity: string;
}

export interface ESIMCardProps {
  provider: {
    name: string;
    logo: string;
  };
  region: string;
  description: string;
  dataPlan: DataPlan;
  price: number;
  coverage: string[];
  affiliateLink?: string;
  badge?: string;
}

const ESIMCard: FC<ESIMCardProps> = ({
  provider,
  region,
  description,
  dataPlan,
  price,
  coverage,
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
              {region}
            </div>
          </div>
          {badge && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>

        {/* Data Plan */}
        <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="text-blue-600 dark:text-blue-400">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white">
                {dataPlan.data}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Valid for {dataPlan.validity}
              </div>
            </div>
          </div>
        </div>

        {/* Coverage */}
        <div className="flex flex-wrap gap-2">
          {coverage.map((country, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {country}
            </span>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t dark:border-gray-700">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              €{price}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              One-time payment
            </div>
          </div>
          <CTAButton href={affiliateLink} size="sm">
            Get eSIM
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default ESIMCard;
