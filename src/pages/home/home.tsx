import Table from "../budget/table/table";
import Search from "./search/search";

const Home = () => {
  return (
    <>
      <div className="px-2 @[30em]:px-6 @[50em]:px-10 @[1300px]:px-16 pt-10">
        <Search />
        <Table />
      </div>
    </>
  );
};

export default Home;
