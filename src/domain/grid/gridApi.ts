import { httpClient } from '@shared/api/httpClient.ts';

export interface StartingGrid {
  position: number;
  driver_number: number;
  lap_duration: number;
  meeting_key: number;
  session_key: number;
}

/**
 * 🔹 OpenF1 Starting Grid API
 * 특정 세션(session_key)의 스타팅 그리드 데이터를 조회합니다.
 * @param sessionKey - 세션 키 (예: 7783)
 * @param maxPosition - 가져올 최대 포지션 (예: 3 → 상위 3명)
 */
export const getStartingGrid = async (
  sessionKey: number,
  maxPosition: number
): Promise<StartingGrid[]> => {
  try {
    const response = await httpClient.get<StartingGrid[]>(
      `https://api.openf1.org/v1/starting_grid?session_key=${sessionKey}&position<=${maxPosition}`
    );
    return response.data;
  } catch (error) {
    console.error('❌ Failed to fetch starting grid:', error);
    throw error;
  }
};
