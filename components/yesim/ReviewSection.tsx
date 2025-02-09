import React from 'react';

export default function ReviewSection() {
  const reviews = [
    {
      text: "YeSim's virtual phone numbers and free VPN feature make it perfect for both travel and privacy needs.",
      author: "Travel Enthusiast",
      rating: 5
    },
    {
      text: "The app is incredibly user-friendly, and the 1-click installation made setting up my eSIM a breeze.",
      author: "Digital Nomad",
      rating: 5
    },
    {
      text: "Great coverage in over 200 destinations. The regional plans offer excellent value for money.",
      author: "Business Traveler",
      rating: 4
    }
  ];

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
        Customer Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="h-5 w-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;{review.text}&rdquo;</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">- {review.author}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <div className="flex items-center justify-center space-x-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 dark:text-gray-300">4.5 rating on Trustpilot</p>
          <p className="text-gray-600 dark:text-gray-300">27K+ ratings</p>
        </div>
      </div>
    </div>
  );
}
