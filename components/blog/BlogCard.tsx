import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
}

export default function BlogCard({
  slug,
  title,
  excerpt,
  coverImage,
  date,
  category,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/blog/${slug}`}>
      <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        {/* Image Container */}
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-100 backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex-1">
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate}
            </time>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 line-clamp-3">
              {excerpt}
            </p>
          </div>

          {/* Read More Link */}
          <div className="mt-6 flex items-center text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-500 dark:group-hover:text-blue-300">
            <span>Read article</span>
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
