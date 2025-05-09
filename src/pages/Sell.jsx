import { useState } from "react";
import Title from "../components/Sell/Title";
import Price from "../components/Sell/Price";
import Content from "../components/Sell/Content";
import File from "../components/Sell/File";
import Category from "../components/Sell/Category";
import { TfiWrite } from "react-icons/tfi";
import axios from "axios";
import BaseButton from "../components/Base/BaseButton";

export default function Sell() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBoard = {
      title,
      price: Number(price),
      content,
      image_path: `/images/${file.name}`,
      category,
      date: new Date().toISOString().split("T")[0],
    };

    // await axios.post("http://localhost:3001/boards", newBoard); // json
    // await axios.post("http://localhost:3000/boards", newBoard); // 로컬 back
    await axios.post("https://onemore-be.onrender.com/boards", newBoard);

    setTitle("");
    setPrice("");
    setContent("");
    setFile("");
    setCategory("");

    window.location.href = "/";
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-xl font-[500] font-noto mb-6 text-center flex items-center gap-2 justify-center">
        글 등록하기
        <TfiWrite />
      </h1>

      <div className="flex flex-col gap-1 font-noto font-[300]">
        <Title setTitle={setTitle} />
        <div className="flex justify-between">
          <Category setCategory={setCategory} />
          <Price setPrice={setPrice} />
        </div>
        <Content setContent={setContent} />
        <File setFile={setFile} />
      </div>

      <BaseButton
        cName="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
        onClick={handleSubmit}
      >
        등록하기
      </BaseButton>
    </div>
  );
}
