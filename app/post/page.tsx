import fs from 'fs'; // Import the file system module for file operations
import path from 'path'; // Import the path module for path manipulation
import matter from 'gray-matter'; // Import gray-matter for parsing markdown frontmatter
import BlogList from './blog-list'; // Import the BlogList component for rendering blog posts
import { BlogPost } from './types'; // Import the BlogPost interface for type checking

/**
 * The BlogIndex component.
 * This component fetches all markdown files from the markdown directory, extracts their metadata,
 * and renders them using the BlogList component.
 */
export default function BlogIndex() {
  // Define the directory path for markdown files
  const markdownDir = path.join(process.cwd(), 'app/post/markdown');
  // Read all files in the markdown directory
  const files = fs.readdirSync(markdownDir);
  
  // Filter markdown files, extract their metadata, and map them to BlogPost objects
  const blogPosts: BlogPost[] = files
    .filter(file => file.endsWith('.md')) // Filter for markdown files
    .map(file => {
      const slug = file.replace('.md', ''); // Extract the slug from the file name
      const filePath = path.join(markdownDir, file); // Construct the full file path
      const content = fs.readFileSync(filePath, 'utf8'); // Read the file content
      
      // Parse the markdown content to extract frontmatter and content
      const { data, content: markdownContent } = matter(content);
      
      // Extract description from the first paragraph if not present in frontmatter
      let description = data.description;
      if (!description) {
        const descriptionMatch = markdownContent.match(/^(.+?)(?:\n\n|$)/s);
        description = descriptionMatch ? descriptionMatch[1].trim() : undefined;
      }
      
      // Construct and return a BlogPost object
      return {
        slug,
        title: data.title || slug, // Use the slug as title if not provided
        description,
        date: data.date,
        author: data.author,
        tags: data.tags,
        category: data.category,
        cover: data.cover,
        featured: data.featured || false, // Default to false if not specified
        path: `/post/${slug}` // Construct the URL path for the blog post
      };
    })
    .sort((a, b) => {
      // Sort blog posts by date if available, otherwise by title
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.title.localeCompare(b.title);
    });

  // Render the BlogList component with the sorted blog posts
  return <BlogList initialPosts={blogPosts} />;
}