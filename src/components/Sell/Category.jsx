export default function Category({ category, setCategory }) {
  return (
    <div className="flex items-center mb-2">
      <label className="block text-gray-700 font-normal mb-1 min-w-11">
        분류
      </label>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-white text-black border-black text-sm"
      >
        <option>전자기기</option>
        <option>가전제품</option>
        <option>가구/인테리어</option>
        <option>패션/잡화</option>
        <option>스포츠/레저</option>
      </select>
    </div>
  );
}
