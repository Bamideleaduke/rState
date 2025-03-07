import { NavLink } from "react-router-dom";
import { FiHome, FiCompass, FiSettings } from "react-icons/fi";
import { FaBolt } from "react-icons/fa";

import BrandLogo from "../assets/brandLogo.svg";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon: React.ElementType;
}

const menuItems: MenuItem[] = [
  { id: "home", label: "Home", path: "/", icon: FiHome },
  { id: "activity", label: "Activity", path: "/activity", icon: FaBolt },
  { id: "discover", label: "Discover", path: "/discover", icon: FiCompass },
  { id: "settings", label: "Settings", path: "/settings", icon: FiSettings },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-48 bg-white shadow-md  flex flex-col h-screen">
      <div className="mb-8 flex items-center justify-center ">
        <img src={BrandLogo} alt="Anime Character" className="w-14 h-14" />
      </div>

      <nav className="flex flex-col space-y-4 mb-12 mt-4 px-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-lg transition ${
                isActive
                  ? "text-[#3579DC] font-semibold"
                  : "text-[#8E97A4] font-semibold hover:text-[#3579DC]"
              }`
            }
          >
            <item.icon size={18} className="mr-2" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="px-6">
        <div
          className="rounded-lg p-3 pt-10 text-white"
          style={{
            background:
              "linear-gradient(162.79deg, #3579DC 23.51%, #95D9FF 93.9%)",
            fontFamily: "'Source Sans Pro', sans-serif",
          }}
        >
          <div className="font-bold text-[12px] leading-none tracking-normal">
            GET more with PRO
          </div>
          <div className="mt-1 text-[12px] font-light leading-none tracking-normal">
            Upgrade to pro subscription for $9 / month
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
