import SearchBar from "../components/SearchBar";
import BoardList from "../components/BoardList";
import SortSelector from "../components/SortSelector";
import { useEffect, useState } from "react";
import { dummyData } from "../data/dummyData";
import { Link } from "react-router-dom";
import Tag from "../components/Tag";
import axios from "axios";

export default function Home() {
  const [searchTitle, setSearchTitle] = useState("");
  const [sortOption, setSortOption] = useState("latest");
  const [selectedTags, setSelectedTags] = useState([]);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/boards").then((res) => {
      setBoards(res.data);
    });
  }, []);

  // 카테고리 목록
  const categoryList = [
    "전자기기",
    "가전제품",
    "가구/인테리어",
    "패션/잡화",
    "스포츠/레저",
  ];

  // 검색 필터링
  // const filteredData = dummyData.filter((item) => {
  const filteredData = boards.filter((item) => {
    const titleMatched = item.title
      .toLowerCase()
      .replace(/\s/g, "")
      .includes(searchTitle.toLowerCase().replace(/\s/g, ""));

    return titleMatched;
  });

  let sortedData = [];

  // 정렬 필터링
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

  // 태그 필터링
  const tagFilteredData =
    selectedTags.length === 0
      ? sortedData
      : sortedData.filter((item) => selectedTags.includes(item.category));

  return (
    <>
      <Link to="/sell">
        <button className="top-28 fixed right-20 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md border border-gray-300 hover:shadow-lg transition duration-300 z-20">
          글쓰기
        </button>
      </Link>
      <div className="w-full max-w-lg mx-auto px-4 my-4 flex gap-3 justify-center">
        <SearchBar setSearchTitle={setSearchTitle} searchTitle={searchTitle} />
        <SortSelector setSortOption={setSortOption} />
      </div>
      <div className="flex gap-5 m-8 justify-center">
        {categoryList.map((category) => (
          <Tag
            key={category}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          >
            {category}
          </Tag>
        ))}
      </div>
      <BoardList tagFilteredData={tagFilteredData} />
    </>
  );
}
