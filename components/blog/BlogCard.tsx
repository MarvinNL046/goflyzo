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
    <Link href={`/blog/${slug}`} className="group">
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:transform group-hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {category}
            </span>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {formattedDate}
            </time>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
            {excerpt}
          </p>
          <div className="mt-4">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
