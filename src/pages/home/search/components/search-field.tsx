import { Icon } from "@iconify/react";
import { useSearchStore } from "../store";

const SearchField = () => {
  // stores
  const { search: value, setSearch: setValue } = useSearchStore();

  // handlers
  // handles on change event of input field
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center">
        {/*  Search field */}
        <form className="flex md:w-[90%] border items-center gap-x-2 bg-white py-2 px-2 rounded w-full">
          {/* Search icon */}
          <span className="text-[#2e2e2e]/70">
            <Icon icon="pixelarticons:search" rotate={1} width={20} />
          </span>
          {/* Input field */}
          <input
            type="text"
            name="search"
            placeholder="Search here"
            value={value}
            onChange={handleOnChange}
            className="flex-1 outline-none bg-transparent text-[#2e2e2e]/80 tracking-wide font-semibold placeholder:font-medium placeholder-[#2e2e2e]/50 placeholder:text-[.9rem]"
          />
        </form>
      </div>
    </>
  );
};

export default SearchField;
