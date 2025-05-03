import { GoSearch } from "react-icons/go";

export default function SearchBar({ searchTitle, setSearchTitle }) {
  return (
    <div className="flex-grow bg-white border border-none rounded-[5px] flex items-center justify-between px-4 py-2">
      <input
        className="bg-white w-full"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <GoSearch className="h-4 w-4 mx-2" />
    </div>
  );
}
