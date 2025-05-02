export default function SortSelector({ setSortSelector }) {
  return (
    <select
      name="정렬"
      className="bg-white rounded-xl"
      onChange={(e) => setSortSelector(e.target.value)}
    >
      <option value="latest">최신순</option>
      <option value="priceAsc">저가순</option>
    </select>
  );
}
