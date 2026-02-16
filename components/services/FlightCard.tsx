import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';

export interface FlightCardProps {
  airline: {
    name: string;
    logo: string;
  };
  departure: {
    city: string;
    airport: string;
    time: string;
  };
  arrival: {
    city: string;
    airport: string;
    time: string;
  };
  duration: string;
  stops: number;
  price: number;
  baggage: {
    cabin: boolean;
    checked: boolean;
  };
  affiliateLink?: string;
  badge?: string;
}

const FlightCard: FC<FlightCardProps> = ({
  airline,
  departure,
  arrival,
  duration,
  stops,
  price,
  baggage,
  affiliateLink = 'https://trip.tpo.lv/mG4HaNBx',
  badge,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      {/* Airline Image */}
      <div className="relative h-40 w-full">
        <Image
          src={airline.logo}
          alt={airline.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <span className="font-medium text-white text-lg">
            {airline.name}
          </span>
          {badge && (
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {badge}
            </div>
          )}
        </div>
      </div>

      {/* Flight Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          {/* Departure */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {departure.time}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {departure.city}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {departure.airport}
            </div>
          </div>

          {/* Flight Path */}
          <div className="flex-1 mx-6">
            <div className="relative flex items-center justify-center">
              <div className="h-[2px] w-full bg-gray-300 dark:bg-gray-600"></div>
              <div className="absolute w-full flex items-center justify-center">
                <div className="bg-white dark:bg-gray-800 px-2 text-sm text-gray-500 dark:text-gray-400">
                  {duration}
                </div>
              </div>
            </div>
            <div className="text-center mt-1 text-xs text-gray-500 dark:text-gray-400">
              {stops === 0 ? 'Direct' : `${stops} stop${stops > 1 ? 's' : ''}`}
            </div>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {arrival.time}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {arrival.city}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {arrival.airport}
            </div>
          </div>
        </div>

        {/* Baggage and Price */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-4">
            {baggage.cabin && (
              <div className="flex items-center text-gray-600 dark:text-gray-400" title="Cabin Baggage">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-1 text-sm">Cabin</span>
              </div>
            )}
            {baggage.checked && (
              <div className="flex items-center text-gray-600 dark:text-gray-400" title="Checked Baggage">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="ml-1 text-sm">Checked</span>
              </div>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                €{price}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">per person</div>
            </div>
            <CTAButton href={affiliateLink} size="sm">
              View Deal
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
