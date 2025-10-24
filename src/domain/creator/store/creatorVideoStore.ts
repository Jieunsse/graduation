import { create } from 'zustand';

interface CreatorVideoState {
  selectedVideoId: string | null;
  selectVideo: (videoId: string) => void;
  clearSelection: () => void;
}

export const useCreatorVideoStore = create<CreatorVideoState>((set) => ({
  selectedVideoId: null,
  selectVideo: (videoId) => set({ selectedVideoId: videoId }),
  clearSelection: () => set({ selectedVideoId: null }),
}));
