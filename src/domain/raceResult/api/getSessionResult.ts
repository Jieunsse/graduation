import { openF1Client } from './client.ts';
import type { SessionResult } from '../types.ts';

export const getSessionResult = async (
  sessionKey: number,
): Promise<SessionResult[]> => {
  const { data } = await openF1Client.get<SessionResult[]>(
    '/session_result',
    {
      params: { session_key: sessionKey },
    },
  );

  return data
    .filter((result) => typeof result.driver_number === 'number')
    .sort((a, b) => {
      const positionA = a.position ?? Number.POSITIVE_INFINITY;
      const positionB = b.position ?? Number.POSITIVE_INFINITY;
      return positionA - positionB;
    });
};
