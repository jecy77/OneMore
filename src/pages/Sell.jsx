import { useState } from "react";

export default function Sell(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">상품 등록</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">가격</label>
        <input
          type="number"
          placeholder="숫자만 입력"
          className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">본문</label>
        <textarea
          rows="5"
          placeholder="상품 설명을 입력하세요"
          className="w-full border bg-white border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-1">
          사진 첨부
        </label>
        <input type="file" accept="image/*" className="w-full" />
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition">
        등록하기
      </button>
    </div>
  );
}
