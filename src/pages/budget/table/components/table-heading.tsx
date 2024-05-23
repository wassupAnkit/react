import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
const TableHeading = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between md:px-2 mb-4 mt-1 items-center">
        <p className="text-[#2e2e2e]/80 font-semibold text-xl">
          Budget Summary
        </p>
        <button
          className="flex items-center border py-2 px-3 rounded-sm"
          onClick={() => navigate("/add-budget")}
        >
          <span>
            <Icon icon="carbon:add" width={20} />
          </span>
          <span>Add</span>
        </button>
      </div>
    </>
  );
};

export default TableHeading;
