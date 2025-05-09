export default function Title({ board, isEditing, setEditTitle, editTitle }) {
  return (
    <h1 className="text-2xl font-noto font-[400] mb-8 text-center">
      {/* {selectedBoard.title} */}
      {isEditing ? (
        <input
          className="border px-2 py-1 font-noto rounded w-full text-center text-black bg-white"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        board.title
      )}
    </h1>
  );
}
