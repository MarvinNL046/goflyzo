import { FC } from 'react';
import HotelCard from '@/components/services/HotelCard';
import FlightCard from '@/components/services/FlightCard';
import InsuranceCard from '@/components/services/InsuranceCard';
import CarCard from '@/components/services/CarCard';
import ProductCard from '@/components/services/ProductCard';
import ESIMCard from '@/components/services/ESIMCard';

// Sample data - This could be moved to a JSON file or fetched from Supabase
const featuredDeals = {
  hotel: {
    name: "Luxury Resort Bali",
    location: "Ubud, Bali",
    description: "Experience paradise in this 5-star luxury resort surrounded by lush tropical gardens.",
    pricePerNight: 199,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    amenities: [
      {
        name: "Free WiFi",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        ),
      },
      {
        name: "Pool",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
      },
    ],
    stars: 5,
    badge: "Best Seller",
    affiliateLink: "#",
  },
  flight: {
    airline: {
      name: "Emirates",
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    },
    departure: {
      city: "Amsterdam",
      airport: "AMS",
      time: "10:30",
    },
    arrival: {
      city: "Bangkok",
      airport: "BKK",
      time: "06:50",
    },
    duration: "13h 20m",
    stops: 1,
    price: 699,
    baggage: {
      cabin: true,
      checked: true,
    },
    badge: "Popular Route",
  },
  insurance: {
    provider: {
      name: "World Travel Protection",
      logo: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
    plan: {
      name: "Premium Travel Cover",
      description: "Comprehensive travel insurance with COVID-19 coverage and 24/7 assistance.",
    },
    coverages: [
      {
        name: "Medical Coverage",
        amount: "€1,000,000",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
      },
      {
        name: "Trip Cancellation",
        amount: "€5,000",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ),
      },
      {
        name: "Lost Baggage",
        amount: "€2,000",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
    ],
    price: {
      amount: 49.99,
      period: "30 days",
    },
    badge: "Most Popular",
  },
  car: {
    vehicle: {
      name: "Toyota Corolla",
      type: "Sedan",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    },
    company: {
      name: "Hertz",
      logo: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2",
    },
    features: [
      {
        name: "Transmission",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ),
        value: "Automatic",
      },
      {
        name: "Seats",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        value: "5",
      },
      {
        name: "Air Conditioning",
        icon: (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        value: "Yes",
      },
    ],
    price: {
      amount: 35,
      period: "day",
    },
    location: "Barcelona Airport",
    badge: "Best Value",
  },
  esim: {
    provider: {
      name: "Airalo",
      logo: "/images/Logo-airalo.svg",
    },
    region: "Europe",
    description: "Stay connected across Europe with reliable high-speed data coverage in 30+ countries.",
    dataPlan: {
      data: "10GB",
      validity: "30 days",
    },
    price: 24.99,
    coverage: ["France", "Germany", "Italy", "Spain", "Netherlands"],
    badge: "Best Value",
    affiliateLink: "#",
  },
  product: {
    name: "Premium Travel Backpack",
    description: "Water-resistant 40L backpack with laptop compartment and USB charging port",
    price: 89.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
    category: "Bags",
    badge: "Top Rated",
    inStock: true,
    affiliateLink: "#",
  },
};

const FeaturedDeals: FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Featured Travel Deals
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Handpicked offers for your next adventure
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Hotel Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Featured Hotel
              </h3>
              <a href="/services/hotels" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all hotels
              </a>
            </div>
            <HotelCard {...featuredDeals.hotel} />
          </div>

          {/* Flight Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Popular Flight
              </h3>
              <a href="/services/flights" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all flights
              </a>
            </div>
            <FlightCard {...featuredDeals.flight} />
          </div>

          {/* Insurance Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Recommended Insurance
              </h3>
              <a href="/services/travel-insurance" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all plans
              </a>
            </div>
            <InsuranceCard {...featuredDeals.insurance} />
          </div>

          {/* Car Rental Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Best Car Rental
              </h3>
              <a href="/services/car-rental" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all cars
              </a>
            </div>
            <CarCard {...featuredDeals.car} />
          </div>

          {/* eSIM Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Featured eSIM
              </h3>
              <a href="/services/esims" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all eSIMs
              </a>
            </div>
            <ESIMCard {...featuredDeals.esim} />
          </div>

          {/* Travel Product Deal */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Featured Travel Gear
              </h3>
              <a href="/services/travel-products" className="text-blue-600 dark:text-blue-400 hover:underline">
                View all products
              </a>
            </div>
            <ProductCard {...featuredDeals.product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
