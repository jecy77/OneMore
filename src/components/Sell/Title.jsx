export default function Title({ setTitle }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-1">제목</label>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
