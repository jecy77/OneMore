import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { dummyData } from "../data/dummyData";
import BaseButton from "./Base/BaseButton";
import axios from "axios";
import BoardDeleteButton from "./BoardDetail/BoardDeleteButton";
import BoardUpdateButton from "./BoardDetail/BoardUpdateButton";
import Title from "./BoardDetail/Title";
import Price from "./BoardDetail/Price";
import Content from "./BoardDetail/Content";

export default function BoardDetail() {
  const { id } = useParams();
  // const selectedBoard = dummyData.find((item) => item.id == id);
  const [board, setBoard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    axios
      // .get(`http://localhost:3001/boards/${id}`) // json
      // .get(`http://localhost:3000/boards/${id}`) // 로컬 back
      .get(`https://onemore-be.onrender.com/boards/${id}`)
      .then((res) => setBoard(res.data))
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, [id]);

  useEffect(() => {
    if (board) {
      setEditTitle(board.title);
      setEditPrice(board.price);
      setEditContent(board.content);
    }
  }, [board]);

  if (!board) {
    return <div className="text-center mt-20 text-gray-500">로딩 중...</div>;
  }

  function handleClickBuy() {
    alert("상품을 구매합니다.");
  }

  function handleClickCart() {
    alert("상품을 장바구니에 담았습니다.");
  }

  const updateBoard = async () => {
    try {
      await axios.put(`https://onemore-be.onrender.com/boards/${id}`, {
        title: editTitle,
        price: editPrice,
        content: editContent,
      });

      window.location.reload();

      alert("게시글이 수정되었습니다.");
      return true;
    } catch (err) {
      alert("수정 중 오류 발생");
      console.error(err);
      return false;
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-12 bg-white shadow-lg rounded-lg">
      <div className="flex flex-row md:items-end justify-center mb-4 md:flex-col">
        <BoardDeleteButton id={board.id}>게시글 삭제하기</BoardDeleteButton>
        <BoardUpdateButton
          id={board.id}
          setIsEditing={setIsEditing}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          isEditing={isEditing}
          updateBoard={updateBoard}
        >
          {isEditing ? `수정 완료` : `게시글 수정하기`}
        </BoardUpdateButton>
      </div>
      <Title
        board={board}
        isEditing={isEditing}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
      />
      <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
        <div className="flex justify-center md:justify-start">
          <img
            // src={selectedBoard.image}
            src={board.image_path}
            alt="상품 이미지"
            className="w-72 h-72 object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="mb-6">
            <Price
              board={board}
              isEditing={isEditing}
              editPrice={editPrice}
              setEditPrice={setEditPrice}
            />
            <Content
              board={board}
              isEditing={isEditing}
              editContent={editContent}
              setEditContent={setEditContent}
            />
          </div>

          <div className="flex gap-4">
            <BaseButton
              onClick={handleClickCart}
              cName="bg-blue-500 hover:bg-blue-700 text-white "
            >
              장바구니
            </BaseButton>
            <BaseButton
              onClick={handleClickBuy}
              cName="bg-red-500 hover:bg-red-700 text-white "
            >
              구매하기
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
