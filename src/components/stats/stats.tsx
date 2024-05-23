import { useEffect, useMemo } from "react";
import { IUserData } from "../../pages/budget/interface";
import StatCard from "./components/stat-cards";
import { BudgetHelper } from "../../pages/budget/helper";
import { useQuery } from "@tanstack/react-query";
import { useStatisticsStore } from "./store";

const Stats = () => {
  // class
  const budgetClass = useMemo(() => new BudgetHelper(), []);
  // stores
  const { summary, setSummary } = useStatisticsStore();
  // fetch user data
  const userData: IUserData | null = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : null;
  // react query
  const { data: stats } = useQuery({
    queryKey: ["get", "summary", "stats"],
    queryFn: budgetClass.getSummaryStatistics,
  });
  useEffect(() => {
    if (stats) setSummary(stats);
  }, [stats, setSummary]);
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 pt-5">
        <p className="capitalize text-xl font-semibold text-[#3e3e3e] mb-3">
          Hello {userData?.name}🖤
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
          <StatCard value={summary?.income || 0} title="Total Income" />
          <StatCard value={summary?.expense || 0} title="Total Expense" />
          <StatCard value={summary?.balance || 0} title="Balance" />
        </div>
      </div>
    </>
  );
};

export default Stats;
