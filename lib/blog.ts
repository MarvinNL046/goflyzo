import { supabase } from './supabase';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
}

interface KbArticleMetadata {
  type: string;
  excerpt: string;
  author: string;
  tags: string[];
  category: string;
  coverImage: string;
}

interface KbArticle {
  id: string;
  category_id: string;
  title: string;
  content: string;
  metadata: KbArticleMetadata;
  created_at: string;
}

function mapKbArticleToBlogPost(article: KbArticle): BlogPost {
  return {
    slug: article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    title: article.title,
    excerpt: article.metadata.excerpt,
    content: article.content,
    coverImage: article.metadata.coverImage,
    date: article.created_at,
    author: article.metadata.author,
    tags: article.metadata.tags,
    category: article.metadata.category
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  console.log('All articles:', articles);
  
  const blogPosts = articles.filter(article => article.metadata?.type === 'blog');
  console.log('Filtered blog posts:', blogPosts);
  
  const mappedPosts = blogPosts.map(mapKbArticleToBlogPost);
  console.log('Mapped blog posts:', mappedPosts);
  
  return mappedPosts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .eq('metadata->>type', 'blog')
    .ilike('title', slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
    .limit(1);

  if (error || !articles || articles.length === 0) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return mapKbArticleToBlogPost(articles[0]);
}

export async function getAllCategories(): Promise<string[]> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .eq('metadata->>type', 'blog');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  const categories = new Set(articles.map((article: KbArticle) => article.metadata.category));
  return Array.from(categories).sort();
}

export async function getAllTags(): Promise<string[]> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .eq('metadata->>type', 'blog');

  if (error) {
    console.error('Error fetching tags:', error);
    return [];
  }

  const tags = new Set(articles.flatMap((article: KbArticle) => article.metadata.tags));
  return Array.from(tags).sort();
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .eq('metadata->>type', 'blog')
    .eq('metadata->>category', category)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }

  return articles.map(mapKbArticleToBlogPost);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const { data: articles, error } = await supabase
    .from('kb_articles')
    .select('*')
    .eq('metadata->>type', 'blog')
    .contains('metadata->tags', [tag])
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching posts by tag:', error);
    return [];
  }

  return articles.map(mapKbArticleToBlogPost);
}
