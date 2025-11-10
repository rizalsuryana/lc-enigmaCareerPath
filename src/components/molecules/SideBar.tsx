import { BiLogOut } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import type { SideBarProps } from "../../types/SideBarTypes";

export default function SideBar({
  activeMenu,
  onMenuClick,
  onLogout,
}: SideBarProps) {
  return (
    <aside className="w-64 bg-linear-to-br from-gray-950 via-gray-700 to-gray-950 text-white p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-6 tracking-wide">Dashboard</h1>

        <button
          className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
            activeMenu === "home" ? "bg-gray-500" : "hover:bg-gray-500"
          }`}
          onClick={() => onMenuClick("home")}
        >
          <HiHome /> Home
        </button>

        <button
          className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
            activeMenu === "students" ? "bg-gray-500" : "hover:bg-gray-500"
          }`}
          onClick={() => onMenuClick("students")}
        >
          <PiStudentFill /> Master of Student
        </button>

        <button
          className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
            activeMenu === "careers" ? "bg-gray-500" : "hover:bg-gray-500"
          }`}
          onClick={() => onMenuClick("careers")}
        >
          <FaBagShopping /> Career List
        </button>
      </div>

      <button
        onClick={onLogout}
        className="cursor-pointer mt-auto flex items-center gap-2 bg-linear-to-br from-red-800 via-red-800 to-red-800 hover:bg-red-700 p-3 rounded-lg transition"
      >
        <BiLogOut /> Logout
      </button>
    </aside>
  );
}
