export default function content({ setContent }) {
  return (
    <div className="mb-4 ml-11">
      <textarea
        rows="5"
        placeholder="상품 설명을 입력하세요"
        className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}
