export default function Price({ setPrice }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">가격</label>
      <input
        type="number"
        placeholder="숫자만 입력"
        className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
}
