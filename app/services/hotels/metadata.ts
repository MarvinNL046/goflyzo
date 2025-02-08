import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Hotels Worldwide | GoFlyzo",
  description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide with GoFlyzo.",
  alternates: {
    canonical: "https://goflyzo.com/services/hotels",
  },
  openGraph: {
    title: "Book Hotels Worldwide | GoFlyzo",
    description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide.",
    url: "https://goflyzo.com/services/hotels",
    siteName: "GoFlyzo",
    images: [
      {
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Luxury hotel room",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Hotels Worldwide | GoFlyzo",
    description: "Find and book the perfect hotel for your stay. Compare prices, read reviews, and get the best deals on hotels worldwide.",
    images: ["https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-W99Q4S0HCZ",
  },
  other: {
    "og:price:currency": "USD",
    "og:price:standard_amount": "100",
  },
};
