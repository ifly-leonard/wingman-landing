import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from './blog-list';
import { BlogPost } from './types';

export default function BlogIndex() {
  // Get all markdown files from the markdown directory
  const markdownDir = path.join(process.cwd(), 'app/blog/markdown');
  const files = fs.readdirSync(markdownDir);
  
  // Filter for markdown files and extract their metadata
  const blogPosts: BlogPost[] = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace('.md', '');
      const filePath = path.join(markdownDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Parse frontmatter
      const { data, content: markdownContent } = matter(content);
      
      // Extract description from first paragraph if not in frontmatter
      let description = data.description;
      if (!description) {
        const descriptionMatch = markdownContent.match(/^(.+?)(?:\n\n|$)/s);
        description = descriptionMatch ? descriptionMatch[1].trim() : undefined;
      }
      
      return {
        slug,
        title: data.title || slug,
        description,
        date: data.date,
        author: data.author,
        tags: data.tags,
        category: data.category,
        cover: data.cover,
        featured: data.featured || false,
        path: `/blog/${slug}`
      };
    })
    .sort((a, b) => {
      // Sort by date if available, otherwise by title
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  return <BlogList initialPosts={blogPosts} />;
}