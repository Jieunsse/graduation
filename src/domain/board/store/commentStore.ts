import { isAxiosError } from 'axios';
import { create } from 'zustand';
import {
  createComment,
  getCommentsByPostId,
  type Comment,
} from '@domain/board/api/commentApi.ts';

interface CommentState {
  comments: Comment[];
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;
  fetchComments: (postId: number) => Promise<void>;
  addComment: (postId: number, content: string) => Promise<void>;
  clearError: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  isLoading: false,
  isSubmitting: false,
  error: null,
  fetchComments: async (postId) => {
    set({ isLoading: true, error: null });

    try {
      const comments = await getCommentsByPostId(postId);
      set({ comments, isLoading: false, error: null });
    } catch (error) {
      console.error('Failed to fetch comments', error);
      set({
        comments: [],
        isLoading: false,
        error: '댓글을 불러오지 못했습니다.',
      });
    }
  },
  addComment: async (postId, content) => {
    set({ isSubmitting: true });

    try {
      await createComment({ postId, content });
      const refreshed = await getCommentsByPostId(postId);
      set({ comments: refreshed, isSubmitting: false, error: null });
    } catch (error) {
      console.error('Failed to create comment', error);
      if (isAxiosError(error) && error.response?.status === 401) {
        set({
          isSubmitting: false,
          error: '로그인 후 댓글을 작성할 수 있습니다.',
        });
        throw error;
      }

      set({ isSubmitting: false, error: '댓글을 등록하지 못했습니다.' });
      throw error;
    }
  },
  clearError: () => set({ error: null }),
}));
