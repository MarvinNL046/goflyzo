export default function PartnerSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Become a Partner | GoFlyzo",
    description: "Join our network of trusted travel partners and reach millions of travelers worldwide.",
    provider: {
      "@type": "Organization",
      name: "GoFlyzo",
      url: "https://goflyzo.com"
    },
    mainEntity: {
      "@type": "BusinessService",
      name: "GoFlyzo Partner Program",
      description: "Partner with GoFlyzo to reach millions of travelers worldwide. Easy API integration, 24/7 support, and access to a global customer base.",
      provider: {
        "@type": "Organization",
        name: "GoFlyzo"
      },
      offers: {
        "@type": "Offer",
        businessFunction: "https://schema.org/ProvideService",
        itemOffered: {
          "@type": "Service",
          name: "Travel Partner Integration",
          description: "API integration for travel service providers including hotels, flights, car rentals, and more."
        }
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide"
      },
      potentialAction: {
        "@type": "JoinAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://goflyzo.com/partner",
          actionPlatform: [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        result: {
          "@type": "Organization",
          name: "Travel Service Provider"
        }
      }
    },
    about: {
      "@type": "Thing",
      name: "Travel Partner Program",
      description: "Join our network of trusted travel partners and integrate your services with our platform."
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
