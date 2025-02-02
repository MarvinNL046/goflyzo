import { Metadata } from "next";
import ServicePageTemplate from "../../../components/services/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Travel Products - Essential Travel Gear",
  description: "Find the best travel gear and accessories. Compare prices on luggage, travel gadgets, comfort items, and more from trusted brands.",
  openGraph: {
    title: "Travel Products - Essential Travel Gear | GoFlyzo",
    description: "Find the best travel gear and accessories. Compare prices on luggage, travel gadgets, comfort items, and more from trusted brands.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553531384-cc64ac80f931",
        width: 1200,
        height: 630,
        alt: "Travel essentials and luggage",
      },
    ],
  },
};

const features = [
  {
    title: "Verified Reviews",
    description: "Real reviews from verified travelers help you make informed decisions.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Price Comparison",
    description: "Compare prices across multiple retailers to find the best deals.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Quality Guarantee",
    description: "Curated selection of high-quality products from trusted brands.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const additionalFields = (
  <>
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Product Category
      </label>
      <select
        id="category"
        name="category"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">All Categories</option>
        <option value="luggage">Luggage & Bags</option>
        <option value="electronics">Travel Electronics</option>
        <option value="accessories">Travel Accessories</option>
        <option value="comfort">Comfort Items</option>
        <option value="organization">Packing & Organization</option>
        <option value="safety">Safety & Security</option>
      </select>
    </div>
    <div>
      <label htmlFor="brand" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Brand
      </label>
      <select
        id="brand"
        name="brand"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">All Brands</option>
        <option value="samsonite">Samsonite</option>
        <option value="rimowa">Rimowa</option>
        <option value="tumi">Tumi</option>
        <option value="away">Away</option>
        <option value="osprey">Osprey</option>
        <option value="eagle-creek">Eagle Creek</option>
      </select>
    </div>
    <div>
      <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Price Range
      </label>
      <select
        id="price-range"
        name="price-range"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">Any Price</option>
        <option value="budget">Budget (Under $50)</option>
        <option value="mid">Mid-Range ($50-$200)</option>
        <option value="premium">Premium ($200-$500)</option>
        <option value="luxury">Luxury ($500+)</option>
      </select>
    </div>
    <div>
      <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Minimum Rating
      </label>
      <select
        id="rating"
        name="rating"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">Any Rating</option>
        <option value="4.5">4.5+ Stars</option>
        <option value="4">4+ Stars</option>
        <option value="3.5">3.5+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>
    </div>
    <div>
      <label htmlFor="sort" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Sort By
      </label>
      <select
        id="sort"
        name="sort"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="popular">Most Popular</option>
        <option value="rating">Highest Rated</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="newest">Newest Arrivals</option>
      </select>
    </div>
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        Features
      </label>
      <div className="mt-2 space-y-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="features"
            value="free-shipping"
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">Free Shipping</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            name="features"
            value="on-sale"
            className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">On Sale</span>
        </label>
      </div>
    </div>
  </>
);

export default function TravelProductsPage() {
  return (
    <ServicePageTemplate
      title="Essential Travel Products"
      description="Discover and compare the best travel gear and accessories. Find everything you need for your next journey from trusted brands worldwide."
      heroImage="https://images.unsplash.com/photo-1553531384-cc64ac80f931"
      features={features}
      searchLabel="Search Products"
      searchPlaceholder="Search travel products"
      additionalFields={additionalFields}
    />
  );
}
