const ServicePageSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Hero Section Skeleton */}
      <div className="relative h-[500px] bg-gray-200 dark:bg-gray-700">
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="h-12 w-2/3 bg-gray-300 dark:bg-gray-600 rounded-lg mb-6" />
          <div className="h-6 w-1/2 bg-gray-300 dark:bg-gray-600 rounded-lg" />
          <div className="mt-10">
            <div className="h-12 w-40 bg-gray-300 dark:bg-gray-600 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Search Section Skeleton */}
      <div className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4" />
            <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto" />
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators Skeleton */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div 
                key={index}
                className="relative bg-white dark:bg-gray-900 p-6 rounded-lg"
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-md" />
                  <div className="ml-4 flex-1">
                    <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg mb-2" />
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="h-10 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto mb-4" />
            <div className="h-6 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto" />
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="relative bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
              >
                <div className="h-12 w-12 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6" />
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageSkeleton;
