import ReactMarkdown from "react-markdown";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogImage from "@/components/sections/blog/image-with-modal";
import { Metadata } from 'next';
import DisqusComments from "@/components/sections/blog/disqus";
import Link from "next/link";
import FallbackImage from "@/components/ui/fallback-image";
import { ComponentPropsWithoutRef } from "react";

// Define the props for the page component
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

interface BlogFrontmatter {
  title: string;
  description?: string;
  date?: string;
  author?: string;
  cover?: string;
  tags?: string[];
  category?: string;
  [key: string]: string | string[] | undefined;
}

// Function to get all blog posts
function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'app/post/markdown');
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter(filename => !filename.startsWith('_') && filename !== 'template.mdx') // Filter out template files
    .map(filename => {
      const fileContent = fs.readFileSync(path.join(postsDirectory, filename), 'utf8');
      const { data } = matter(fileContent);
      const slug = filename.replace(/\.md$/, '');
      
      return {
        slug,
        ...data as BlogFrontmatter
      };
    });
}

// Function to get related posts
function getRelatedPosts(currentSlug: string, tags: string[] = [], category?: string, limit = 2) {
  const allPosts = getAllBlogPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  
  if (!currentPost) return [];
  
  // Score posts based on matching tags and category
  const scoredPosts = allPosts
    .filter(post => post.slug !== currentSlug) // Exclude current post
    .map(post => {
      let score = 0;
      
      // Score based on matching tags
      const postTags = post.tags || [];
      postTags.forEach(tag => {
        if (tags.includes(tag)) {
          score += 1;
        }
      });
      
      // Score based on matching category
      if (category && post.category === category) {
        score += 2; // Weight category matches higher
      }
      
      return { ...post, score };
    })
    .filter(post => post.score > 0) // Only include posts with at least one match
    .sort((a, b) => b.score - a.score) // Sort by score (highest first)
    .slice(0, limit); // Limit to specified number
  
  // If not enough related posts, add recent posts
  if (scoredPosts.length < limit) {
    const recentPosts = allPosts
      .filter(post => post.slug !== currentSlug && !scoredPosts.some(rp => rp.slug === post.slug))
      .sort((a, b) => {
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, limit - scoredPosts.length);
    
    return [...scoredPosts, ...recentPosts];
  }
  
  return scoredPosts;
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');

  // Get blog post metadata
  const markdownPath = path.join(process.cwd(), 'app/post/markdown', `${sanitizedSlug}.md`);
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
  } catch (fileError) {
    // File not found, use default metadata
    console.warn('Metadata file not found:', fileError);
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

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Sanitize the slug to prevent directory traversal attacks
  const sanitizedSlug = slug.replace(/[^a-zA-Z0-9-_]/g, '');

  // Construct the path to the markdown file
  const markdownPath = path.join(process.cwd(), 'app/post/markdown', `${sanitizedSlug}.md`);

  // Check if the file exists and parse its content
  let blogPostContent = '';
  
  let frontmatter: BlogFrontmatter = {
    title: ''
  };
  try {
    const content = fs.readFileSync(markdownPath, 'utf8');
    const { data, content: markdownContent } = matter(content);
    blogPostContent = markdownContent;
    frontmatter = data as BlogFrontmatter;
  } catch (fileError) {
    // If the file doesn't exist, return a 404 page
    console.error('Blog post file not found:', fileError);
    notFound();
  }

  // Get related posts
  const relatedPosts = getRelatedPosts(
    sanitizedSlug, 
    frontmatter.tags || [], 
    frontmatter.category
  );

  // Define types for custom components
  type CustomComponentProps = {
    [key: string]: any;
    node?: any;
    children?: React.ReactNode;
  };

  // Custom components for ReactMarkdown
  const components: Record<string, React.ComponentType<any>> = {
    h1: ({ children, ...props }: CustomComponentProps) => (
      <h1 className="text-4xl text-left font-bold mb-4 text-blue-600" {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }: CustomComponentProps) => (
      <h2 className="mt-3 text-2xl font-semibold mb-3 text-blue-600 dark:text-gray-200" {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }: CustomComponentProps) => (
      <h3 className="mt-2 text-lg font-semibold mb-2 text-blue-500 dark:text-blue-400 border-b border-purple-200 dark:border-blue-800 pb-1" {...props}>{children}</h3>
    ),
    blockquote: ({ children, ...props }: CustomComponentProps) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300" {...props}>{children}</blockquote>
    ),
    code: ({ inline, children, ...props }: CustomComponentProps & { inline?: boolean }) => (
      inline ?
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>{children}</code> :
        <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto" {...props}>{children}</code>
    ),
    a: ({ children, ...props }: CustomComponentProps) => (
      <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" {...props}>{children}</a>
    ),
    img: ({ src, alt, ...props }: { src?: string, alt?: string } & CustomComponentProps) => (
      <span className="flex justify-center mt-4">
        <BlogImage src={src} alt={alt} {...props} />
      </span>
    ),
    table: ({ children, ...props }: CustomComponentProps) => (
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4" {...props}>{children}</table>
    ),
    th: ({ children, ...props }: CustomComponentProps) => (
      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800" {...props}>{children}</th>
    ),
    td: ({ children, ...props }: CustomComponentProps) => (
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props}>{children}</td>
    ),
    hr: ({ ...props }: CustomComponentProps) => (
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" {...props} />
    ),
    em: ({ children, ...props }: CustomComponentProps) => (
      <em className="underline underline-offset-2 underline-blue-500" {...props}>{children}</em>
    ),
  };

  return (
    <div className="container mx-auto px-4 py-8">      
      <div className="max-w-3xl mx-auto">

      <div className="flex items-center justify-center mx-auto">
          <ol className="flex items-center whitespace-nowrap mt-10 mb-10 transition duration-250 cursor-pointer rounded-md px-3 py-1">
              <li className="inline-flex items-center">
                  <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
                      Home
                  </Link>
                  <svg
                      className="shrink-0 mx-2 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                      <path d="m9 18 6-6-6-6" />
                  </svg>
              </li>
              <li className="inline-flex items-center">
                  <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/post">
                      Blogs
                  </Link>
                  <svg
                      className="shrink-0 mx-2 size-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                  >
                      <path d="m9 18 6-6-6-6" />
                  </svg>
              </li>
              <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                  {frontmatter.title}
              </li>
          </ol>
      </div>

        {/* Blog post header */}
        <header className="mb-8">
          {frontmatter.cover && (
            <div className="mb-6">
              <FallbackImage
                src={frontmatter.cover}
                alt={frontmatter.title}
                className="w-full h-auto object-cover rounded-lg"
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
        <div className="prose dark:prose-invert max-w-none text-justify">
          <ReactMarkdown components={components}>{blogPostContent}</ReactMarkdown>

          {/* This is the comments component */}
          <div className="mt-5 p-5 rounded-lg">
            <DisqusComments
              post={{
                id: sanitizedSlug,
                title: frontmatter.title,
                url: sanitizedSlug
              }}
            />
          </div>

          <div className="mt-12">
            <div className="mb-2">
              <p className="text-center italic">
                Related articles
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-3">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/post/${post.slug}`}
                    className="w-full"
                  >
                    <div className="group border-2 border-gray-300 hover:border-blue-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500 h-full">
                      <h2 className="text-md font-bold">{post.title}</h2>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap mt-4 gap-2">
                          {post.tags.map((tag) => (
                            <div 
                              key={tag}
                              className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md text-xs"
                            >
                              #{tag}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center w-full py-3 text-gray-500">
                  No related articles found
                </div>
              )}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
} 