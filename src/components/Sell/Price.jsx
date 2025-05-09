export default function Price({ setPrice }) {
  return (
    <div className="mb-4 flex flex-row items-center">
      <label className="block text-gray-700 font-normal mb-1 min-w-11">
        가격
      </label>
      <input
        type="text"
        inputMode="numeric"
        placeholder="가격을 입력하세요"
        className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setPrice(e.target.value)}
      />
    </div>
  );
}
