import ReactMarkdown from "react-markdown";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogImage from "@/components/sections/blog/image-with-modal";
import { Metadata } from 'next';

// Define the props for the page component
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
  
  // Get blog post metadata
  const markdownPath = path.join(process.cwd(), 'app/blog/markdown', `${sanitizedSlug}.md`);
  let title = 'Blog Post Not Found';
  let description = 'The requested blog post could not be found.';
  let author = undefined;
  let date = undefined;
  
  try {
    const content = fs.readFileSync(markdownPath, 'utf8');
    const { data } = matter(content);
    
    title = data.title || title;
    description = data.description || description;
    author = data.author;
    date = data.date;
  } catch (error) {
    // File not found, use default metadata
  }
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: date,
      authors: author ? [author] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  // Sanitize the slug to prevent directory traversal attacks
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');
  
  // Construct the path to the markdown file
  const markdownPath = path.join(process.cwd(), 'app/blog/markdown', `${sanitizedSlug}.md`);
  
  // Check if the file exists and parse its content
  let blogPostContent = '';
  let frontmatter: any = {};
  try {
    const content = fs.readFileSync(markdownPath, 'utf8');
    const { data, content: markdownContent } = matter(content);
    blogPostContent = markdownContent;
    frontmatter = data;
  } catch (error) {
    // If the file doesn't exist, return a 404 page
    notFound();
  }

  // Custom components for ReactMarkdown
  const components = {
    // Custom h1 component
    h1: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <h1 className="text-3xl font-bold mb-4 text-blue-600" {...props} />
    ),
    // Custom h2 component
    h2: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-200" {...props} />
    ),
    // Custom h3 component with special styling
    h3: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <h3 className="text-xl font-medium mb-2 text-purple-600 dark:text-purple-400 border-b border-purple-200 dark:border-purple-800 pb-1" {...props} />
    ),
    // Custom blockquote component
    blockquote: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300" {...props} />
    ),
    // Custom code component
    code: ({ node, inline, ...props }: { node?: any; inline?: boolean; [key: string]: any }) => (
      inline ? 
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} /> :
        <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto" {...props} />
    ),
    // Custom link component
    a: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" {...props} />
    ),
    // Custom image component
    img: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <BlogImage {...props} />
    ),
    // Custom table components
    table: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4" {...props} />
    ),
    th: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800" {...props} />
    ),
    td: ({ node, ...props }: { node?: any; [key: string]: any }) => (
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props} />
    ),
  };

  return (
    <div className="container mx-auto px-4 py-8">      
      <div className="max-w-3xl mx-auto">
        {/* Blog post header */}
        <header className="mb-8">
          {frontmatter.cover && (
            <div className="mb-6">
              <img 
                src={frontmatter.cover} 
                alt={frontmatter.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4 text-blue-500">{frontmatter.title}</h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-4">
            {frontmatter.author && <span className="mr-4"> By <span className="text-blue-500 font-bold">{frontmatter.author}</span></span>}
            {frontmatter.date && <span>{new Date(frontmatter.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>}
          </div>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span 
                  key={tag} 
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </header>
        
        {/* Blog post content */}
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown components={components}>{blogPostContent}</ReactMarkdown>         
        </div>
      </div>
    </div>
  );
} 