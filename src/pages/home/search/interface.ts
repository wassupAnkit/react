export interface IUseSearchStore {
  search: string;
  setSearch: (search: string) => void;
  clearSearch: () => void;
  filters: IFilters;
  setFilters: (filters: IFilters) => void;
  clearFilters: () => void;
  dateRange: IDateRange;
  setDateRange: (dateRange: IDateRange) => void;
  clearDateRange: () => void;
}
export interface IFilters {
  type: string;
  recurring: string;
}

export interface IDateRange {
  from: string;
  to: string;
}
