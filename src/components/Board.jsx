export default function Board({ title, price, date, image }) {
  return (
    <div className="flex flex-col gap-2  bg-green-200 rounded-xl">
      <div>{image || "이미지"}</div>
      <div>{title || "제목"}</div>
      <div>{price || "가격"}</div>
      <div>{date || "날짜"}</div>
    </div>
  );
}
