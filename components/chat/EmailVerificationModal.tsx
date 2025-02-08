"use client";

import { useState } from 'react';
import { useChat } from '@/app/context/ChatContext';

export default function EmailVerificationModal() {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const { verifyEmail, confirmVerification, error, isLoading } = useChat();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyEmail(email);
      setShowCodeInput(true);
    } catch (error) {
      console.error('Error sending verification email:', error);
    }
  };

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await confirmVerification(verificationCode);
    } catch (error) {
      console.error('Error confirming verification:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[10000]">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          {showCodeInput ? 'Enter Verification Code' : 'Verify Your Email'}
        </h2>
        
        {error && (
          <div className="mb-4 p-2 bg-red-50 dark:bg-red-900 rounded text-red-800 dark:text-red-200 text-sm">
            {error}
          </div>
        )}

        {!showCodeInput ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !email}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Sending...' : 'Send Verification Code'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                id="code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !verificationCode}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Verifying...' : 'Verify Code'}
            </button>
            <button
              type="button"
              onClick={() => setShowCodeInput(false)}
              className="w-full mt-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            >
              Back to Email Input
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
