import { PiPencilSimpleLineLight } from "react-icons/pi";

export default function BoardUpdateButton({ children }) {
  return (
    <button className="flex items-center p-1 rounded-sm bg-gray-200 hover:text-gray-400 text-black hover:border-black mr-1">
      <div>{children}</div>
      <PiPencilSimpleLineLight />
    </button>
  );
}
