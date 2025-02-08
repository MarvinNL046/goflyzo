import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

interface Feature {
  name: string;
  icon: JSX.Element;
  value: string;
}

export interface CarCardProps {
  vehicle: {
    name: string;
    type: string;
    image: string;
  };
  company: {
    name: string;
    logo: string;
  };
  features: Feature[];
  price: {
    amount: number;
    period: string;
  };
  location: string;
  affiliateLink?: string;
  badge?: string;
}

const CarCard: FC<CarCardProps> = ({
  vehicle,
  company,
  features,
  price,
  location,
  affiliateLink = '#',
  badge,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Vehicle Image */}
      <div className="relative h-48 w-full">
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <div>
            <div className="text-sm text-gray-300">
              {vehicle.type}
            </div>
            <h3 className="text-xl font-semibold text-white">
              {vehicle.name}
            </h3>
          </div>
          {badge && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>

      {/* Company Info */}
      <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {company.name}
          </span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {location}
        </div>
      </div>

      {/* Features */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="text-blue-600 dark:text-blue-400">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {feature.name}
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {feature.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              €{price.amount}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              per {price.period}
            </div>
          </div>
          <CTAButton href={affiliateLink} size="sm">
            Book Now
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
