"use client";

import { FC, useState } from 'react';
import CTAButton from '../common/CTAButton';

interface SearchFormProps {
  searchLabel: string;
  searchPlaceholder: string;
  additionalFields?: JSX.Element;
  affiliateLink?: string;
}

const SearchForm: FC<SearchFormProps> = ({
  searchLabel,
  searchPlaceholder,
  additionalFields,
  affiliateLink,
}) => {
  const [email, setEmail] = useState('');
  const [notifyMe, setNotifyMe] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (notifyMe && email) {
      // TODO: Implement email subscription logic
      // For now, just simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } else if (affiliateLink) {
      window.open(affiliateLink, '_blank');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-lg">
          <p className="text-green-800 dark:text-green-200 text-center">
            Thanks! We&apos;ll notify you when this service becomes available.
          </p>
        </div>
      )}

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              {searchLabel}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                placeholder={searchPlaceholder}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="text-gray-400 dark:text-gray-500 text-sm">Coming Soon</span>
              </div>
            </div>
          </div>
          {additionalFields}
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for updates"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="notify-me"
            name="notify-me"
            type="checkbox"
            checked={notifyMe}
            onChange={(e) => setNotifyMe(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="notify-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
            Notify me when this service becomes available
          </label>
        </div>

        <div>
          <CTAButton 
            type="submit" 
            fullWidth 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : (notifyMe ? 'Notify Me' : 'Search')}
          </CTAButton>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
