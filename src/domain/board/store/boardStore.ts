import { create } from 'zustand';
import { httpClient } from '@shared/api/httpClient.ts';
import type { BoardPost } from '../types/types.ts';

type UserSelectableCategory = Exclude<BoardPost['category'], '공지'>;

interface AddPostPayload {
  title: string;
  author: string;
  content: string;
  category: UserSelectableCategory;
}

interface BoardState {
  posts: BoardPost[];
  isLoading: boolean;
  error: string | null;
  addPost: (payload: AddPostPayload) => BoardPost;
  fetchAllPosts: () => Promise<void>;
  fetchPostsByType: (postType: string) => Promise<void>;
  fetchNotices: () => Promise<void>;
  searchPosts: (keyword: string) => Promise<void>;
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

const CATEGORY_SERVER_TO_CLIENT = {
  NOTICE: '공지',
  INFORMATION: '정보',
  CHAT: '잡담',
  REVIEW: '후기',
  QUESTION: '질문',
} as const satisfies Record<string, BoardPost['category']>;

const SERVER_CATEGORY_VALUES = Object.values(
  CATEGORY_SERVER_TO_CLIENT
) as BoardPost['category'][];

type CategoryServerKey = keyof typeof CATEGORY_SERVER_TO_CLIENT;

const normalizeCategory = (value: unknown): BoardPost['category'] => {
  if (typeof value === 'string') {
    if (SERVER_CATEGORY_VALUES.includes(value as BoardPost['category'])) {
      return value as BoardPost['category'];
    }

    const upperValue = value.toUpperCase() as CategoryServerKey;
    if (upperValue in CATEGORY_SERVER_TO_CLIENT) {
      return CATEGORY_SERVER_TO_CLIENT[upperValue];
    }
  }

  return '잡담';
};

const normalizeString = (value: unknown): string => {
  if (typeof value === 'string') {
    return value;
  }

  if (value instanceof Date) {
    return value.toISOString();
  }

  if (typeof value === 'number') {
    return String(value);
  }

  return '';
};

const normalizeNumber = (value: unknown): number => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeTags = (value: unknown): string[] | undefined => {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return undefined;
};

const normalizeContentBlocks = (value: unknown): string[] | undefined => {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === 'string');
  }

  if (typeof value === 'string' && value.trim().length > 0) {
    return parseContent(value);
  }

  return undefined;
};

const normalizePost = (post: unknown): BoardPost => {
  const raw = post as Record<string, unknown>;
  const normalizedCategory = normalizeCategory(raw?.category ?? raw?.postType);

  return {
    id: normalizeNumber(raw?.id ?? raw?.postId ?? Date.now()),
    title: normalizeString(raw?.title),
    author: normalizeString(raw?.author ?? raw?.writer),
    createdAt: normalizeString(raw?.createdAt ?? raw?.created_at),
    views: normalizeNumber(raw?.views ?? raw?.viewCount),
    comments: normalizeNumber(raw?.comments ?? raw?.commentCount),
    likes: normalizeNumber(raw?.likes ?? raw?.likeCount),
    category: normalizedCategory,
    tags: normalizeTags(raw?.tags ?? raw?.tagList),
    isNotice: Boolean(raw?.isNotice ?? (normalizedCategory === '공지')),
    isNew: Boolean(raw?.isNew),
    isHot: Boolean(raw?.isHot),
    content: normalizeContentBlocks(raw?.content ?? raw?.contentBlocks),
  };
};

const extractPosts = (payload: unknown): BoardPost[] => {
  if (Array.isArray(payload)) {
    return payload.map(normalizePost);
  }

  if (payload && typeof payload === 'object') {
    const data = payload as Record<string, unknown>;

    if (Array.isArray(data.posts)) {
      return data.posts.map(normalizePost);
    }

    if (Array.isArray(data.content)) {
      return data.content.map(normalizePost);
    }

    if (Array.isArray(data.data)) {
      return data.data.map(normalizePost);
    }
  }

  return [];
};

export const useBoardStore = create<BoardState>((set, get) => ({
  posts: [],
  isLoading: false,
  error: null,
  addPost: (payload) => {
    const trimmedTitle = payload.title.trim();
    const trimmedAuthor = payload.author.trim();
    const trimmedContent = payload.content.trim();
    const { posts } = get();
    const nextId =
      posts.reduce((max, post) => (post.id > max ? post.id : max), 0) + 1;

    const newPost: BoardPost = {
      id: nextId,
      title: trimmedTitle,
      author: trimmedAuthor,
      createdAt: formatDateTime(),
      views: 0,
      comments: 0,
      likes: 0,
      category: payload.category,
      tags: [],
      isNew: true,
      content: parseContent(trimmedContent),
    };

    set({ posts: [newPost, ...posts] });

    return newPost;
  },
  fetchAllPosts: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await httpClient.get('/posts');
      const posts = extractPosts(response.data);
      set({ posts, isLoading: false, error: null });
    } catch (error) {
      console.error('Failed to fetch posts', error);
      set({ isLoading: false, error: '게시글을 불러오지 못했습니다.' });
    }
  },
  fetchPostsByType: async (postType) => {
    set({ isLoading: true, error: null });

    try {
      const response = await httpClient.get(`/posts/type/${postType}`);
      const posts = extractPosts(response.data);
      set({ posts, isLoading: false, error: null });
    } catch (error) {
      console.error('Failed to fetch posts by type', error);
      set({ isLoading: false, error: '게시글을 불러오지 못했습니다.' });
    }
  },
  fetchNotices: async () => {
    set({ isLoading: true, error: null });

    try {
      const response = await httpClient.get('/posts/notices');
      const posts = extractPosts(response.data);
      set({ posts, isLoading: false, error: null });
    } catch (error) {
      console.error('Failed to fetch notices', error);
      set({ isLoading: false, error: '게시글을 불러오지 못했습니다.' });
    }
  },
  searchPosts: async (keyword) => {
    if (!keyword.trim()) {
      return get().fetchAllPosts();
    }

    set({ isLoading: true, error: null });

    try {
      const response = await httpClient.get('/posts/search', {
        params: { keyword },
      });
      const posts = extractPosts(response.data);
      set({ posts, isLoading: false, error: null });
    } catch (error) {
      console.error('Failed to search posts', error);
      set({ isLoading: false, error: '게시글을 불러오지 못했습니다.' });
    }
  },
}));

export type { UserSelectableCategory };
