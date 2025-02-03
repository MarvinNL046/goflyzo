import { getPostBySlug, getAllPosts } from '@/lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | GoFlyzo Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <div className="mb-4">
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {post.category}
          </span>
          <time className="text-gray-500 dark:text-gray-400 ml-4">
            {formattedDate}
          </time>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {post.excerpt}
        </p>
        <div className="text-gray-500 dark:text-gray-400">
          By {post.author}
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative h-96 w-full mb-12">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none mt-12 px-4 sm:px-6 lg:px-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      {/* Tags */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
