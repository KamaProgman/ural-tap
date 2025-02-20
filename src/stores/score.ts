import { create } from "zustand";

interface ScoreState {
  balance: number;
  level: number;
  levels: number[];
  setBalance: (balance: number) => void;
  addCoins: (amount: number) => void;
  reset: () => void;
}

const baseLevelScore = 0;
const levels = new Array(10).fill(0).map((_, i) => 100 * Math.pow(2, i));

export const useScoreStore = create<ScoreState>((set) => ({
  balance: baseLevelScore,
  level: 1,
  levels,

  setBalance: (balance) =>
    set(() => {
      const newLevel = levels.findIndex((score) => balance < score) + 1 || levels.length;
      return { balance, level: newLevel };
    }),

  addCoins: (amount) =>
    set((state) => {
      const newBalance = state.balance + amount;
      const newLevel = levels.findIndex((score) => newBalance < score) + 1 || levels.length;
      return { balance: newBalance, level: newLevel };
    }),

  reset: () => set({ balance: baseLevelScore, level: 1 }),
}));
