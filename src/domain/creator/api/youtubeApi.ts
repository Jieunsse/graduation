import axios from 'axios';
import type { CreatorContent } from '@domain/creator/types/creatorContent.ts';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_API_URL =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=8&q=F1&key=' +
  API_KEY;

const mockUrl = new URL('../mock/creatorMock.json', import.meta.url).href;

export const getCreatorContents = async (): Promise<CreatorContent[]> => {
  try {
    // ✅ 실제 유튜브 API 호출
    const response = await axios.get(YOUTUBE_API_URL);
    const items = response.data.items;

    // ✅ 유튜브 데이터 → 프로젝트용 CreatorContent 타입으로 매핑
    const parsed: CreatorContent[] = items.map((item: any, index: number) => {
      const videoId = item.id?.videoId ?? `youtube-${index}`;
      return {
        id: videoId,
        creator: item.snippet.channelTitle,
        description: item.snippet.title,
        thumbnail: item.snippet.thumbnails.high?.url ?? '',
        profileImage: `https://yt3.googleusercontent.com/ytc/${item.snippet.channelId}=s88-c-k-c0x00ffffff-no-rj`,
        duration: '',
        // ✅ 유튜브 영상 링크 직접 생성
        link: `https://www.youtube.com/watch?v=${videoId}`,
      };
    });

    return parsed;
  } catch (error) {
    console.warn('⚠️ 유튜브 API 요청 실패 — 목업 데이터로 대체합니다.', error);

    // ✅ 실패 시 mock JSON fallback
    const mockResponse = await axios.get<CreatorContent[]>(mockUrl);
    return mockResponse.data;
  }
};
