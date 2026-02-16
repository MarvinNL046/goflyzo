import { getAffiliate } from '@/lib/affiliates';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Travel Security — VPN & Password Manager | GoFlyzo',
  description: 'Stay safe online while traveling with NordVPN and NordPass. Secure public Wi-Fi, protect your passwords, and browse privately from anywhere in the world.',
  openGraph: {
    title: 'Travel Security — VPN & Password Manager | GoFlyzo',
    description: 'Protect your digital life while traveling. VPN for secure browsing and password manager for all your travel accounts.',
  },
};

export default function TravelSecurityPage() {
  const nordvpn = getAffiliate('nordvpn');
  const nordpass = getAffiliate('nordpass');

  if (!nordvpn || !nordpass) {
    return null;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-300 font-medium mb-4">Travel with confidence</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your Digital Life While Traveling
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Public Wi-Fi at airports and hotels can expose your data. Stay secure with a VPN
            and password manager trusted by millions worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={nordvpn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: nordvpn.primaryColor }}
            >
              Get NordVPN
            </a>
            <a
              href={nordpass.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-gray-900 transition-colors"
              style={{ backgroundColor: nordpass.primaryColor }}
            >
              Get NordPass
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            This page contains affiliate links. We may earn a commission at no extra cost to you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/travel-insurance" className="hover:text-blue-600">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Travel Security</span>
        </nav>

        {/* Why You Need section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
            Why Travelers Need Digital Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Every time you connect to airport Wi-Fi, hotel networks, or cafe hotspots, your personal data is at risk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Public Wi-Fi Risks',
                description: 'Hackers can intercept your data on unsecured networks at airports, hotels, and cafes. A VPN encrypts everything you send and receive.',
                icon: (
                  <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                ),
              },
              {
                title: 'Password Theft',
                description: 'Using the same password across booking sites, airlines, and hotels? A single breach can compromise all your accounts.',
                icon: (
                  <svg className="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
              {
                title: 'Identity Protection',
                description: 'Keep your travel bookings, credit card details, and personal documents safe from prying eyes with end-to-end encryption.',
                icon: (
                  <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* NordVPN Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12" style={{ borderTop: `4px solid ${nordvpn.primaryColor}` }}>
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="relative h-10 w-40 mb-6">
                    <Image
                      src={nordvpn.logo}
                      alt="NordVPN Logo"
                      fill
                      sizes="160px"
                      className="object-contain object-left"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Secure Your Internet Connection Worldwide
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {nordvpn.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {nordvpn.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <svg className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: nordvpn.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={nordvpn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: nordvpn.primaryColor }}
                  >
                    Get NordVPN — Save up to 74%
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="md:w-80 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Perfect for Travelers</h3>
                  <ul className="space-y-3">
                    {nordvpn.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2 mt-0.5 text-blue-500">&#10003;</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NordPass Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 md:p-12" style={{ borderTop: `4px solid ${nordpass.primaryColor}` }}>
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="flex-1">
                  <div className="relative h-10 w-40 mb-6">
                    <Image
                      src={nordpass.logo}
                      alt="NordPass Logo"
                      fill
                      sizes="160px"
                      className="object-contain object-left"
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    All Your Passwords, Secure & Accessible Anywhere
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {nordpass.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {nordpass.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <svg className="h-5 w-5 mr-2 flex-shrink-0" style={{ color: nordpass.primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <a
                    href={nordpass.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-gray-900 transition-all hover:opacity-90"
                    style={{ backgroundColor: nordpass.primaryColor }}
                  >
                    Get NordPass
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="md:w-80 bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Travel Benefits</h3>
                  <ul className="space-y-3">
                    {nordpass.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                        <span className="mr-2 mt-0.5" style={{ color: nordpass.primaryColor }}>&#10003;</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bundle Recommendation */}
        <div className="mb-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Best Protection: Use Both Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            NordVPN encrypts your internet connection while NordPass secures all your passwords and login credentials.
            Together, they provide complete digital protection for your travels. Both are made by Nord Security —
            a trusted cybersecurity company protecting over 15 million users worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={nordvpn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: nordvpn.primaryColor }}
            >
              Get NordVPN
            </a>
            <a
              href={nordpass.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-gray-900 transition-colors hover:opacity-90"
              style={{ backgroundColor: nordpass.primaryColor }}
            >
              Get NordPass
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: 'Why do I need a VPN when traveling?',
                a: 'When you connect to public Wi-Fi at airports, hotels, or cafes, your data can be intercepted by hackers. A VPN encrypts all your internet traffic, making it unreadable to anyone trying to snoop. It also lets you access content from your home country while abroad.',
              },
              {
                q: 'Is NordVPN easy to use while traveling?',
                a: 'Yes! Simply download the app on your phone, tablet, or laptop, connect with one tap, and you\'re protected. NordVPN has 9,000+ servers in 118 countries, so you\'ll always find a fast connection nearby.',
              },
              {
                q: 'Why should I use a password manager for travel?',
                a: 'Travelers use dozens of accounts — airline bookings, hotel reservations, rental cars, banking, and more. NordPass generates strong unique passwords for each and autofills them, so you never need to remember or type them on potentially unsafe devices.',
              },
              {
                q: 'Can I use NordVPN on multiple devices?',
                a: 'Yes, one NordVPN account protects up to 10 devices simultaneously — your phone, laptop, tablet, and more. You can also set it up on your travel router to protect all connected devices at once.',
              },
              {
                q: 'Do NordVPN and NordPass work in Thailand and Southeast Asia?',
                a: 'Absolutely. NordVPN has servers throughout Asia including nearby locations for fast connections. NordPass works anywhere with an internet connection, syncing your passwords across all your devices.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <summary className="px-6 py-4 cursor-pointer font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600">
                  {faq.q}
                </summary>
                <p className="px-6 pb-4 text-gray-600 dark:text-gray-300 text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Cross-sell CTA */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Complete Your Travel Essentials
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Pair your digital security with other travel must-haves.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/services/esims" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              eSIM Data Plans
            </Link>
            <Link href="/services/travel-insurance" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Travel Insurance
            </Link>
            <Link href="/services/hotels" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Hotels
            </Link>
            <Link href="/services/activities" className="px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Activities & Tours
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
