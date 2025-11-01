import { openF1Client } from './client.ts';
import type { MeetingInfo } from '../types.ts';

export const getMeetingInfo = async (
  meetingKey: number,
): Promise<MeetingInfo | null> => {
  const { data } = await openF1Client.get<MeetingInfo[]>('/meetings', {
    params: { meeting_key: meetingKey },
  });

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return data[0];
};
