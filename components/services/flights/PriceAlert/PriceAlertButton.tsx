"use client";

import { FC, useState } from 'react';
import PriceAlertModal from './PriceAlertModal';

interface PriceAlertButtonProps {
  flightId: string;
  currentPrice: number;
  route: {
    from: string;
    to: string;
  };
}

const PriceAlertButton: FC<PriceAlertButtonProps> = ({
  flightId,
  currentPrice,
  route,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasActiveAlert, setHasActiveAlert] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="relative group"
        aria-label="Set price alert"
      >
        <div className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <svg
            className={`w-5 h-5 ${
              hasActiveAlert ? 'text-yellow-500' : 'text-gray-400 group-hover:text-gray-600'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        {hasActiveAlert && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white" />
        )}
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {hasActiveAlert ? 'Price alert active' : 'Set price alert'}
        </div>
      </button>

      <PriceAlertModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        flightId={flightId}
        currentPrice={currentPrice}
        route={route}
        onSetAlert={(targetPrice) => {
          setHasActiveAlert(true);
          setIsModalOpen(false);
          // Here we would typically save the alert to localStorage or backend
          console.log('Alert set for price:', targetPrice);
        }}
      />
    </>
  );
};

export default PriceAlertButton;
