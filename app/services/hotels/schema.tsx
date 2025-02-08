export default function HotelSearchSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Book Hotels Worldwide | GoFlyzo",
    description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide with GoFlyzo.",
    provider: {
      "@type": "Organization",
      name: "GoFlyzo",
      url: "https://goflyzo.com"
    },
    about: {
      "@type": "Service",
      name: "Hotel Booking Service",
      serviceType: "Hotel Reservations",
      provider: {
        "@type": "Organization",
        name: "GoFlyzo"
      },
      description: "Compare and book hotels worldwide at the best prices",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "50",
        highPrice: "1000",
        offerCount: "10000+"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
        bestRating: "5",
        worstRating: "1"
      }
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://goflyzo.com/services/hotels/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    mainEntity: {
      "@type": "WebApplication",
      name: "GoFlyzo Hotel Search",
      applicationCategory: "TravelApplication",
      browserRequirements: "Requires JavaScript. Requires HTML5.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      featureList: [
        "Best Price Guarantee",
        "Verified Reviews",
        "Free Cancellation",
        "24/7 Support",
        "Secure Booking",
        "Price Comparison"
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
