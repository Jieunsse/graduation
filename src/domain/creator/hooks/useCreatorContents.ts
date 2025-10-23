import { useQuery } from '@tanstack/react-query';
import { getCreatorContents } from '@domain/creator/api/youtubeApi.ts';
import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';

export const creatorContentsQueryKey = ['creator-contents'];

export const useCreatorContents = () => {
  return useQuery<CreatorContent[]>({
    queryKey: creatorContentsQueryKey,
    queryFn: getCreatorContents,
    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
  });
};
