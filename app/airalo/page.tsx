import { Metadata } from "next";
import Image from "next/image";
import ServicePageTemplate from "../../components/services/ServicePageTemplate";
import { getAffiliateData } from "../../app/utils/affiliates";
import PlanOptions from "../../components/airalo/PlanOptions";

export const metadata: Metadata = {
  title: "Airalo eSIM Review 2025: Best Global Connectivity Solution | GoFlyzo",
  description: "Comprehensive Airalo eSIM review 2025. Get internet worldwide from $4.50. Coverage in 200+ countries, 5G support, instant setup. Read our expert review!",
  openGraph: {
    title: "Airalo eSIM Review 2025: Best Global Connectivity Solution | GoFlyzo",
    description: "Comprehensive Airalo eSIM review 2025. Get internet worldwide from $4.50. Coverage in 200+ countries, 5G support, instant setup. Read our expert review!",
    images: [
      {
        url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
        width: 1200,
        height: 630,
        alt: "Person using smartphone while traveling",
      },
    ],
  },
};

const features = [
  {
    title: "Works Right Away",
    description: "No need to find a local store. Set up your internet in 5 minutes from anywhere!",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Keep Your Phone Number",
    description: "No need to swap SIM cards. Your regular number still works for calls and texts.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Save Money",
    description: "Way cheaper than regular roaming. Get internet from just €10 for your whole trip!",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Works Everywhere",
    description: "Travel worry-free with coverage in over 200 countries and regions worldwide.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const HowItWorks = () => (
  <div className="bg-gray-50 dark:bg-gray-800 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          How to Get Started - It&apos;s Easy!
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Get connected in just 5 minutes with these simple steps
        </p>
      </div>
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
        {[
          {
            title: "1. Download the App",
            description: "Get the free Airalo app from your phone&apos;s app store",
          },
          {
            title: "2. Pick Your Package",
            description: "Choose your country and how much internet you need",
          },
          {
            title: "3. Quick Setup",
            description: "Follow the easy steps to set up your eSIM",
          },
          {
            title: "4. Start Using!",
            description: "You&apos;re all set! Your internet is ready to use",
          },
        ].map((step, index) => (
          <div key={index} className="text-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const StarRating = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => (
  <div className="bg-gray-900 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white">
          What Our Travelers Say
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Join over 10 million satisfied travelers worldwide
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {[
          {
            name: "Sarah Johnson",
            role: "Digital Nomad",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            text: "GoFlyzo made booking my international trip so easy. Found great hotel deals and the eSIM service was a lifesaver abroad!",
          },
          {
            name: "Michael Chen",
            role: "Business Traveler",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            text: "The best travel booking platform I&apos;ve used. Their travel insurance saved me when my flight was delayed. Highly recommend!",
          },
          {
            name: "Emma Rodriguez",
            role: "Travel Enthusiast",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
            text: "Amazing deals on hotels and flights. The car rental process was smooth, and customer service was exceptional.",
          },
        ].map((review, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur rounded-lg shadow-xl p-8">
            <StarRating />
            <p className="text-lg text-white mb-6">&ldquo;{review.text}&rdquo;</p>
            <div className="flex items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold text-white">{review.name}</h4>
                <p className="text-blue-400">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-gray-400 mt-12">
        Join thousands of satisfied travelers who trust GoFlyzo for their travel needs.
      </p>
    </div>
  </div>
);

const DownloadSection = () => (
  <div className="bg-blue-600 text-white py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Get Started in 5 Minutes</h2>
      <p className="text-xl mb-12">Plus get €3 free credit when you sign up!</p>
      <div className="flex justify-center space-x-6">
        <a href="https://play.google.com/store/apps/details?id=com.airalo.mobile" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/google-play.svg"
            alt="Get it on Google Play"
            width={180}
            height={60}
          />
        </a>
        <a href="https://apps.apple.com/app/apple-store/id1475911720" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/app-store.svg"
            alt="Download on the App Store"
            width={180}
            height={60}
          />
        </a>
      </div>
    </div>
  </div>
);

export default function AiraloPage() {
  const airaloData = getAffiliateData('esims', 'airalo');

  return (
    <ServicePageTemplate
      title="Get Internet on Your Phone Anywhere in the World"
      description="Works in 200+ countries, takes 5 minutes to set up, costs less than regular roaming!"
      heroImage="https://images.unsplash.com/photo-1512428559087-560fa5ceab42"
      features={features}
      searchLabel="Find eSIM Plans for Your Trip"
      searchPlaceholder="Where are you traveling to?"
      affiliateLink={airaloData?.link}
      affiliateWidget={airaloData?.widget}
      afterHeroContent={
        <>
          <PlanOptions />
          <HowItWorks />
          <Reviews />
          <DownloadSection />
        </>
      }
    />
  );
}
