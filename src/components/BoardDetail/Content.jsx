export default function Content({
  board,
  isEditing,
  editContent,
  setEditContent,
}) {
  return (
    <div className="w-full">
      {isEditing ? (
        <textarea
          className="border w-full h-48 p-2 rounded resize-none text-black bg-white"
          value={editContent ?? board.content}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : (
        <p className="text-gray-700 whitespace-pre-line lg:min-h-[20rem]">
          {board.content}
        </p>
      )}
    </div>
  );
}
