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
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {currentDate}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p>By accessing and using GoFlyzo.com (&ldquo;the Website&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, you may not access the Website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
          <p>GoFlyzo.com is a travel affiliate website that provides travel-related information, recommendations, and referrals to third-party travel service providers. We act as an intermediary and do not directly provide travel services.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          
          <h3 className="text-xl font-semibold mb-3">3.1 Account Creation</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You must provide accurate and complete information when creating an account</li>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must immediately notify us of any unauthorized use of your account</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">3.2 Prohibited Activities</h3>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Website for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the Website</li>
            <li>Interfere with the proper functioning of the Website</li>
            <li>Copy, modify, or distribute our content without written permission</li>
            <li>Use automated systems or software to extract data from the Website</li>
            <li>Impersonate another person or entity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Affiliate Links and Third-Party Services</h2>
          
          <h3 className="text-xl font-semibold mb-3">4.1 Affiliate Relationships</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>We participate in affiliate marketing programs</li>
            <li>We earn commissions through qualifying purchases made through our affiliate links</li>
            <li>Prices for products and services are set by our partners and may change without notice</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">4.2 Third-Party Services</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>We are not responsible for third-party websites or services</li>
            <li>Your use of third-party services is subject to their terms and conditions</li>
            <li>We do not guarantee availability or accuracy of third-party services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          
          <h3 className="text-xl font-semibold mb-3">5.1 Website Content</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>All content on the Website is our property or used with permission</li>
            <li>You may not use our content without explicit written permission</li>
            <li>Our trademarks and brand features are protected by law</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">5.2 User Content</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>You retain ownership of content you submit to the Website</li>
            <li>You grant us a license to use, modify, and display your content</li>
            <li>We may remove any user content at our discretion</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimer of Warranties</h2>
          <p>The Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without any warranties, either express or implied, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accuracy of travel information</li>
            <li>Availability of third-party services</li>
            <li>Uninterrupted access to the Website</li>
            <li>Security of the Website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p>We shall not be liable for any:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Direct, indirect, or consequential damages</li>
            <li>Loss of profits or data</li>
            <li>Business interruption</li>
            <li>Personal injury or property damage</li>
          </ul>
          <p>arising from your use of the Website or third-party services</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
          <p>You agree to indemnify and hold us harmless from any claims, losses, or damages, including legal fees, arising from:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your use of the Website</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of third parties</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the Website. Your continued use of the Website constitutes acceptance of modified Terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p>We may terminate or suspend your access to the Website immediately, without prior notice, for any breach of these Terms.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the Netherlands, without regard to its conflict of law provisions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Dispute Resolution</h2>
          <p>Any dispute arising from these Terms shall be resolved through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Good faith negotiations</li>
            <li>Mediation if negotiations fail</li>
            <li>Binding arbitration if mediation fails</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
          <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in effect.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">14. Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and GoFlyzo.com regarding your use of the Website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
          <p>For questions about these Terms, please contact us at:</p>
          <p className="mt-2">Email: <a href="mailto:support@goflyzo.com" className="text-blue-600 hover:text-blue-800">support@goflyzo.com</a></p>
        </section>
      </article>
    </div>
  );
}
