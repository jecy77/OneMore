import { MdOutlinePerson } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="sticky top-0 bg-gray-300 px-5 py-7 flex justify-between">
      <IoMenuOutline className="w-7 h-7 text-black" />
      <Link to="/">
        <div className=" text-black font-bold text-2xl ">원모어</div>
      </Link>
      <Link to="/mypage">
        <MdOutlinePerson className="w-7 h-7 text-black" />
      </Link>
    </header>
  );
}
