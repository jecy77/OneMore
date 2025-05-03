import SearchBar from "../components/SearchBar";
import BoardList from "../components/BoardList";
import SortSelector from "../components/SortSelector";
import { useState } from "react";
import { dummyData } from "../data/dummyData";
import { Link } from "react-router-dom";

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

  let sortedData = [];

  switch (sortOption) {
    case "latest":
      // .sort() 는 원본 배열을 변형하므로 복사해서 사용
      sortedData = [...filteredData].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      break;

    case "priceAsc":
      sortedData = [...filteredData].sort((a, b) => a.price - b.price);
      break;

    default:
      sortedData = filteredData;
  }

  return (
    <>
      <div className="w-full max-w-lg mx-auto px-4 my-4 flex gap-3 justify-center">
        <Link to="/sell">
          <button className="top-24 fixed right-20 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md border border-gray-300 hover:shadow-lg transition duration-300">
            글쓰기
          </button>
        </Link>
        <SearchBar setSearchTitle={setSearchTitle} />
        <SortSelector setSortOption={setSortOption} />
      </div>
      <BoardList sortedData={sortedData} />
    </>
  );
}
