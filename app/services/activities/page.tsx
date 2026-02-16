import { getAffiliate } from '@/lib/affiliates';
import Link from 'next/link';
import KlookEmbed from './KlookEmbed';

export const metadata = {
  title: 'Activities & Tours in Thailand | GoFlyzo',
  description: 'Book the best tours, activities, and attraction tickets in Thailand. Temple visits, island hopping, cooking classes, adventure activities and more with instant confirmation on Klook.',
};

const categories = [
  {
    title: 'Tours & Sightseeing',
    icon: '🏛️',
    items: [
      { name: 'Grand Palace & Wat Phra Kaew Tour', city: 'Bangkok', duration: '3-4 hours', price: 'From $25' },
      { name: 'Doi Suthep Temple Half-Day Tour', city: 'Chiang Mai', duration: '4 hours', price: 'From $18' },
      { name: 'Old Town Walking Tour', city: 'Phuket', duration: '3 hours', price: 'From $15' },
    ],
  },
  {
    title: 'Water Activities',
    icon: '🌊',
    items: [
      { name: 'Phi Phi Islands Speedboat Day Trip', city: 'Phuket', duration: 'Full day', price: 'From $45' },
      { name: 'James Bond Island Tour', city: 'Phuket', duration: 'Full day', price: 'From $35' },
      { name: 'Four Islands Snorkeling Tour', city: 'Krabi', duration: 'Full day', price: 'From $28' },
    ],
  },
  {
    title: 'Cultural Experiences',
    icon: '🎭',
    items: [
      { name: 'Thai Cooking Class', city: 'Chiang Mai', duration: '4-5 hours', price: 'From $30' },
      { name: 'Muay Thai Training Session', city: 'Bangkok', duration: '2 hours', price: 'From $20' },
      { name: 'Thai Massage Workshop', city: 'Chiang Mai', duration: '3 hours', price: 'From $25' },
    ],
  },
  {
    title: 'Adventure',
    icon: '🏔️',
    items: [
      { name: 'Elephant Sanctuary Visit', city: 'Chiang Mai', duration: 'Half day', price: 'From $50' },
      { name: 'Zip-lining through the Jungle', city: 'Chiang Mai', duration: '3-4 hours', price: 'From $40' },
      { name: 'ATV Off-Road Adventure', city: 'Phuket', duration: '2 hours', price: 'From $35' },
    ],
  },
  {
    title: 'Tickets & Passes',
    icon: '🎟️',
    items: [
      { name: 'Safari World Bangkok Ticket', city: 'Bangkok', duration: 'Full day', price: 'From $22' },
      { name: 'Phuket FantaSea Show', city: 'Phuket', duration: 'Evening', price: 'From $55' },
      { name: 'Chiang Mai Night Safari', city: 'Chiang Mai', duration: 'Evening', price: 'From $18' },
    ],
  },
];

const cityActivities = [
  {
    city: 'Bangkok',
    linkKey: 'bangkok',
    highlights: ['Temple tours', 'Street food walks', 'River cruises', 'Muay Thai shows', 'Floating markets'],
  },
  {
    city: 'Phuket',
    linkKey: 'phuket',
    highlights: ['Island hopping', 'Snorkeling & diving', 'Zip-lining', 'Thai cooking class', 'Elephant sanctuary'],
  },
  {
    city: 'Chiang Mai',
    linkKey: 'chiangMai',
    highlights: ['Elephant sanctuary', 'Temple tours', 'Cooking classes', 'Jungle trekking', 'Night bazaar tours'],
  },
  {
    city: 'Krabi',
    linkKey: 'thailand',
    highlights: ['Four Islands tour', 'Kayaking', 'Rock climbing', 'Hot springs', 'Emerald Pool visit'],
  },
  {
    city: 'Pattaya',
    linkKey: 'thailand',
    highlights: ['Coral Island trip', 'Sanctuary of Truth', 'Water parks', 'Cabaret shows', 'Jet ski adventure'],
  },
];

const faqs = [
  {
    q: 'How does booking on Klook work?',
    a: 'Simply choose your activity, select a date, and book instantly. You\'ll receive a mobile voucher via email that you can show on your phone at the venue — no printing needed.',
  },
  {
    q: 'Can I cancel my booking?',
    a: 'Most activities on Klook offer free cancellation up to 24-48 hours before the activity. Check the cancellation policy on each activity page for specific details.',
  },
  {
    q: 'Are the prices in Thai Baht or USD?',
    a: 'Klook shows prices in multiple currencies. You can select your preferred currency on the Klook website. Prices shown on this page are approximate USD equivalents.',
  },
  {
    q: 'Do I need to book in advance?',
    a: 'We recommend booking at least 1-2 days in advance for popular activities, especially during peak season (November-February). Some activities offer same-day booking.',
  },
  {
    q: 'Is Klook a trusted platform?',
    a: 'Yes! Klook is one of the world\'s largest travel activities platforms with millions of reviews. They offer a best price guarantee and 24/7 customer support.',
  },
];

export default function ActivitiesPage() {
  const klook = getAffiliate('klook');

  if (!klook) {
    return null;
  }

  const links = klook.links || {};

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Activities & Tours in Thailand
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto text-white/90">
            Discover unforgettable experiences — from ancient temples and tropical islands
            to cooking classes and jungle adventures. Book instantly with Klook.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={links.thailand || klook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore All Thailand Activities
            </a>
          </div>
        </div>
      </div>

      {/* Breadcrumb + Disclosure */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Activities & Tours</span>
        </nav>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Affiliate disclosure: Some links on this page are affiliate links. We may earn a commission at no extra cost to you when you book through these links.
        </p>
      </div>

      {/* Quick Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Instant Confirmation', desc: 'Get your booking confirmed immediately with a mobile voucher', icon: '⚡' },
            { title: 'Best Price Guarantee', desc: 'Found it cheaper elsewhere? Klook will match the price', icon: '💰' },
            { title: 'Free Cancellation', desc: 'Flexible plans with free cancellation on most activities', icon: '✅' },
          ].map((benefit) => (
            <div key={benefit.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Klook Search Widget */}
      <div className="bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
            Search Activities on Klook
          </h2>
          <KlookEmbed />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={links.bangkok || klook.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-md">
              🏛️ Bangkok
            </a>
            <a href={links.phuket || klook.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-md">
              🏖️ Phuket
            </a>
            <a href={links.chiangMai || klook.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-md">
              🏔️ Chiang Mai
            </a>
            <a href={links.thailand || klook.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium shadow-md">
              🇹🇭 All Thailand
            </a>
          </div>
        </div>
      </div>

      {/* Top Activities by Category */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Top Thailand Activities by Category
          </h2>
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                  {category.icon} {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <div key={item.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.name}</h4>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{item.city}</span>
                        <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{item.duration}</span>
                      </div>
                      <p className="text-orange-600 dark:text-orange-400 font-semibold">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={links.thailand || klook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors shadow-md"
            >
              View All Activities on Klook
            </a>
          </div>
        </div>
      </div>

      {/* Activities by City */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          Activities by City
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cityActivities.map((cityData) => (
            <div key={cityData.city} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4">
                <h3 className="text-xl font-bold text-white">{cityData.city}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-6">
                  {cityData.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <svg className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <a
                  href={links[cityData.linkKey] || links.thailand || klook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Explore {cityData.city} Activities
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Book with Klook */}
      <div className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
            Why Book with Klook?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {klook.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">{faq.q}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-sell CTA */}
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">Plan Your Complete Thailand Trip</h2>
            <p className="text-white/80">Don&apos;t forget to book your hotel, flights, and eSIM for a seamless travel experience.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/hotels"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              🏨 Find Hotels
            </Link>
            <Link
              href="/services/flights"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              ✈️ Book Flights
            </Link>
            <Link
              href="/services/esims"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              📱 Get eSIM
            </Link>
            <Link
              href="/services/car-rental"
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur rounded-lg font-semibold hover:bg-white/30 transition-colors"
            >
              🚗 Rent a Car
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
