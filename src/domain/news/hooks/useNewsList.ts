import { useQuery } from '@tanstack/react-query';
import { getNewsList } from '@domain/news/apis/getNewsList.ts';
import type { NewsArticle } from '@domain/news/types/news.ts';

export const newsListQueryKey = ['news-list'];

export const useNewsList = () => {
  return useQuery<NewsArticle[]>({
    queryKey: newsListQueryKey,
    queryFn: getNewsList,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
};
