export default function Price({ board, isEditing, editPrice, setEditPrice }) {
  return (
    <div className="text-lg mb-2">
      <span className="font-normal font-noto text-gray-500">가격</span>{" "}
      {isEditing ? (
        <input
          type="text"
          inputMode="numeric"
          className="border px-2 py-1 rounded ml-2 w-40 text-black bg-white font-noto"
          value={editPrice ?? board.price}
          onChange={(e) => setEditPrice(e.target.value)}
        />
      ) : (
        board.price.toLocaleString() + " 원"
      )}
    </div>
  );
}
