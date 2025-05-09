export default function Title({ setTitle }) {
  return (
    <div className="mb-4 flex flex-row items-center">
      <label className=" text-gray-700 font-normal mb-1 min-w-11">제목</label>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
}
