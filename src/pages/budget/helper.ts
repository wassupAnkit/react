import { IStats } from "../../components/stats/interface";
import { IBudgetData, IBudgetDataError, IUserData } from "./interface";

export class BudgetHelper {
  // Checks budget data object for any missing required fields
  // Returns an error object containing error messages for any missing fields
  checkBudgetData = (data: IBudgetData) => {
    const errors: IBudgetDataError = {} as IBudgetDataError;
    errors.name = data.name ? "" : "Name is required";
    errors.amount = data.amount ? "" : "Amount is required";
    errors.date = data.date ? "" : "Date is required";
    errors.type = data.type ? "" : "Type is required";
    errors.recurring = data.recurring ? "" : "Recurring is required";
    return errors;
  };
  // Checks if there are any error messages in the budget data error object
  // Returns true if there are errors, false if no errors
  checkErrors = (errors: IBudgetDataError) => {
    // If there are errors in any of the expected fields, return true
    if (
      errors?.amount ||
      errors?.date ||
      errors?.name ||
      errors?.recurring ||
      errors?.type
    ) {
      return true;
    }
    // Otherwise return false
    return false;
  };
  // Adds a new budget data object
  // Validates data, updates local storage,
  // updates budget state and summary statistics
  addBudget = (
    data: IBudgetData,
    setError: (data: IBudgetDataError) => void,
    clearData: () => void,
    setBudgets: (data: IBudgetData[]) => void,
    setSummary: (data: IStats) => void
  ) => {
    // Validate budget data
    const errors = this.checkBudgetData(data);
    if (this.checkErrors(errors)) {
      setError(errors);
      return;
    }

    // If no errors, update budgets and stats
    setError({} as IBudgetDataError);

    // Get budgets from localStorage
    const budgets = localStorage.getItem("budgets")
      ? JSON.parse(localStorage.getItem("budgets")!)
      : [];

    // Add new budget
    budgets.push({
      ...data,
      user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null,
    });

    // Update localStorage
    localStorage.setItem("budgets", JSON.stringify(budgets));

    // Update state
    setBudgets(budgets);

    // Update summary stats
    const summary = this.getSummaryStatistics();
    setSummary(summary);

    // Clear form data
    clearData();
  };
  // Gets budgets array from localStorage
  getBudgets = () => {
    const budgets: IBudgetData[] = localStorage.getItem("budgets")
      ? JSON.parse(localStorage.getItem("budgets")!)
      : [];
    // Get user from localStorage
    const user: IUserData = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null;
    // Filter budgets by user email
    return budgets.filter(
      (budget: IBudgetData) => budget.user.email === user.email
    );
  };

  // delete budget which matches the id
  deleteBudget = (
    id: string,
    setBudgets: (data: IBudgetData[]) => void,
    setSummary: (data: IStats) => void
  ) => {
    // Get budgets from localStorage
    const budgets: IBudgetData[] = this.getBudgets();
    // Delete budget from budgets array
    budgets.splice(
      budgets.findIndex((budget: IBudgetData) => budget.id === id),
      1
    );
    // Update localStorage for budgets
    localStorage.setItem("budgets", JSON.stringify(budgets));
    // Update budgets state -> states responsible for showing data in the table
    setBudgets(budgets);
    const summary = this.getSummaryStatistics();
    // Update summary stats -> data shown in the statistic cards
    setSummary(summary);
  };
  // Gets budget by id -> for update form -> to give better user experience
  getBudgetById = (id: string) => {
    // Get budgets from localStorage
    const budgets: IBudgetData[] = this.getBudgets();
    // Return budget which matches the id and returns it
    return budgets.find((budget: IBudgetData) => budget.id === id);
  };

  // Updates budget data -> finds by id and updates it
  updateBudget = (
    data: IBudgetData,
    setBudgets: (data: IBudgetData[]) => void,
    setError: (data: IBudgetDataError) => void,
    setSummary: (data: IStats) => void
  ) => {
    // Validate budget data
    const errors = this.checkBudgetData(data);
    if (this.checkErrors(errors)) {
      setError(errors);
      return;
    }
    setError({} as IBudgetDataError);
    // Get budgets from localStorage
    const id = data?.id;
    const budget = this.getBudgetById(id);
    if (!budget) return;
    const budgets: IBudgetData[] = this.getBudgets();
    // Update budgets array
    budgets.splice(
      budgets.findIndex((budget: IBudgetData) => budget.id === id),
      1,
      { ...budget, ...data }
    );
    // Update localStorage for budgets
    localStorage.setItem("budgets", JSON.stringify(budgets));
    // Update budgets state -> states responsible for showing data in the table
    setBudgets(budgets);
    const summary = this.getSummaryStatistics();
    // Update summary stats -> data shown in the statistic cards
    setSummary(summary);
  };
  // Gets summary statistics from budgets array
  getSummaryStatistics = () => {
    // Initialize summary statistics
    const summary: IStats = {
      total: 0,
      income: 0,
      expense: 0,
      balance: 0,
    };
    // Get budgets from localStorage
    const budgets: IBudgetData[] = this.getBudgets();
    // Loop through budgets and add up total, income and expense
    budgets.forEach((budget: IBudgetData) => {
      summary.total += budget.amount * 1; // Convert to number
      if (budget.type === "income") {
        summary.income += budget.amount * 1;
      } else {
        summary.expense += budget.amount * 1;
      }
    });
    // Calculate balance
    summary.balance = summary.income - summary.expense;
    // Return summary statistics
    return summary;
  };
}
