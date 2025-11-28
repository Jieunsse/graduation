export interface NewsArticle {
  id: string;
  title: string;
  source: string;
  publishedAt: string;
  thumbnail: string;
  link: string;
  excerpt?: string;
}

export interface NewsArticleDetail extends NewsArticle {
  author?: string;
  updatedAt?: string;
  readingTime?: number;
  tags?: string[];
  content: string[];
}
