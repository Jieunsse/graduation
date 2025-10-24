import type {
  YouTubeChannelItem,
  YouTubeChannelResponse,
  YouTubeVideoItem,
  YouTubeVideoResponse,
} from '@domain/creator/types/youtube.ts';
import { httpClient } from '@shared/api/httpClient.ts';

const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

const getApiKey = (): string => {
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  if (!apiKey) {
    throw new Error('YouTube API key is not configured');
  }

  return apiKey;
};

const createYouTubeRequestUrl = (
  endpoint: string,
  params: Record<string, string | undefined>,
) => {
  const url = new URL(`${YOUTUBE_API_BASE_URL}/${endpoint}`);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
};

export const getVideoById = async (videoId: string): Promise<YouTubeVideoItem> => {
  const apiKey = getApiKey();
  const url = createYouTubeRequestUrl('videos', {
    id: videoId,
    key: apiKey,
    part: 'snippet,contentDetails',
  });

  const { data } = await httpClient.get<YouTubeVideoResponse>(url);
  const [video] = data.items;

  if (!video) {
    throw new Error(`Video not found for id: ${videoId}`);
  }

  return video;
};

export const getChannelById = async (
  channelId: string,
): Promise<YouTubeChannelItem> => {
  const apiKey = getApiKey();
  const url = createYouTubeRequestUrl('channels', {
    id: channelId,
    key: apiKey,
    part: 'snippet',
  });

  const { data } = await httpClient.get<YouTubeChannelResponse>(url);
  const [channel] = data.items;

  if (!channel) {
    throw new Error(`Channel not found for id: ${channelId}`);
  }

  return channel;
};
