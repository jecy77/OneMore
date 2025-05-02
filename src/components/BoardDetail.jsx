import { useParams } from "react-router-dom";
import { dummyData } from "../data/dummyData";
import BaseButton from "./Base/BaseButton";

export default function BoardDetail(props) {
  const { id } = useParams();

  const selectedBoard = dummyData.find((item) => item.id == id);

  function handleClickBuy() {
    alert("상품을 구매합니다.");
  }

  function handleClickCart() {
    alert("상품을 장바구니에 담았습니다.");
  }

  return (
    <>
      <div className="m-6 flex flex-col justify-center items-center">
        <div className="text-3xl py-4">{selectedBoard.title}</div>
        <div>{selectedBoard.content}</div>
        <img
          src={selectedBoard.image}
          alt="상품 이미지"
          className="w-48 h-48"
        />
        <div className="flex gap-3">
          <BaseButton
            onClick={handleClickBuy}
            cName="bg-red-500 hover:bg-red-700"
          >
            구매하기
          </BaseButton>
          <BaseButton
            onClick={handleClickCart}
            cName="bg-blue-500 hover:bg-blue-700"
          >
            장바구니
          </BaseButton>
        </div>
      </div>
    </>
  );
}
