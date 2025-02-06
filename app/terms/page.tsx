import React from 'react';

export const metadata = {
  title: 'Terms of Service | GoFlyzo',
  description: 'Terms and conditions for using GoFlyzo travel services and website.',
};

export default function TermsOfService() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Last updated: {currentDate}</p>
        </div>

        <div className="space-y-12">
          {/* Agreement to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">1. Agreement to Terms</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                By accessing and using GoFlyzo.com (&ldquo;the Website&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access the Website.
              </p>
            </div>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">2. Description of Service</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                GoFlyzo.com is a travel affiliate website that provides travel-related information, recommendations, and referrals to third-party travel service providers. We act as an intermediary and do not directly provide travel services.
              </p>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">3. User Responsibilities</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3.1 Account Creation</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>You must provide accurate and complete information when creating an account</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You must immediately notify us of any unauthorized use of your account</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">3.2 Prohibited Activities</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">You agree not to:</p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>Use the Website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website</li>
                  <li>Interfere with the proper functioning of the Website</li>
                  <li>Copy, modify, or distribute our content without written permission</li>
                  <li>Use automated systems or software to extract data from the Website</li>
                  <li>Impersonate another person or entity</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Affiliate Links and Third-Party Services */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">4. Affiliate Links and Third-Party Services</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4.1 Affiliate Relationships</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>We participate in affiliate marketing programs</li>
                  <li>We earn commissions through qualifying purchases made through our affiliate links</li>
                  <li>Prices for products and services are set by our partners and may change without notice</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">4.2 Third-Party Services</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>We are not responsible for third-party websites or services</li>
                  <li>Your use of third-party services is subject to their terms and conditions</li>
                  <li>We do not guarantee availability or accuracy of third-party services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">5. Intellectual Property</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">5.1 Website Content</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>All content on the Website is our property or used with permission</li>
                  <li>You may not use our content without explicit written permission</li>
                  <li>Our trademarks and brand features are protected by law</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">5.2 User Content</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>You retain ownership of content you submit to the Website</li>
                  <li>You grant us a license to use, modify, and display your content</li>
                  <li>We may remove any user content at our discretion</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer and Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">6. Disclaimer and Liability</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties. We shall not be liable for any:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>Direct, indirect, or consequential damages</li>
                <li>Loss of profits or data</li>
                <li>Business interruption</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">For questions about these Terms, please contact us at:</p>
              <p className="text-gray-700 dark:text-gray-300">
                Email: <a href="mailto:support@goflyzo.com" className="text-blue-600 dark:text-blue-400 hover:underline">support@goflyzo.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
