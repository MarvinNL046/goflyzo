import { Metadata } from "next";
import Hero from "../components/home/Hero";
import FeaturedServices from "../components/home/FeaturedServices";
import Testimonials from "../components/home/Testimonials";

export const metadata: Metadata = {
  title: "GoFlyzo - Your Ultimate Travel Companion",
  description: "Find the best deals on hotels, flights, eSIMs, travel insurance, car rentals, and more. Your one-stop travel companion for all your journey needs.",
  openGraph: {
    title: "GoFlyzo - Your Ultimate Travel Companion",
    description: "Find the best deals on hotels, flights, eSIMs, travel insurance, car rentals, and more.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
        width: 1200,
        height: 630,
        alt: "GoFlyzo Travel Services",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedServices />
      <Testimonials />
    </>
  );
}
