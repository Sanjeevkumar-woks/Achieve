// Sidebar.tsx
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { FaBullseye } from "react-icons/fa6";
import { PiChatsFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  key: string;
  icon: React.ElementType;
  title: string;
  url: string;
  active: boolean;
}

const initialMenuItems: MenuItem[] = [
  {
    key: "dashboard",
    icon: RxDashboard,
    title: "Dashboard",
    url: "/dashboard",
    active: false,
  },
  {
    key: "class",
    icon: GrPersonalComputer,
    title: "Class",
    url: "/class",
    active: true,
  },
  { key: "tasks", icon: FaTasks, title: "Tasks", url: "/tasks", active: false },
  {
    key: "projects",
    icon: FaBullseye,
    title: "Projects",
    url: "/projects",
    active: false,
  },
  {
    key: "queries",
    icon: PiChatsFill,
    title: "Queries",
    url: "/queries",
    active: false,
  },
];

const Sidebar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);
  const navigate = useNavigate();
  const handleNavigation = (url: string, key: string) => {
    // Update active state
    const updatedMenuItems = menuItems.map((item) =>
      item.key === key ? { ...item, active: true } : { ...item, active: false }
    );
    setMenuItems(updatedMenuItems);
    //navigate
    navigate(url);
  };

  return (
    <div className="h-screen md:w-16  bg-white shadow-md hover:w-56 sm:w-16 transition-all duration-300 overflow-hidden">
      <div className="flex items-center align-middle gap-6 p-4 mt-10">
        <div className="bg-green-500 rounded-full p-2">
          <span className="text-white text-2xl font-bold">A</span>
        </div>
        <h1 className="text-center text-2xl font-semibold mt-4">Achieve</h1>
      </div>

      <nav className="mt-10">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`relative flex items-center p-4 cursor-pointer
              ${
                item.active
                  ? "text-green-500 border-l-8 border-green-500"
                  : "text-gray-500 border-none"
              }
              hover:text-green-500 hover:border-l-8 rounded hover:border-green-500 transition-all duration-300`}
              onClick={() => handleNavigation(item.url, item.key)}
            >
              <item.icon size={25} />
              <span
                className={`absolute left-16 whitespace-nowrap  font-semibold`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
