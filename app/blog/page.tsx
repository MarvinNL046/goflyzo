import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogGridClient from '@/components/blog/BlogGridClient';

export const metadata = {
  title: 'Blog | GoFlyzo',
  description: 'Travel tips, guides, and stories to inspire your next adventure.',
};

export default async function BlogPage() {
  const [posts, categories, tags] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getAllTags()
  ]);

  console.log('Server-side posts:', JSON.stringify(posts, null, 2));
  console.log('Server-side categories:', JSON.stringify(categories, null, 2));
  console.log('Server-side tags:', JSON.stringify(tags, null, 2));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/blog/2025-destinations.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Travel Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover travel tips, destination guides, and stories to inspire your next adventure.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
            Latest Stories
          </h2>
          <BlogGridClient posts={posts} />
        </div>

        {/* Tags Cloud */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Popular Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 sm:p-12">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get the latest travel tips and destination guides delivered straight to your inbox.
              </p>
              <form className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
