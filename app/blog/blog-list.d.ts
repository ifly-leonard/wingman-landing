import { BlogPost } from './types';

export interface BlogListProps {
  initialPosts: BlogPost[];
}

declare const BlogList: React.FC<BlogListProps>;
export default BlogList; 