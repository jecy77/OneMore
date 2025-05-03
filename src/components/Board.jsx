import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Board({ title, price, date, image }) {
  const [filledHeart, setFilledHeart] = useState(false);
  function toggleHeart(e) {
    e.preventDefault();
    setFilledHeart((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-2 shadow-lg  bg-white rounded-xl p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl z-0">
      <div className="w-48 h-48 self-center">
        <img src={image} alt="상품 이미지" />
      </div>
      <div onClick={(e) => toggleHeart(e)}>
        {filledHeart ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
      </div>
      <div className="font-bold">{title || "제목"}</div>
      <div>{(price || "가격").toLocaleString?.()} 원</div>
      <div className="text-gray-600">{date || "날짜"}</div>
    </div>
  );
}
