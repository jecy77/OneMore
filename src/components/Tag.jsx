import { useEffect } from "react";

export default function Tag({ children, setSelectedTags, selectedTags }) {
  function handleTag() {
    setSelectedTags((prev) =>
      prev.includes(children)
        ? prev.filter((tag) => tag !== children)
        : [...prev, children]
    );
  }

  const isSelected = selectedTags.includes(children);

  return (
    <>
      <div
        className={`rounded-full border-[2px] p-3 text-sm hover:cursor-pointer  transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 
          ${
            isSelected ? " bg-[#56905b] text-white border-white" : " text-black"
          }
          `}
        onClick={handleTag}
      >
        {children}
      </div>
    </>
  );
}
