import { IStatCard } from "../interface";

const StatCard = ({ value, title }: IStatCard) => {
  return (
    <>
      <div className="bg-white border rounded">
        <div className="px-4 py-5 sm:p-6">
          <dt className="text-sm font-medium text-gray-500 truncate">
            {title}
          </dt>
          <dd className="mt-1 text-[#2e2e2e]/70">
            <span className="mr-2 text-xl">NRs</span>
            <span className="text-3xl font-semibold text-[#2e2e2e]/60">
              {isNaN(value) ? 0 : Number(value).toFixed(2)}
            </span>
          </dd>
        </div>
      </div>
    </>
  );
};

export default StatCard;
