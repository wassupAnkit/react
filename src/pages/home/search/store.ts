import { create } from "zustand";
import { IUseSearchStore } from "./interface";

export const useSearchStore = create<IUseSearchStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
  clearSearch: () => set({ search: "" }),
  filters: {
    type: "",
    recurring: "",
  },
  setFilters: (filters) =>
    set((state) => ({ filters: { ...state.filters, ...filters } })),
  clearFilters: () => set({ filters: { type: "", recurring: "" } }),
  dateRange: {
    from: "",
    to: "",
  },
  setDateRange: (dateRange) =>
    set((state) => ({ dateRange: { ...state.dateRange, ...dateRange } })),
  clearDateRange: () => set({ dateRange: { from: "", to: "" } }),
}));
