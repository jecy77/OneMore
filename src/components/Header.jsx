import { MdOutlinePerson } from "react-icons/md";
import { CgMenuLeftAlt } from "react-icons/cg";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="sticky top-0 bg-white px-10 py-7 flex justify-between z-50">
      <CgMenuLeftAlt className="w-7 h-7 text-black" />
      <Link to="/">
        <div className=" text-black font-light text-3xl font-josefin text-2xl ">
          One <span className="text-[#56905b]">More</span>
        </div>
      </Link>
      <div className="flex  items-center gap-4">
        {/* <FaCartShopping className="w-6 h-6 text-black" /> */}
        <BsCart3 className="w-6 h-6 text-black " />
        <Link to="/mypage">
          <IoPersonOutline className="w-6 h-6 text-black" />
        </Link>
      </div>
    </header>
  );
}
