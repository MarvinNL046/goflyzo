"use client";

import { FC, useState } from 'react';

interface PriceAlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  flightId: string;
  currentPrice: number;
  route: {
    from: string;
    to: string;
  };
  onSetAlert: (targetPrice: number) => void;
}

const PriceAlertModal: FC<PriceAlertModalProps> = ({
  isOpen,
  onClose,
  currentPrice,
  route,
  onSetAlert,
}) => {
  const [targetPrice, setTargetPrice] = useState(Math.floor(currentPrice * 0.9));
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">Set Price Alert</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-4">
            <div className="text-sm text-gray-600">
              {route.from} → {route.to}
            </div>
            <div className="mt-2">
              <div className="text-sm font-medium text-gray-700">Current Price</div>
              <div className="text-2xl font-bold">€{currentPrice}</div>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Alert me when price drops below
            </label>
            <div className="mt-2 relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
              <input
                type="number"
                value={targetPrice}
                onChange={(e) => setTargetPrice(Number(e.target.value))}
                className="pl-8 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Recommended: €{Math.floor(currentPrice * 0.9)} (10% below current price)
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Email for notifications
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={() => onSetAlert(targetPrice)}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Set Alert
            </button>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            We&apos;ll email you when the price drops below your target price. You can manage your alerts in your account settings.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceAlertModal;
