import SearchBar from "../components/SearchBar";
import BoardList from "../components/BoardList";
import SortSelector from "../components/SortSelector";
import { useState } from "react";
import { dummyData } from "../data/dummyData";

export default function Home() {
  const [searchTitle, setSearchTitle] = useState("");
  const [sortOption, setSortOption] = useState("latest");

  const filteredData = dummyData.filter((item) => {
    const titleMatched = item.title
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchTitle.toLowerCase().replace(/\s/g, ""));

    return titleMatched;
  });

  return (
    <>
      <div className="w-full max-w-lg mx-auto px-4 my-4 flex">
        <SearchBar setSearchTitle={setSearchTitle} />
        <SortSelector setSortOption={setSortOption} />
      </div>
      <BoardList filteredData={filteredData} />
    </>
  );
}
