import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { dummyData } from "../data/dummyData";
import BaseButton from "./Base/BaseButton";
import axios from "axios";
import BoardDeleteButton from "./BoardDetail/BoardDeleteButton";
import BoardUpdateButton from "./BoardDetail/BoardUpdateButton";

export default function BoardDetail() {
  const { id } = useParams();
  // const selectedBoard = dummyData.find((item) => item.id == id);
  const [board, setBoard] = useState(null);

  useEffect(() => {
    axios
      // .get(`http://localhost:3001/boards/${id}`) // json
      // .get(`http://localhost:3000/boards/${id}`) // 로컬 back
      .get(`https://onemore-be.onrender.com/boards/${id}`)
      .then((res) => setBoard(res.data))
      .catch((err) => console.error("게시글 조회 실패:", err));
  }, [id]);

  if (!board) {
    return <div className="text-center mt-20 text-gray-500">로딩 중...</div>;
  }

  function handleClickBuy() {
    alert("상품을 구매합니다.");
  }

  function handleClickCart() {
    alert("상품을 장바구니에 담았습니다.");
  }

  return (
    <div className="max-w-4xl mx-auto p-12 bg-white shadow-lg rounded-lg">
      <div className="flex flex-row md:items-end justify-center mb-4 md:flex-col">
        <BoardDeleteButton id={board.id}>게시글 삭제하기</BoardDeleteButton>
        <BoardUpdateButton>게시글 수정하기</BoardUpdateButton>
      </div>
      <h1 className="text-2xl font-bold mb-8 text-center">
        {/* {selectedBoard.title} */}
        {board.title}
      </h1>
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
            <div className="text-lg mb-2">
              <span className="font-semibold">가격</span>{" "}
              {/* {selectedBoard.price.toLocaleString()} 원 */}
              {board.price.toLocaleString()} 원
            </div>
            <p className="text-gray-700 whitespace-pre-line lg:min-h-[20rem]">
              {/* {selectedBoard.content} */}
              {board.content}
            </p>
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
