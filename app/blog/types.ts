export interface BlogPost {
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