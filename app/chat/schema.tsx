export default function ChatSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kai - Your Travel Companion",
    applicationCategory: "TravelApplication",
    description: "Chat with Kai, your friendly AI travel companion who provides personalized travel recommendations and assistance",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock"
    },
    provider: {
      "@type": "Organization",
      name: "GoFlyzo",
      url: "https://goflyzo.com"
    },
    about: {
      "@type": "Thing",
      name: "Travel Planning with Kai",
      description: "Chat with Kai for personalized travel assistance, recommendations, and answers to all your travel-related questions"
    },
    featureList: [
      "Chat with Kai, your friendly travel companion",
      "Personalized recommendations",
      "Travel knowledge base",
      "24/7 availability",
      "Multi-language support",
      "Travel tips and guides"
    ],
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "1.0.0",
    operatingSystem: "Any",
    interactionCount: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/InteractAction",
      userInteractionCount: "1000+"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
