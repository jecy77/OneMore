import { useParams } from "react-router-dom";
import { dummyData } from "../data/dummyData";
import BaseButton from "./Base/BaseButton";

export default function BoardDetail() {
  const { id } = useParams();
  const selectedBoard = dummyData.find((item) => item.id == id);

  function handleClickBuy() {
    alert("상품을 구매합니다.");
  }

  function handleClickCart() {
    alert("상품을 장바구니에 담았습니다.");
  }

  return (
    <div className="max-w-4xl mx-auto p-12 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {selectedBoard.title}
      </h1>

      <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
        <div className="flex justify-center md:justify-start">
          <img
            src={selectedBoard.image}
            alt="상품 이미지"
            className="w-72 h-72 object-contain rounded-md"
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="mb-6">
            <div className="text-lg mb-2">
              <span className="font-semibold">가격</span>{" "}
              {selectedBoard.price.toLocaleString()} 원
            </div>
            <p className="text-gray-700 whitespace-pre-line lg:min-h-[20rem]">
              {selectedBoard.content}
            </p>
          </div>

          <div className="flex gap-4">
            <BaseButton
              onClick={handleClickCart}
              cName="bg-blue-500 hover:bg-blue-700"
            >
              장바구니
            </BaseButton>
            <BaseButton
              onClick={handleClickBuy}
              cName="bg-red-500 hover:bg-red-700"
            >
              구매하기
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  );
}
