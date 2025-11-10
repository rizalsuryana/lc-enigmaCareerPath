import { FaLock, FaUserEdit } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import LoginMenuCard from "../atoms/LoginMenuCard";

export default function LoginMenu() {
  return (
    <div className="flex flex-col justify-center px-12 py-16 h-full text-white bg-linear-to-br from-gray-950 via-gray-800 to-gray-950">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-wide mb-2 drop-shadow-md">
          ENIGMA CAMP
        </h1>
        <h3 className="text-lg font-medium opacity-90 mb-3">
          Selamat Datang di Student Management System
        </h3>
        <p className="text-sm opacity-80 leading-relaxed max-w-md">
          Platform manajemen data dan karir yang cepat, aman, dan mudah
          digunakan.
        </p>
      </div>

      <div className=" space-y-6">
        <LoginMenuCard
          icon={<FaUserEdit className="text-2xl" />}
          label="Manajemen data siswa"
        />

        <LoginMenuCard
          icon={<FaBagShopping className="text-2xl" />}
          label="Daftar Peluang karir"
        />

        <LoginMenuCard
          icon={<FaLock className="text-2xl" />}
          label="Sistem aman dan terpercaya"
        />
      </div>
    </div>
  );
}
