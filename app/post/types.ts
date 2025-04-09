/**
 * Represents a blog post with its metadata.
 * This interface is used to define the structure of a blog post object,
 * which includes properties such as the post's slug, title, description,
 * date, author, tags, category, cover image, and whether it's featured.
 * The path property is used to construct the URL for the blog post.
 */
export interface BlogPost {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
  category?: string;
  cover?: string;
  featured?: boolean;
  path: string;
} 