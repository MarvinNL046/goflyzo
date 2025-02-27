"use client";

import { FC } from 'react';

interface ExpandedFlightInfoProps {
  flight: {
    departure: {
      time: string;
      airport: string;
      terminal?: string;
      date?: string;
    };
    arrival: {
      time: string;
      airport: string;
      terminal?: string;
      date?: string;
    };
    duration: string;
    aircraft?: string;
    meal?: string;
    stops: number;
    stopLocation?: string;
  };
  isReturn?: boolean;
}

const ExpandedFlightInfo: FC<ExpandedFlightInfoProps> = ({
  flight,
  isReturn = false,
}) => {
  return (
    <div className="p-4 bg-gray-50">
      {/* Flight Timeline */}
      <div className="relative pb-8">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
        
        {/* Departure */}
        <div className="relative flex items-center mb-8">
          <div className="absolute left-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
          <div className="ml-12">
            <div className="flex items-center">
              <span className="text-xl font-semibold">{flight.departure.time}</span>
              <span className="ml-2 text-sm text-gray-500">{flight.departure.date}</span>
            </div>
            <div className="text-lg">{flight.departure.airport}</div>
            {flight.departure.terminal && (
              <div className="text-sm text-gray-500">Terminal {flight.departure.terminal}</div>
            )}
          </div>
        </div>

        {/* Flight Duration & Info */}
        <div className="relative ml-12 mb-8">
          <div className="flex items-center text-gray-500">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{flight.duration}</span>
          </div>
          {flight.aircraft && (
            <div className="flex items-center text-gray-500 mt-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{flight.aircraft}</span>
            </div>
          )}
          {flight.meal && (
            <div className="flex items-center text-gray-500 mt-2">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>{flight.meal}</span>
            </div>
          )}
        </div>

        {/* Layover Information */}
        {flight.stops > 0 && flight.stopLocation && (
          <div className="relative mb-8">
            <div className="absolute left-0 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-12">
              <div className="text-lg font-medium">Layover in {flight.stopLocation}</div>
              <div className="text-sm text-gray-500">Connection time: 2h 35m</div>
              <div className="mt-2 p-3 bg-yellow-50 rounded-lg">
                <div className="text-sm font-medium text-yellow-800">Terminal Transfer Required</div>
                <div className="text-sm text-yellow-600">Allow at least 30 minutes for security check</div>
              </div>
            </div>
          </div>
        )}

        {/* Arrival */}
        <div className="relative flex items-center">
          <div className="absolute left-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="ml-12">
            <div className="flex items-center">
              <span className="text-xl font-semibold">{flight.arrival.time}</span>
              <span className="ml-2 text-sm text-gray-500">{flight.arrival.date}</span>
            </div>
            <div className="text-lg">{flight.arrival.airport}</div>
            {flight.arrival.terminal && (
              <div className="text-sm text-gray-500">Terminal {flight.arrival.terminal}</div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
        <h4 className="font-medium mb-2">Flight Information</h4>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Flight Type</span>
            <span>{isReturn ? 'Return Flight' : 'Outbound Flight'}</span>
          </div>
          <div className="flex justify-between">
            <span>Aircraft</span>
            <span>{flight.aircraft || 'Information not available'}</span>
          </div>
          <div className="flex justify-between">
            <span>Meal Service</span>
            <span>{flight.meal || 'Not included'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedFlightInfo;
