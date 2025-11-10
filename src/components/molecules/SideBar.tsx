import { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaBagShopping } from "react-icons/fa6";
import { HiHome, HiMenu } from "react-icons/hi";
import { PiStudentFill } from "react-icons/pi";
import type { SideBarProps } from "../../types/SideBarTypes";

export default function SideBar({
  activeMenu,
  onMenuClick,
  onLogout,
}: SideBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle button mobile */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setOpen(!open)}
      >
        <HiMenu className="text-2xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-64 bg-linear-to-br from-gray-950 via-gray-700 to-gray-950 text-white p-4 flex flex-col justify-between
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 sm:relative sm:h-screen sm:shrink-0 z-40
        `}
      >
        <div>
          <h1 className="text-2xl font-bold mb-6 tracking-wide">Dashboard</h1>

          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
              activeMenu === "home" ? "bg-gray-500" : "hover:bg-gray-500"
            }`}
            onClick={() => {
              onMenuClick("home");
              setOpen(false);
            }}
          >
            <HiHome /> Home
          </button>

          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
              activeMenu === "students" ? "bg-gray-500" : "hover:bg-gray-500"
            }`}
            onClick={() => {
              onMenuClick("students");
              setOpen(false);
            }}
          >
            <PiStudentFill /> Master of Student
          </button>

          <button
            className={`w-full flex items-center gap-2 p-3 rounded-lg mb-2 transition ${
              activeMenu === "careers" ? "bg-gray-500" : "hover:bg-gray-500"
            }`}
            onClick={() => {
              onMenuClick("careers");
              setOpen(false);
            }}
          >
            <FaBagShopping /> Career List
          </button>
        </div>

        <button
          onClick={onLogout}
          className="cursor-pointer mt-auto flex items-center gap-2 bg-red-700 hover:bg-red-600 p-3 rounded-lg transition"
        >
          <BiLogOut /> Logout
        </button>
      </aside>

      {/* Overlay mobile */}
      {open && (
        <div
          className="fixed inset-0 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
