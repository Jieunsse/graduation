import { create } from 'zustand';

interface GridState {
  sessionKey: number;
  maxPosition: number;
  setSessionKey: (sessionKey: number) => void;
  setMaxPosition: (maxPosition: number) => void;
}

const DEFAULT_SESSION_KEY = 9486;
const DEFAULT_MAX_POSITION = 20;

export const useGridStore = create<GridState>((set) => ({
  sessionKey: DEFAULT_SESSION_KEY,
  maxPosition: DEFAULT_MAX_POSITION,
  setSessionKey: (sessionKey) => {
    set({ sessionKey });
  },
  setMaxPosition: (maxPosition) => {
    set({ maxPosition: Math.max(1, Math.min(20, maxPosition)) });
  },
}));
