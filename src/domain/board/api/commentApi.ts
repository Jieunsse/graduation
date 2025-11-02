import { httpClient } from '@shared/api/httpClient.ts';

export interface Comment {
  commentId?: number;
  id?: number;
  postId: number;
  userId?: number;
  content?: string;
  body?: string;
  createdAt?: string;
  updatedAt?: string;
  author?: string;
  username?: string;
  nickname?: string;
}

export interface CreateCommentRequest {
  postId: number;
  content: string;
}

const extractComments = (payload: unknown): Comment[] => {
  if (Array.isArray(payload)) {
    return payload as Comment[];
  }

  if (payload && typeof payload === 'object') {
    const data = payload as Record<string, unknown>;

    if (Array.isArray(data.comments)) {
      return data.comments as Comment[];
    }

    if (Array.isArray(data.data)) {
      return data.data as Comment[];
    }
  }

  return [];
};

const extractComment = (payload: unknown): Comment | null => {
  if (!payload) {
    return null;
  }

  if (payload && typeof payload === 'object') {
    return payload as Comment;
  }

  return null;
};

export const getCommentsByPostId = async (postId: number): Promise<Comment[]> => {
  const response = await httpClient.get(`/comments/post/${postId}`);
  return extractComments(response.data);
};

export const createComment = async (
  payload: CreateCommentRequest
): Promise<Comment | null> => {
  const response = await httpClient.post('/comments', payload);
  return extractComment(response.data);
};
