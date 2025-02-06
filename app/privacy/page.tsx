import React from 'react';

export const metadata = {
  title: 'Privacy Policy | GoFlyzo',
  description: 'Privacy policy and data protection information for GoFlyzo users.',
};

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Last updated: {currentDate}</p>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Introduction</h2>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300">
                Welcome to GoFlyzo.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Information We Collect</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Information You Provide to Us</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>Name and contact information when you create an account or contact us</li>
                  <li>Payment information when making purchases through our affiliate partners</li>
                  <li>Travel preferences and booking details</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Information Automatically Collected</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Device information</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">How We Use Your Information</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We use the collected information for:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>Providing travel recommendations and affiliate services</li>
                <li>Processing your requests and transactions</li>
                <li>Personalizing your experience</li>
                <li>Improving our website and services</li>
                <li>Communicating with you about updates, offers, and promotions</li>
                <li>Analyzing website usage and trends</li>
                <li>Preventing fraud and ensuring website security</li>
              </ul>
            </div>
          </section>

          {/* Affiliate Partners and Third Parties */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Affiliate Partners and Third Parties</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">As a travel affiliate website, we work with various partners. When you click on affiliate links:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>You will be redirected to our partners&apos; websites</li>
                <li>Our partners may collect additional information according to their privacy policies</li>
                <li>We may receive commission for purchases made through our affiliate links</li>
              </ul>
            </div>
          </section>

          {/* Cookie Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Cookie Policy</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We use cookies to:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>Remember your preferences</li>
                <li>Analyze website traffic</li>
                <li>Track affiliate referrals</li>
                <li>Enhance website functionality</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">You can control cookie settings through your browser preferences.</p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Data Security</h2>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">We implement appropriate security measures to protect your personal information, including:</p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 list-disc pl-5">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments</li>
                <li>Limited access to personal information</li>
                <li>Secure data storage systems</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Contact Us</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">If you have questions about this privacy policy, please contact us at:</p>
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
