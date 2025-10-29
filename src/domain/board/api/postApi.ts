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

export interface TogglePostLikeResponse {
  liked: boolean;
  likeCount?: number;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const response = await httpClient.get<Post[]>('/posts');
  return response.data;
};

export const getPostsByType = async (postType: string): Promise<Post[]> => {
  const response = await httpClient.get<Post[]>(
    `/posts/type/${encodeURIComponent(postType)}`
  );
  return response.data;
};

export const searchPosts = async (keyword: string): Promise<Post[]> => {
  const response = await httpClient.get<Post[]>('/posts/search', {
    params: { keyword },
  });
  return response.data;
};

export const getNoticePosts = async (): Promise<Post[]> => {
  const response = await httpClient.get<Post[]>('/posts/notices');
  return response.data;
};

export const getHotPosts = async (): Promise<Post[]> => {
  const response = await httpClient.get<Post[]>('/posts/hot');
  return response.data;
};

export const getPostById = async (postId: number): Promise<Post> => {
  const response = await httpClient.get<Post>(`/posts/${postId}`);
  return response.data;
};

export const createPost = async (payload: CreatePostRequest): Promise<Post> => {
  const response = await httpClient.post<Post>('/posts', payload);
  return response.data;
};

export const updatePost = async (
  postId: number,
  payload: UpdatePostRequest
): Promise<Post> => {
  const response = await httpClient.put<Post>(`/posts/${postId}`, payload);
  return response.data;
};

export const deletePost = async (postId: number): Promise<void> => {
  await httpClient.delete(`/posts/${postId}`);
};

export const togglePostLike = async (
  postId: number
): Promise<TogglePostLikeResponse> => {
  const response = await httpClient.post<TogglePostLikeResponse>(
    `/posts/${postId}/like`
  );
  return response.data;
};
