import Link from "next/link"
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import SectionHeader from "@/components/ui/section-header";

interface BlogPost {
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
  
  // Separate featured and regular posts
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeader header="Blog Posts" subheader="Read our latest articles" />
      
      <div className="max-w-3xl mx-auto mt-8">
        {blogPosts.length > 0 ? (
          <div className="grid gap-6">
            {/* Featured posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Posts</h2>
                <div className="grid gap-6">
                  {featuredPosts.map(post => (
                    <Link 
                      key={post.slug} 
                      href={post.path}
                      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      {post.cover && (
                        <div className="mb-4">
                          <img 
                            src={post.cover} 
                            alt={post.title}
                            className="w-full h-48 object-cover rounded-md"
                          />
                        </div>
                      )}
                      <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
                      {post.description && (
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="text-blue-600 dark:text-blue-400">Read more →</div>
                        {post.date && (
                          <div className="text-sm text-gray-500 dark:text-gray-500">{post.date}</div>
                        )}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.map(tag => (
                            <span 
                              key={tag} 
                              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Regular posts */}
            <div className="grid gap-6">
              {regularPosts.map(post => (
                <Link 
                  key={post.slug} 
                  href={post.path}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {post.cover && (
                    <div className="mb-4">
                      <img 
                        src={post.cover} 
                        alt={post.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
                  {post.description && (
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600 dark:text-blue-400">Read more →</div>
                    {post.date && (
                      <div className="text-sm text-gray-500 dark:text-gray-500">{post.date}</div>
                    )}
                  </div>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-md text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">No blog posts found.</p>
          </div>
        )}
      </div>
    </div>
  );
}