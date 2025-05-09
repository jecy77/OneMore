import { PiTrashLight } from "react-icons/pi";
import axios from "axios";

export default function BoardDeleteButton({ children, id }) {
  async function handleDeleteClick() {
    const confirmDelete = window.confirm("정말 삭제하시겠습니까?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://onemore-be.onrender.com/boards/${id}`);
      alert("삭제되었습니다.");
      window.location.href = "/"; // 목록 페이지로 이동
    } catch (err) {
      console.error("게시글 삭제 실패:", err);
      alert("삭제 중 오류가 발생했습니다.");
    }
  }

  return (
    <button
      className="flex items-center p-1 rounded-sm bg-gray-200 hover:text-gray-400 text-black hover:border-black mr-1 md:mb-1 text-sm
    "
      onClick={handleDeleteClick}
    >
      <div>{children}</div>
      <PiTrashLight />
    </button>
  );
}
