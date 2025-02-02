import { FC } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    content: "GoFlyzo made booking my international trip so easy. Found great hotel deals and the eSIM service was a lifesaver abroad!",
    author: "Sarah Johnson",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5,
  },
  {
    content: "The best travel booking platform I&apos;ve used. Their travel insurance saved me when my flight was delayed. Highly recommend!",
    author: "Michael Chen",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
  },
  {
    content: "Amazing deals on hotels and flights. The car rental process was smooth, and customer service was exceptional.",
    author: "Emma Rodriguez",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
  },
];

const StarRating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials: FC = () => {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What Our Travelers Say
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Don&apos;t just take our word for it - hear from our satisfied travelers around the world.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="flex-grow mt-6">
                <p className="text-lg text-gray-900 dark:text-gray-100">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400">
            Join thousands of satisfied travelers who trust GoFlyzo for their travel needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
