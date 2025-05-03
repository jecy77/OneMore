import { MdOutlinePerson } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="sticky top-0 bg-white px-5 py-7 flex justify-between z-50">
      <IoMenuOutline className="w-7 h-7 text-black" />
      <Link to="/">
        <div className=" text-black font-bold text-3xl font-tagesschrift text-2xl ">
          One <span className="text-[#56905b]">More</span>
        </div>
      </Link>
      <div className="flex  items-center gap-3">
        <FaCartShopping className="w-6 h-6 text-black" />
        <Link to="/mypage">
          <MdOutlinePerson className="w-7 h-7 text-black" />
        </Link>
      </div>
    </header>
  );
}
