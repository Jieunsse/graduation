import type { AxiosResponse } from 'axios';
import { httpClient } from '@shared/api/httpClient.ts';

export interface Post {
  postId: number;
  userId: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostRequest {
  userId: number;
  title: string;
  content: string;
  category: string;
  tags?: string[];
}

export type UpdatePostRequest = Partial<
  Omit<Post, 'postId' | 'userId' | 'createdAt' | 'updatedAt'>
>;

export const getAllPosts = async (): Promise<Post[]> => {
  const response: AxiosResponse<Post[]> = await httpClient.get('/posts');
  return response.data;
};

export const getPostById = async (postId: number): Promise<Post> => {
  const response: AxiosResponse<Post> = await httpClient.get(
    `/posts/${postId}`
  );
  return response.data;
};

export const createPost = async (payload: CreatePostRequest): Promise<Post> => {
  const response: AxiosResponse<Post> = await httpClient.post(
    '/posts',
    payload
  );
  return response.data;
};

export const updatePost = async (
  postId: number,
  payload: UpdatePostRequest
): Promise<Post> => {
  const response: AxiosResponse<Post> = await httpClient.put(
    `/posts/${postId}`,
    payload
  );
  return response.data;
};

export const deletePost = async (postId: number): Promise<void> => {
  await httpClient.delete(`/posts/${postId}`);
};
