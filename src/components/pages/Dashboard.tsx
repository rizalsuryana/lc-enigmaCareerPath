import { useState } from "react";
import DashBoardCareerList from "../molecules/DashBoardCareerList";
import DashBoardHome from "../molecules/DashBoardHome";
import DashboardStudentList from "../molecules/DashboardStudentList";
import SideBar from "../molecules/SideBar";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [activeMenu, setActiveMenu] = useState("home");

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <DashBoardHome />;
      case "students":
        return <DashboardStudentList />;
      case "careers":
        return <DashBoardCareerList />;
      default:
        return <DashBoardHome />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar
        activeMenu={activeMenu}
        onMenuClick={setActiveMenu}
        onLogout={onLogout}
      />
      <main className="flex-1 p-6">{renderContent()}</main>
    </div>
  );
}
