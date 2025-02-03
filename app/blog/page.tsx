import { getAllPosts, getAllCategories, getAllTags } from '@/lib/blog';
import BlogGrid from '@/components/blog/BlogGrid';

export const metadata = {
  title: 'Blog | GoFlyzo',
  description: 'Travel tips, guides, and stories to inspire your next adventure.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Travel Blog
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover travel tips, destination guides, and stories to inspire your next adventure.
        </p>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <BlogGrid posts={posts} />

      {/* Tags */}
      <div className="mt-16">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Popular Topics
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
