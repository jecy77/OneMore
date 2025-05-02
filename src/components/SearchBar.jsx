import { GoSearch } from "react-icons/go";

export default function SearchBar({ setSearchTitle }) {
  return (
    <div className="bg-white border border-black rounded-[5px] flex items-center justify-between px-4 py-2">
      <input
        className="bg-white w-full"
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <GoSearch className="h-4 w-4 mx-2" />
    </div>
  );
}
