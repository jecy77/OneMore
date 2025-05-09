export default function Price({ board, isEditing, editPrice, setEditPrice }) {
  return (
    <div className="text-lg mb-2">
      <span className="font-semibold">가격</span>{" "}
      {isEditing ? (
        <input
          className="border px-2 py-1 rounded ml-2 w-40 text-black bg-white"
          value={editPrice ?? board.price}
          onChange={(e) => setEditPrice(e.target.value)}
        />
      ) : (
        board.price.toLocaleString() + " 원"
      )}
    </div>
  );
}
