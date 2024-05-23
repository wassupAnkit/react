import { useSearchStore } from "../store";

const FilterFields = () => {
  // stores
  const { filters, setFilters, dateRange, setDateRange } = useSearchStore();
  // handlers
  // handles on change event of select field
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  // handles on change event of date field
  const handleOnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateRange({ ...dateRange, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/*  Filters */}
      <div className="grid gap-3 mt-5 mb-3 md:grid-cols-3">
        <div className="bg-white text-[#2e2e2e]/70 p-2 rounded">
          <p className="font-semibold">Date Range</p>
          <div className="flex mt-2 gap-x-2">
            <input
              type="date"
              name="from"
              value={dateRange.from}
              onChange={handleOnDateChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 w-full  min-w-[8em]"
            />
            <input
              type="date"
              name="to"
              value={dateRange.to}
              onChange={handleOnDateChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50  w-full min-w-[8em]"
            />
          </div>
        </div>
        <div className="bg-white text-[#2e2e2e]/70 p-2 rounded">
          <label htmlFor="type" className="font-semibold">
            Type
          </label>
          <div className="flex mt-2 gap-x-2">
            <select
              name="type"
              value={filters.type}
              onChange={handleOnChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
            >
              <option value="">Select one</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <div className="bg-white text-[#2e2e2e]/70 p-2 rounded">
          <label htmlFor="recurring" className="font-semibold">
            Recurring
          </label>
          <div className="flex mt-2 gap-x-2">
            <select
              name="recurring"
              value={filters.recurring}
              onChange={handleOnChange}
              className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
            >
              <option value="">Select one</option>
              <option value="monthly">Monthly</option>
              <option value="one time">One Time</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterFields;
