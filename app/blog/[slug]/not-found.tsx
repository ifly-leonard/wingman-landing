import Link from 'next/link';
//TODO Make this aviation themed. 
export default function BlogPostNotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-xl mb-8">Sorry, the blog post you're looking for doesn't exist or has been moved.</p>
      <Link href="/blog" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
        Return to Blog
      </Link>
    </div>
  );
} 