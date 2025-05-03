import { useState } from "react";
import Title from "../components/Sell/Title";
import Price from "../components/Sell/Price";
import Content from "../components/Sell/Content";
import File from "../components/Sell/File";
import axios from "axios";
import BaseButton from "../components/Base/BaseButton";

export default function Sell() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBoard = {
      title,
      price: Number(price),
      content,
      image: file ? URL.createObjectURL(file) : null,
      date: new Date().toISOString().split("T")[0],
    };

    await axios.post("http://localhost:3001/boards", newBoard);

    setTitle("");
    setPrice("");
    setContent("");
    setFile(null);

    window.location.href = "/";
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-bold mb-6 text-center">상품 등록</h1>

      <Title setTitle={setTitle} />
      <Price setPrice={setPrice} />
      <Content setContent={setContent} />
      <File />

      <BaseButton
        cName="w-full bg-blue-500 hover:bg-blue-600  rounded-lg"
        onClick={handleSubmit}
      >
        등록하기
      </BaseButton>
    </div>
  );
}
