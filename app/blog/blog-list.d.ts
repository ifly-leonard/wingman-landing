/**
 * This file exports the BlogList component and its props.
 * The BlogList component is a functional component that takes an array of BlogPost objects as its initialPosts prop.
 * The BlogList component is a React functional component.
 */
import { BlogPost } from './types';

/**
 * The props for the BlogList component.
 * The initialPosts prop is an array of BlogPost objects.
 */
export interface BlogListProps {
  initialPosts: BlogPost[];
}

/**
 * The BlogList component.
 * The BlogList component is a React functional component that takes the BlogListProps as its props.
 */
declare const BlogList: React.FC<BlogListProps>;

/**
 * The default export of this file.
 * The default export is the BlogList component.
 */
export default BlogList; 