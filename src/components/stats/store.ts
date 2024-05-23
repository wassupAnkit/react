import { create } from "zustand";
import { IStatisticsStore, IStats } from "./interface";

export const useStatisticsStore = create<IStatisticsStore>((set) => ({
  summary: {} as IStats,
  setSummary: (data: IStats) => set({ summary: data }),
}));
