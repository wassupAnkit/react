import { IRegisterData } from "../auth/interface";

export interface IBudgetData {
  id: string;
  name: string;
  date: string;
  type: string;
  recurring: string;
  amount: number;
  user: IUserData;
}
export interface IBudgetDataError {
  name: string;
  date: string;
  type: string;
  recurring: string;
  amount: string;
}
export interface IUseBudgetStore {
  budgetData: IBudgetData;
  setBudgetData: (data: IBudgetData) => void;
  clearBudgetData: () => void;
  budgetDataError: IBudgetDataError;
  setBudgetDataError: (data: IBudgetDataError) => void;
  clearBudgetDataError: () => void;
  budgets: IBudgetData[];
  setBudgets: (data: IBudgetData[]) => void;
}

export interface IUserData extends IRegisterData {}
