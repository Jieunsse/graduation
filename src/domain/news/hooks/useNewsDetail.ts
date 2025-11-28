import { useQuery } from '@tanstack/react-query';
import { getNewsDetail } from '@domain/news/apis/getNewsDetail.ts';
import type { NewsArticleDetail } from '@domain/news/types/news.ts';

export const newsDetailQueryKey = ['news-detail'];

export const useNewsDetail = (id?: string) => {
  return useQuery<NewsArticleDetail | null>({
    queryKey: [...newsDetailQueryKey, id],
    queryFn: () => (id ? getNewsDetail(id) : Promise.resolve(null)),
    enabled: Boolean(id),
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
};
