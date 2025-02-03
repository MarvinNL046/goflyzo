export default function AiraloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Airalo eSIM",
            description: "Digital eSIM cards for staying connected while traveling internationally. Coverage in 200+ countries with 5G support.",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "300000",
              bestRating: "5",
              worstRating: "1"
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "4.50",
              highPrice: "35.00",
              priceCurrency: "USD",
              offerCount: "50+",
              availability: "https://schema.org/InStock"
            },
            brand: {
              "@type": "Brand",
              name: "Airalo",
              slogan: "The World's First eSIM Store",
              url: "https://airalo.com"
            },
            additionalProperty: [
              {
                "@type": "PropertyValue",
                name: "Coverage",
                value: "200+ countries and regions"
              },
              {
                "@type": "PropertyValue",
                name: "Network",
                value: "5G/4G LTE where available"
              },
              {
                "@type": "PropertyValue",
                name: "Installation",
                value: "Instant digital delivery"
              }
            ],
            review: [
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1"
                },
                author: {
                  "@type": "Person",
                  name: "Dr. Jolin"
                },
                reviewBody: "Loved using the internet in Santo Domingo while other tourists were looking for WiFi! So much cheaper than regular roaming.",
                datePublished: "2025-02"
              },
              {
                "@type": "Review",
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                  bestRating: "5",
                  worstRating: "1"
                },
                author: {
                  "@type": "Person",
                  name: "BCGregory"
                },
                reviewBody: "I&apos;ve been to 45 countries, and Airalo is the easiest way to get internet abroad. No more buying local SIM cards!",
                datePublished: "2025-02"
              }
            ],
            audience: {
              "@type": "Audience",
              audienceType: "International Travelers"
            },
            award: "World's First and Largest eSIM Store"
          })
        }}
      />
      {children}
    </>
  );
}
