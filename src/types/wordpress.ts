export interface WPPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    }
  };
  categories?: {
    nodes: {
      name: string;
      slug: string;
    }[]
  };
  tags?: {
    nodes: {
      name: string;
    }[]
  };
  author?: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
      description?: string;
    }
  };
}
