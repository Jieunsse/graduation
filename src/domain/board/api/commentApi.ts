import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface Comment {
  commentId: number;
  postId: number;
  userId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCommentRequest {
  postId: number;
  userId: number;
  content: string;
}

export type UpdateCommentRequest = Partial<Pick<Comment, 'content'>>;

export const getAllComments = async (): Promise<Comment[]> => {
  const response: AxiosResponse<Comment[]> = await httpClient.get('/comments');
  return response.data;
};

export const getCommentById = async (commentId: number): Promise<Comment> => {
  const response: AxiosResponse<Comment> = await httpClient.get(
    `/comments/${commentId}`
  );
  return response.data;
};

export const createComment = async (
  payload: CreateCommentRequest
): Promise<Comment> => {
  const response: AxiosResponse<Comment> = await httpClient.post(
    '/comments',
    payload
  );
  return response.data;
};

export const updateComment = async (
  commentId: number,
  payload: UpdateCommentRequest
): Promise<Comment> => {
  const response: AxiosResponse<Comment> = await httpClient.put(
    `/comments/${commentId}`,
    payload
  );
  return response.data;
};

export const deleteComment = async (commentId: number): Promise<void> => {
  await httpClient.delete(`/comments/${commentId}`);
};
