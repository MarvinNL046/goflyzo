"use client";

import { FC } from 'react';
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
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (affiliateLink) {
      window.open(affiliateLink, '_blank');
    }
  };

  return (
    <form onSubmit={handleSearch} className="mt-12 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            {searchLabel}
          </label>
          <input
            type="text"
            name="search"
            id="search"
            placeholder={searchPlaceholder}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        {additionalFields}
      </div>
      <div className="mt-6">
        <CTAButton type="submit" fullWidth>
          Search
        </CTAButton>
      </div>
    </form>
  );
};

export default SearchForm;
