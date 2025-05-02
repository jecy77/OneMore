export default function SortSelector({ setSortOption }) {
  return (
    <select
      name="정렬"
      className="bg-white rounded-xl"
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="latest">최신순</option>
      <option value="priceAsc">저가순</option>
    </select>
  );
}
