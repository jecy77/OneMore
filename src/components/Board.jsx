import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function Board({ title, price, date, image }) {
  const [filledHeart, setFilledHeart] = useState(false);
  function toggleHeart(e) {
    e.preventDefault();
    setFilledHeart(!filledHeart);
  }

  return (
    <div className="flex flex-col gap-2  bg-green-200 rounded-xl">
      <img src={image} alt="상품 이미지" />
      <div onClick={(e) => toggleHeart(e)}>
        {filledHeart ? <FaHeart className="text-red-600" /> : <FaRegHeart />}
      </div>
      <div>{title || "제목"}</div>
      <div>{price || "가격"}</div>
      <div>{date || "날짜"}</div>
    </div>
  );
}
