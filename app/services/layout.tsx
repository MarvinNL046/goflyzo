import { FC, ReactNode } from "react";

interface ServicesLayoutProps {
  children: ReactNode;
}

const ServicesLayout: FC<ServicesLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Breadcrumb navigation could be added here */}
      <main>
        {children}
      </main>
      
      {/* Common CTA section for all service pages */}
      <section className="bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start your journey?</span>
            <span className="block text-blue-200">Book now and save with our exclusive deals.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#search"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators section */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">100K+</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Happy Travelers</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Satisfaction Rate</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Support Available</div>
              </div>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">150+</div>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesLayout;
