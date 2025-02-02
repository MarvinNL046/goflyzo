import { FC } from 'react';
import Image from 'next/image';
import CTAButton from '../common/CTAButton';
import AffiliateWidget from '../common/AffiliateWidget';
import SearchForm from './SearchForm';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ServicePageTemplateProps {
  title: string;
  description: string;
  heroImage: string;
  features: Feature[];
  searchPlaceholder?: string;
  searchLabel?: string;
  additionalFields?: JSX.Element;
  affiliateLink?: string;
  affiliateWidget?: string;
}

const ServicePageTemplate: FC<ServicePageTemplateProps> = ({
  title,
  description,
  heroImage,
  features,
  searchPlaceholder = "Enter your search",
  searchLabel = "Search",
  additionalFields,
  affiliateLink,
  affiliateWidget,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gray-900/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            {description}
          </p>
          <div className="mt-10">
            <CTAButton href="#search" size="lg">
              Search Now
            </CTAButton>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Our Service
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Experience premium service with our exclusive features.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-xl"
              >
                <div className="inline-flex items-center justify-center p-2 bg-blue-600 rounded-xl text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div id="search" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {searchLabel}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Find the best options that match your needs.
            </p>
          </div>

          <SearchForm
            searchLabel={searchLabel}
            searchPlaceholder={searchPlaceholder}
            additionalFields={additionalFields}
            affiliateLink={affiliateLink}
          />

          {/* Affiliate Widget Section */}
          {affiliateWidget && (
            <div className="mt-12 max-w-3xl mx-auto">
              <AffiliateWidget 
                scriptContent={affiliateWidget}
                className="w-full min-h-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicePageTemplate;
