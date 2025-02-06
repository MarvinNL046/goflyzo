import { FC } from 'react';
import InsuranceCard from './InsuranceCard';

// Coverage icons
const coverageIcons = {
  medical: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  cancellation: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  baggage: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  emergency: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
};

// Sample insurance plans
const samplePlans = [
  {
    provider: {
      name: "World Nomads",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    },
    plan: {
      name: "Standard Coverage",
      description: "Comprehensive travel protection with essential medical and trip coverage for worry-free travel.",
    },
    coverages: [
      { name: "Medical Coverage", amount: "€1,000,000", icon: coverageIcons.medical },
      { name: "Trip Cancellation", amount: "€5,000", icon: coverageIcons.cancellation },
      { name: "Baggage Protection", amount: "€2,000", icon: coverageIcons.baggage },
      { name: "Emergency Evacuation", amount: "€500,000", icon: coverageIcons.emergency },
    ],
    price: {
      amount: 49,
      period: "month",
    },
    badge: "Most Popular",
  },
  {
    provider: {
      name: "Allianz Travel",
      logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    },
    plan: {
      name: "Premium Protection",
      description: "Maximum coverage for demanding travelers with extensive medical and trip benefits.",
    },
    coverages: [
      { name: "Medical Coverage", amount: "€2,000,000", icon: coverageIcons.medical },
      { name: "Trip Cancellation", amount: "€10,000", icon: coverageIcons.cancellation },
      { name: "Baggage Protection", amount: "€3,000", icon: coverageIcons.baggage },
      { name: "Emergency Evacuation", amount: "€1,000,000", icon: coverageIcons.emergency },
    ],
    price: {
      amount: 89,
      period: "month",
    },
    badge: "Best Coverage",
  },
  {
    provider: {
      name: "SafetyWing",
      logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174",
    },
    plan: {
      name: "Nomad Insurance",
      description: "Flexible coverage designed for digital nomads and long-term travelers.",
    },
    coverages: [
      { name: "Medical Coverage", amount: "€500,000", icon: coverageIcons.medical },
      { name: "Trip Cancellation", amount: "€3,000", icon: coverageIcons.cancellation },
      { name: "Baggage Protection", amount: "€1,500", icon: coverageIcons.baggage },
      { name: "Emergency Evacuation", amount: "€250,000", icon: coverageIcons.emergency },
    ],
    price: {
      amount: 42,
      period: "month",
    },
  },
  {
    provider: {
      name: "AXA Insurance",
      logo: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    },
    plan: {
      name: "Basic Protection",
      description: "Essential coverage for budget-conscious travelers with key medical benefits.",
    },
    coverages: [
      { name: "Medical Coverage", amount: "€250,000", icon: coverageIcons.medical },
      { name: "Trip Cancellation", amount: "€2,000", icon: coverageIcons.cancellation },
      { name: "Baggage Protection", amount: "€1,000", icon: coverageIcons.baggage },
      { name: "Emergency Evacuation", amount: "€100,000", icon: coverageIcons.emergency },
    ],
    price: {
      amount: 29,
      period: "month",
    },
    badge: "Best Value",
  },
];

const InsuranceGrid: FC = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Popular Insurance Plans
          </h2>
          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-gray-900 dark:text-white">
              <option>Sort by Price</option>
              <option>Sort by Coverage</option>
              <option>Sort by Provider</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {samplePlans.map((plan, index) => (
            <InsuranceCard
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceGrid;
