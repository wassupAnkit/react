export interface IStatCard {
  value: number;
  title: string;
}

export interface IStats {
  total: number;
  income: number;
  expense: number;
  balance: number;
}

export interface IStatisticsStore {
  summary: IStats;
  setSummary: (data: IStats) => void;
}
