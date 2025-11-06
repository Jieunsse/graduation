import { httpClient } from '@shared/api/httpClient.ts';

export interface StartingGrid {
  position: number;
  driver_number: number;
  lap_duration: number;
  meeting_key: number;
  session_key: number;
}

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
