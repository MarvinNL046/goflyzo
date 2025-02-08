'use client';

import { useEffect } from 'react';
import BlogCard from './BlogCard';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
}

interface BlogGridClientProps {
  posts: BlogPost[];
}

export default function BlogGridClient({ posts }: BlogGridClientProps) {
  useEffect(() => {
    console.log('Client-side posts:', JSON.stringify(posts, null, 2));
  }, [posts]);

  if (!posts || posts.length === 0) {
    console.log('No posts found');
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.slug} className="flex">
          <BlogCard
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
            date={post.date}
            category={post.category}
          />
        </div>
      ))}
    </div>
  );
}
