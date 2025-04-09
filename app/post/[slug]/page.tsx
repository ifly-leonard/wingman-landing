import ReactMarkdown from "react-markdown";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogImage from "@/components/sections/blog/image-with-modal";
import { Metadata } from 'next';
import DisqusComments from "@/components/sections/blog/disqus";
import Link from "next/link";

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
  const markdownPath = path.join(process.cwd(), 'app/post/markdown', `${sanitizedSlug}.md`);

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
    h1: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <h1 className="m-4 text-4xl font-bold mb-4 text-blue-600" {...props} />
    ),
    // Custom h2 component
    h2: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <h2 className="mt-3 text-2xl font-semibold mb-3 text-blue-600 dark:text-gray-200" {...props} />
    ),
    // Custom h3 component with special styling
    h3: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <h3 className="mt-2 text-lg font-semibold mb-2 text-blue-500 dark:text-blue-400 border-b border-purple-200 dark:border-blue-800 pb-1" {...props} />
    ),
    // Custom blockquote component
    blockquote: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300" {...props} />
    ),
    // Custom code component
    code: ({ node, inline, ...props }: { node?: any; inline?: boolean;[key: string]: any }) => (
      inline ?
        <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props} /> :
        <code className="block bg-gray-100 dark:bg-gray-800 p-3 rounded-md overflow-x-auto" {...props} />
    ),
    // Custom link component
    a: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <a className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" {...props} />
    ),
    // Custom image component
    img: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <span className="flex justify-center mt-4">
        <BlogImage {...props} />
      </span>
    ),
    // Custom table components
    table: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4" {...props} />
    ),
    th: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800" {...props} />
    ),
    td: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props} />
    ),

    hr: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700" {...props} />
    ),

    em: ({ node, ...props }: { node?: any;[key: string]: any }) => (
      <em className="underline underline-offset-2 underline-blue-500" {...props} />
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
              <img
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
          <div className="mt-5 p-5 rounded-lg shadow">
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
            <div className="flex justify-between gap-3">
              <div className="group border-2 border-gray-300 hover:border-blue-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500">
                <h2 className="text-md font-bold">The Flight to ATPL: Conquering Paperwork and Soaring High</h2>
                <div className="flex mt-4 space-x-3 text-sm">
                  <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                    #tag1
                  </div>
                  <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                    #tag2
                  </div>
                </div>
              </div>
              <div className="group border-2 border-gray-300 hover:border-gray-500 transition duration-300 cursor-pointer p-3 rounded-md w-full text-gray-500">
                <h2 className="text-md font-bold">The Flight to ATPL: Conquering Paperwork and Soaring High</h2>
                <div className="flex mt-4 space-x-3 text-sm">
                  <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                    #tag1
                  </div>
                  <div className="bg-zinc-700 px-3 py-1 text-white hover:bg-zinc-900 cursor-pointer transition duration-500 rounded-md">
                    #tag2
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
} 