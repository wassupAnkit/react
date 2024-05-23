import FilterFields from "./components/filter-fields";
import SearchField from "./components/search-field";

const Search = () => {
  return (
    <>
      <section className="w-full">
        <SearchField />
        <FilterFields />
      </section>
    </>
  );
};

export default Search;
