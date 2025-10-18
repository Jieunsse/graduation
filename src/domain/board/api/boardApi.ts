import axios from 'axios';
import { mockBoardPosts } from '../data/mockPosts.ts';
import type { BoardPost } from '../types/types.ts';

const boardClient = axios.create({
  baseURL: '/api/board',
});

export interface CreatePostPayload {
  title: string;
  author: string;
  content: string;
}

const formatDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const parseContent = (value: string) =>
  value
    .split(/\n{2,}/)
    .map((item) => item.trim())
    .filter(Boolean);

export const getPosts = async (): Promise<BoardPost[]> => {
  if (import.meta.env.DEV) {
    return Promise.resolve([...mockBoardPosts]);
  }

  const response = await boardClient.get<BoardPost[]>('/');
  return response.data;
};

export const createPost = async (
  payload: CreatePostPayload
): Promise<BoardPost> => {
  if (import.meta.env.DEV) {
    return Promise.resolve({
      id: Date.now(),
      title: payload.title.trim(),
      author: payload.author.trim(),
      createdAt: formatDateTime(),
      views: 0,
      comments: 0,
      likes: 0,
      category: '잡담',
      tags: [],
      isNew: true,
      content: parseContent(payload.content.trim()),
    });
  }

  const response = await boardClient.post<BoardPost>('/', payload);
  return response.data;
};
