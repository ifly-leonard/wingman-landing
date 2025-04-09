import fs from 'fs';
import path from 'path';

export interface BlogPostMetadata {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  author?: string;
  tags?: string[];
}

/**
 * Get all blog post metadata from markdown files
 */
export function getAllBlogPosts(): BlogPostMetadata[] {
  const markdownDir = path.join(process.cwd(), 'app/blog/markdown');
  const files = fs.readdirSync(markdownDir);
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(markdownDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      return extractMetadataFromMarkdown(content, slug);
    });
}

/**
 * Get metadata for a specific blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPostMetadata | null {
  try {
    const markdownPath = path.join(process.cwd(), 'app/blog/markdown', `${slug}.md`);
    const content = fs.readFileSync(markdownPath, 'utf8');
    
    return extractMetadataFromMarkdown(content, slug);
  } catch (error) {
    return null;
  }
}

/**
 * Extract metadata from markdown content
 */
function extractMetadataFromMarkdown(content: string, slug: string): BlogPostMetadata {
  // Extract title from first h1
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : slug;
  
  // Extract description from first paragraph
  const descriptionMatch = content.match(/^#.+\n\n(.+?)(?:\n\n|$)/s);
  const description = descriptionMatch ? descriptionMatch[1].trim() : undefined;
  
  // Extract date from YAML frontmatter if present
  const dateMatch = content.match(/^---\s*\n(?:.*\n)*?date:\s*(.+?)(?:\n|$)/m);
  const date = dateMatch ? dateMatch[1].trim() : undefined;
  
  // Extract author from YAML frontmatter if present
  const authorMatch = content.match(/^---\s*\n(?:.*\n)*?author:\s*(.+?)(?:\n|$)/m);
  const author = authorMatch ? authorMatch[1].trim() : undefined;
  
  // Extract tags from YAML frontmatter if present
  const tagsMatch = content.match(/^---\s*\n(?:.*\n)*?tags:\s*\[(.*?)\]/m);
  const tags = tagsMatch 
    ? tagsMatch[1].split(',').map(tag => tag.trim().replace(/['"]/g, ''))
    : undefined;
  
  return {
    slug,
    title,
    description,
    date,
    author,
    tags
  };
} 