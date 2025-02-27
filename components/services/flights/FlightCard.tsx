"use client";

import { FC, useState } from 'react';
import ExpandedFlightInfo from './FlightDetails/ExpandedFlightInfo';
import PriceAlertButton from './PriceAlert/PriceAlertButton';

interface FlightCardProps {
  airline: {
    name: string;
    logo: string;
  };
  outbound: {
    departure: {
      time: string;
      airport: string;
      date?: string;
    };
    arrival: {
      time: string;
      airport: string;
      date?: string;
    };
    duration: string;
    stops: number;
    stopLocation?: string;
  };
  inbound: {
    departure: {
      time: string;
      airport: string;
      date?: string;
    };
    arrival: {
      time: string;
      airport: string;
      date?: string;
    };
    duration: string;
    stops: number;
    stopLocation?: string;
  };
  providers: Array<{
    name: string;
    price: number;
    rating?: number;
    reviews?: number;
    features?: string[];
  }>;
}

const FlightCard: FC<FlightCardProps> = ({
  airline,
  outbound,
  inbound,
  providers,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow">
      {/* Flight Details */}
      <div className="p-6 relative">
        <div className="absolute top-4 right-4">
          <PriceAlertButton
            flightId={`${airline.name}-${outbound.departure.airport}-${outbound.arrival.airport}`}
            currentPrice={providers[0].price}
            route={{
              from: outbound.departure.airport,
              to: outbound.arrival.airport
            }}
          />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold text-lg shadow-sm">
            {airline.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold dark:text-white">{outbound.departure.time}</span>
            <svg className="w-5 h-5 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-lg font-semibold dark:text-white">{outbound.arrival.time}</span>
          </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
            <div className="flex items-center text-base mt-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{outbound.departure.airport}</span>
              <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">{outbound.duration}</span>
              <span className="mx-2 text-gray-400 dark:text-gray-500">•</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">{outbound.arrival.airport}</span>
            </div>
            {outbound.stops > 0 && (
              <div className="text-sm text-gray-500 mt-1">
                {outbound.stops} tussenstop {outbound.stopLocation && `in ${outbound.stopLocation}`}
              </div>
            )}
          </div>
        </div>

        {/* Return Flight */}
        <div className="flex items-center gap-4 mt-6">
          <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg shadow-sm">
            {airline.logo}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold">{inbound.departure.time}</span>
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span className="text-lg font-semibold">{inbound.arrival.time}</span>
              </div>
            </div>
            <div className="flex items-center text-base mt-1">
              <span className="font-medium text-gray-700">{inbound.departure.airport}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="font-medium text-blue-600">{inbound.duration}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="font-medium text-gray-700">{inbound.arrival.airport}</span>
            </div>
            {inbound.stops > 0 && (
              <div className="text-sm text-gray-500 mt-1">
                {inbound.stops} tussenstop {inbound.stopLocation && `in ${inbound.stopLocation}`}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Provider Comparison */}
      <div className="border-t divide-y divide-gray-100">
        {providers.map((provider, index) => (
          <div key={index} className="p-6 flex items-center justify-between hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors">
            <div className="flex-1">
          <div className="text-lg font-semibold text-gray-800 dark:text-white">{provider.name}</div>
              {provider.rating && (
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < provider.rating! ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {provider.reviews && (
                    <span className="text-sm text-gray-500 ml-1">{provider.reviews}</span>
                  )}
                </div>
              )}
              {provider.features && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {provider.features.map((feature, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-xs text-gray-500"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">€{provider.price}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">per persoon</div>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md">
                Selecteren
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Flight Details */}
      <div className="border-t">
        <button
          className="w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 flex items-center justify-center gap-2"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? 'Hide details' : 'Show details'}</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isExpanded && (
          <>
            <ExpandedFlightInfo flight={outbound} />
            <div className="border-t" />
            <ExpandedFlightInfo flight={inbound} isReturn />
          </>
        )}
      </div>
    </div>
  );
};

export default FlightCard;
