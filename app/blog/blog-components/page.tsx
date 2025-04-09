// import DisqusComments from "@/components/sections/blog/disqus";
import BlogImage from "@/components/sections/blog/image-with-modal";
import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';
import fs from 'fs';
import path from 'path';

export default function BlogStyleGuide() {
    // Load markdown content from file
    const markdownPath = path.join(process.cwd(), 'app/blog/markdown/test.md');
    const blogPostContent = fs.readFileSync(markdownPath, 'utf8');

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
            // <img className="rounded-lg shadow-md my-4 max-w-full h-auto" {...props} />
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
        <>
            <SectionHeader header="Blog Style Guide" subheader="Showcasing All Components" />

            <div className="w-full max-w-screen-md mx-auto p-6">
                <h2 className="text-2xl font-semibold">Markdown Rendering</h2>
                <div className="prose dark:prose-invert max-w-none">
                    <ReactMarkdown components={components}>{blogPostContent}</ReactMarkdown>
                </div>
            </div>            
        </>
    );
}
