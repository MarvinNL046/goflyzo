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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>Welcome to GoFlyzo.com (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">Information You Provide to Us</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information when you create an account or contact us</li>
            <li>Payment information when making purchases through our affiliate partners</li>
            <li>Travel preferences and booking details</li>
            <li>Any other information you choose to provide</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Information Automatically Collected</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Device information</li>
            <li>Pages visited and time spent on our website</li>
            <li>Referral sources</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p>We use the collected information for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing travel recommendations and affiliate services</li>
            <li>Processing your requests and transactions</li>
            <li>Personalizing your experience</li>
            <li>Improving our website and services</li>
            <li>Communicating with you about updates, offers, and promotions</li>
            <li>Analyzing website usage and trends</li>
            <li>Preventing fraud and ensuring website security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Affiliate Partners and Third Parties</h2>
          <p>As a travel affiliate website, we work with various partners. When you click on affiliate links:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You will be redirected to our partners&apos; websites</li>
            <li>Our partners may collect additional information according to their privacy policies</li>
            <li>We may receive commission for purchases made through our affiliate links</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookie Policy</h2>
          <p>We use cookies to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remember your preferences</li>
            <li>Analyze website traffic</li>
            <li>Track affiliate referrals</li>
            <li>Enhance website functionality</li>
          </ul>
          <p>You can control cookie settings through your browser preferences.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
            <li>Secure data storage systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">International Data Transfers</h2>
          <p>Your information may be transferred and processed in countries outside your residence. We ensure appropriate safeguards are in place for such transfers.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p>Our website is not intended for children under 13 years of age. We do not knowingly collect information from children.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy periodically. The latest version will be posted on this page with the updated date.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at:</p>
          <p className="mt-2">Email: <a href="mailto:support@goflyzo.com" className="text-blue-600 hover:text-blue-800">support@goflyzo.com</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Legal Basis for Processing (for EEA users)</h2>
          <p>For users in the European Economic Area (EEA), we process personal data based on:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your consent</li>
            <li>Contractual necessity</li>
            <li>Legal obligations</li>
            <li>Legitimate business interests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">California Privacy Rights</h2>
          <p>California residents have additional rights under the CCPA, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Right to know what personal information is collected</li>
            <li>Right to delete personal information</li>
            <li>Right to opt-out of the sale of personal information</li>
            <li>Right to non-discrimination for exercising these rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>This privacy policy is governed by and construed in accordance with the laws of the Netherlands.</p>
        </section>
      </article>
    </div>
  );
}
