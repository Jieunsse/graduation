import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';
import type {
  YouTubeChannelItem,
  YouTubeVideoItem,
} from '@domain/creator/types/youtube.ts';
import { getChannelById, getVideoById } from '@domain/creator/api/youtube.ts';
import { httpClient } from '@shared/api/httpClient.ts';

const mockUrl = new URL('../mock/creatorMock.json', import.meta.url).href;

const CREATOR_VIDEO_IDS = [
  'TUP52DS7YwU',
  '7m5Ljqjcd04',
  'S5BvE1OtS-8',
  'OnuX3K7Be1Q',
  'Xy4ulMhz3xo',
  '8sh9pqTYEGY',
  'WZ3A6V8veAc',
  'Y0XJ6T5Ydb0',
];

interface LegacyCreatorContent {
  id: number;
  thumbnail: string;
  profileImage: string;
  creator: string;
  description: string;
  duration: string;
}

const extractVideoIdFromThumbnail = (thumbnailUrl: string): string | null => {
  const match = /\/vi\/([\w-]{6,})\//.exec(thumbnailUrl);
  return match ? match[1] : null;
};

const formatDuration = (isoDuration: string): string => {
  const match = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(isoDuration);

  if (!match) {
    return '00:00';
  }

  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  const hoursPart = Math.floor(totalSeconds / 3600);
  const minutesPart = Math.floor((totalSeconds % 3600) / 60);
  const secondsPart = totalSeconds % 60;

  if (hoursPart > 0) {
    return `${hoursPart}:${String(minutesPart).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
  }

  return `${String(minutesPart).padStart(2, '0')}:${String(secondsPart).padStart(2, '0')}`;
};

const selectBestThumbnail = (item: YouTubeVideoItem | YouTubeChannelItem): string => {
  const thumbnails = item.snippet.thumbnails;

  return (
    thumbnails.maxres?.url ||
    thumbnails.standard?.url ||
    thumbnails.high?.url ||
    thumbnails.medium?.url ||
    thumbnails.default.url
  );
};

const mapToCreatorContent = (
  video: YouTubeVideoItem,
  channel: YouTubeChannelItem,
): CreatorContent => ({
  id: video.id,
  videoUrl: `https://www.youtube.com/watch?v=${video.id}`,
  thumbnail: selectBestThumbnail(video),
  profileImage: selectBestThumbnail(channel),
  creator: channel.snippet.title,
  description: video.snippet.title,
  duration: formatDuration(video.contentDetails.duration),
  channelId: video.snippet.channelId,
  publishedAt: video.snippet.publishedAt,
});

const getFallbackCreatorContents = async (): Promise<CreatorContent[]> => {
  const { data } = await httpClient.get<LegacyCreatorContent[]>(mockUrl);

  return data.map((item) => {
    const videoId = extractVideoIdFromThumbnail(item.thumbnail) ?? String(item.id);

    return {
      id: videoId,
      videoUrl: `https://www.youtube.com/watch?v=${videoId}`,
      thumbnail: item.thumbnail,
      profileImage: item.profileImage,
      creator: item.creator,
      description: item.description,
      duration: item.duration,
    } satisfies CreatorContent;
  });
};

export const getCreatorContents = async (): Promise<CreatorContent[]> => {
  try {
    const videos = await Promise.all(CREATOR_VIDEO_IDS.map(getVideoById));

    const uniqueChannelIds = Array.from(
      new Set(videos.map((video) => video.snippet.channelId)),
    );
    const channels = await Promise.all(uniqueChannelIds.map(getChannelById));
    const channelMap = new Map(channels.map((channel) => [channel.id, channel]));

    return videos
      .map((video) => {
        const channel = channelMap.get(video.snippet.channelId);

        if (!channel) {
          return null;
        }

        return mapToCreatorContent(video, channel);
      })
      .filter((content): content is CreatorContent => content !== null);
  } catch (error) {
    console.error('Failed to fetch YouTube creator contents', error);
    return getFallbackCreatorContents();
  }
};
