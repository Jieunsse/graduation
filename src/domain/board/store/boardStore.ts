import { create } from 'zustand';
import { mockBoardPosts } from '../data/mockPosts.ts';
import type { BoardPost } from '../types/types.ts';

interface AddPostPayload {
  title: string;
  author: string;
  content: string;
}

interface BoardState {
  posts: BoardPost[];
  addPost: (payload: AddPostPayload) => BoardPost;
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

export const useBoardStore = create<BoardState>((set, get) => ({
  posts: [...mockBoardPosts],
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
      category: '잡담',
      tags: [],
      isNew: true,
      content: parseContent(trimmedContent),
    };

    set({ posts: [newPost, ...posts] });

    return newPost;
  },
}));
