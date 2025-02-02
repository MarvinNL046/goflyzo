import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";
import { getAffiliateData } from "../../../app/utils/affiliates";

export const metadata: Metadata = {
  title: "Buy eSIMs for Global Connectivity",
  description: "Stay connected worldwide with instant digital SIM activation. Get reliable mobile data coverage in 150+ countries with GoFlyzo eSIMs.",
  openGraph: {
    title: "Buy eSIMs for Global Connectivity | GoFlyzo",
    description: "Stay connected worldwide with instant digital SIM activation. Get reliable mobile data coverage in 150+ countries.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48",
        width: 1200,
        height: 630,
        alt: "Smartphone showing digital connectivity",
      },
    ],
  },
};

const features = [
  {
    title: "Instant Activation",
    description: "Get connected immediately with digital delivery and easy QR code activation.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Global Coverage",
    description: "Stay connected in over 150 countries with reliable local network partners.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Multiple Device Support",
    description: "Compatible with all eSIM-enabled devices including iPhone, iPad, and Android.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Destination Country
      </label>
      <select
        id="destination"
        name="destination"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">Select a country</option>
        <option value="US">United States</option>
        <option value="EU">Europe (All Countries)</option>
        <option value="UK">United Kingdom</option>
        <option value="JP">Japan</option>
        <option value="AU">Australia</option>
        <option value="GLOBAL">Global (150+ Countries)</option>
      </select>
    </div>
    <div>
      <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Duration
      </label>
      <select
        id="duration"
        name="duration"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="7">7 Days</option>
        <option value="14">14 Days</option>
        <option value="30">30 Days</option>
        <option value="90">90 Days</option>
        <option value="365">1 Year</option>
      </select>
    </div>
    <div>
      <label htmlFor="data" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Data Package
      </label>
      <select
        id="data"
        name="data"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="1">1GB</option>
        <option value="3">3GB</option>
        <option value="5">5GB</option>
        <option value="10">10GB</option>
        <option value="20">20GB</option>
        <option value="unlimited">Unlimited</option>
      </select>
    </div>
    <div>
      <label htmlFor="device" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Device Type
      </label>
      <select
        id="device"
        name="device"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="iphone">iPhone</option>
        <option value="ipad">iPad</option>
        <option value="android">Android Phone</option>
        <option value="other">Other eSIM Device</option>
      </select>
    </div>
  </>
);

export default function EsimsPage() {
  const airaloData = getAffiliateData('esims', 'airalo');

  return (
    <ServicePageTemplate
      title="Stay Connected Worldwide"
      description="Get instant mobile data access anywhere with our digital eSIM cards. No physical SIM needed - just scan, activate, and connect."
      heroImage="https://images.unsplash.com/photo-1523206489230-c012c64b2b48"
      features={features}
      searchLabel="Find eSIM Plans"
      searchPlaceholder="Search by country or region"
      additionalFields={additionalFields}
      affiliateLink={airaloData?.link}
      affiliateWidget={airaloData?.widget}
    />
  );
}
