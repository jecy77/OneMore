import { PiPencilSimpleLineLight } from "react-icons/pi";

export default function BoardUpdateButton({
  children,
  updateBoard,
  setIsEditing,
  isEditing,
}) {
  async function handleUpdateButton() {
    if (isEditing) {
      const success = await updateBoard();
      if (!success) return;
    }
    setIsEditing((prev) => !prev);
  }

  return (
    <button
      className="flex items-center p-1 rounded-sm bg-gray-200 hover:text-gray-400 text-black hover:border-black mr-1 text-sm"
      onClick={handleUpdateButton}
    >
      <div>{children}</div>
      <PiPencilSimpleLineLight />
    </button>
  );
}
