'use client';

import { useState } from 'react';
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  MapIcon,
  BuildingLibraryIcon,
  UserGroupIcon,
  TruckIcon,
  CalendarIcon,
  InformationCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  BookOpenIcon,
  BeakerIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

interface AIContent {
  description: string;
  historicalContext: string;
  regions: {
    name: string;
    description: string;
  }[];
  culturalHighlights: string[];
  localCustoms: string[];
  cuisine: {
    overview: string;
    mustTry: string[];
  };
  transportation: {
    overview: string;
    tips: string[];
  };
  practicalInfo: {
    currency: string;
    languages: string[];
    electricity: string;
    timezone: string;
  };
  bestTimeToVisit: {
    overview: string;
    seasonalInfo: {
      season: string;
      description: string;
    }[];
  };
  safetyInfo: {
    overview: string;
    tips: string[];
    emergencyNumbers: string;
  };
  travelTips: string[];
  sources: string[];
  methodology: string;
}

interface AIContentProps {
  country: string;
  content: AIContent;
  lastUpdated: string;
}

interface CollapsibleSectionProps {
  title: string;
  icon: React.ComponentType<React.ComponentProps<'svg'>>;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, icon: Icon, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center space-x-3">
          <Icon className="h-6 w-6 text-blue-500" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}

export default function AIContent({ country, content, lastUpdated }: AIContentProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6">
      {/* AI Disclosure */}
      <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-8">
        <div className="flex items-center justify-center space-x-2 text-sm text-blue-700 dark:text-blue-300">
          <BeakerIcon className="h-5 w-5" />
          <span>
            This content was generated with AI assistance and is regularly updated for accuracy.
            Last updated: {formattedDate}
          </span>
        </div>
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-8">
        <h2 className="text-lg font-semibold mb-3 flex items-center">
          <BookOpenIcon className="h-5 w-5 mr-2" />
          Quick Navigation
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          {[
            "Overview",
            "Historical Context",
            "Regions",
            "Cultural Highlights",
            "Local Customs",
            "Cuisine",
            "Transportation",
            "Practical Info",
            "Best Time to Visit",
            "Safety Information",
            "Travel Tips",
            "Sources & Methodology"
          ].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <div className="space-y-6">
        <CollapsibleSection title={`About ${country}`} icon={GlobeAltIcon} defaultOpen={true}>
          <div className="prose dark:prose-invert max-w-none">
            <p className="whitespace-pre-line">{content.description}</p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Historical Context" icon={BuildingLibraryIcon}>
          <div className="prose dark:prose-invert max-w-none">
            <p className="whitespace-pre-line">{content.historicalContext}</p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Regions to Explore" icon={MapIcon}>
          <div className="space-y-4">
            {content.regions.map((region, index) => (
              <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                <h3 className="font-semibold text-lg mb-2">{region.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{region.description}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Cultural Highlights" icon={UserGroupIcon}>
          <ul className="space-y-3">
            {content.culturalHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-6 text-blue-500">•</span>
                <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Local Customs" icon={UserGroupIcon}>
          <ul className="space-y-3">
            {content.localCustoms.map((custom, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-6 text-blue-500">•</span>
                <span className="text-gray-600 dark:text-gray-300">{custom}</span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Local Cuisine" icon={UserGroupIcon}>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{content.cuisine.overview}</p>
            <h3 className="font-semibold text-lg">Must-Try Dishes</h3>
            <ul className="space-y-2">
              {content.cuisine.mustTry.map((dish, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 text-blue-500">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{dish}</span>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Transportation" icon={TruckIcon}>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{content.transportation.overview}</p>
            <h3 className="font-semibold text-lg">Transportation Tips</h3>
            <ul className="space-y-2">
              {content.transportation.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 text-blue-500">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Practical Information" icon={InformationCircleIcon}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Currency</h3>
              <p className="text-gray-600 dark:text-gray-300">{content.practicalInfo.currency}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Languages</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {content.practicalInfo.languages.map((lang, index) => (
                  <li key={index}>{lang}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Electricity</h3>
              <p className="text-gray-600 dark:text-gray-300">{content.practicalInfo.electricity}</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Timezone</h3>
              <p className="text-gray-600 dark:text-gray-300">{content.practicalInfo.timezone}</p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Best Time to Visit" icon={CalendarIcon}>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{content.bestTimeToVisit.overview}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.bestTimeToVisit.seasonalInfo.map((season, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">{season.season}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{season.description}</p>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Safety Information" icon={ShieldCheckIcon}>
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{content.safetyInfo.overview}</p>
            <h3 className="font-semibold text-lg">Safety Tips</h3>
            <ul className="space-y-2">
              {content.safetyInfo.tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-6 text-blue-500">•</span>
                  <span className="text-gray-600 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
              <h3 className="font-semibold text-red-700 dark:text-red-300 mb-2">Emergency Numbers</h3>
              <p className="text-red-600 dark:text-red-300">{content.safetyInfo.emergencyNumbers}</p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Travel Tips" icon={InformationCircleIcon}>
          <ul className="space-y-3">
            {content.travelTips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-6 text-blue-500">•</span>
                <span className="text-gray-600 dark:text-gray-300">{tip}</span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Sources & Methodology" icon={DocumentTextIcon}>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Sources</h3>
              <ul className="list-disc pl-5 space-y-1">
                {content.sources.map((source, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-300">{source}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Content Methodology</h3>
              <p className="text-gray-600 dark:text-gray-300">{content.methodology}</p>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
