import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

interface Amenity {
  name: string;
  icon: JSX.Element;
}

interface FerryCardProps {
  route: {
    from: string;
    to: string;
    image: string;
  };
  operator: {
    name: string;
    logo: string;
  };
  schedule: {
    departure: string;
    arrival: string;
    duration: string;
  };
  amenities: Amenity[];
  price: {
    amount: number;
    currency: string;
  };
  affiliateLink?: string;
  badge?: string;
}

const FerryCard: FC<FerryCardProps> = ({
  route,
  operator,
  schedule,
  amenities,
  price,
  affiliateLink = '#',
  badge,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Route Image */}
      <div className="relative h-40 w-full">
        <Image
          src={route.image}
          alt={`${route.from} to ${route.to} ferry route`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
          <div>
            <div className="text-sm text-gray-300">
              {route.from} → {route.to}
            </div>
            <div className="text-lg font-semibold text-white">
              {schedule.duration}
            </div>
          </div>
          {badge && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>

      {/* Operator Info */}
      <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-8">
            <Image
              src={operator.logo}
              alt={operator.name}
              fill
              className="object-contain"
              sizes="32px"
            />
          </div>
          <span className="font-medium text-gray-900 dark:text-white">
            {operator.name}
          </span>
        </div>
      </div>

      {/* Schedule & Details */}
      <div className="p-6">
        {/* Schedule */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {schedule.departure}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Departure
            </div>
          </div>
          <div className="flex-1 mx-4 flex items-center justify-center">
            <div className="h-[2px] w-full bg-gray-300 dark:bg-gray-600"></div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {schedule.arrival}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Arrival
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-4 mb-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center text-gray-600 dark:text-gray-400"
              title={amenity.name}
            >
              <div className="w-5 h-5">
                {amenity.icon}
              </div>
              <span className="ml-2 text-sm">{amenity.name}</span>
            </div>
          ))}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {price.currency}{price.amount}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">per person</div>
          </div>
          <CTAButton href={affiliateLink} size="sm">
            View Schedule
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default FerryCard;
