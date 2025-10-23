import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface EventLog {
  eventLogId: number;
  raceId: number;
  driverId: string;
  eventType: string;
  description: string;
  eventTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateEventLogRequest {
  raceId: number;
  driverId?: string;
  eventType: string;
  description: string;
  eventTime: string;
}

export type UpdateEventLogRequest = Partial<
  Omit<EventLog, 'eventLogId' | 'createdAt' | 'updatedAt'>
>;

export const getAllEventLogs = async (): Promise<EventLog[]> => {
  const response: AxiosResponse<EventLog[]> = await httpClient.get('/eventlog');
  return response.data;
};

export const getEventLogById = async (
  eventLogId: number
): Promise<EventLog> => {
  const response: AxiosResponse<EventLog> = await httpClient.get(
    `/eventlog/${eventLogId}`
  );
  return response.data;
};

export const createEventLog = async (
  payload: CreateEventLogRequest
): Promise<EventLog> => {
  const response: AxiosResponse<EventLog> = await httpClient.post(
    '/eventlog',
    payload
  );
  return response.data;
};

export const updateEventLog = async (
  eventLogId: number,
  payload: UpdateEventLogRequest
): Promise<EventLog> => {
  const response: AxiosResponse<EventLog> = await httpClient.put(
    `/eventlog/${eventLogId}`,
    payload
  );
  return response.data;
};

export const deleteEventLog = async (eventLogId: number): Promise<void> => {
  await httpClient.delete(`/eventlog/${eventLogId}`);
};
