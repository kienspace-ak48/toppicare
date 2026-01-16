import React, { useState } from "react";
import {
  Settings,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Package,
  Moon,
  Sun,
  Bell,
  Search,
  ChevronDown,
  User,
  Image,
  Film,
} from "lucide-react";
import { Link } from "react-router-dom";
// const navigate = useNavigate();
// const location = useLocation();
const Sidebar = ({ isDarkMode, toggleDarkMode, activeItem, setActiveItem }) => {
  const navigationItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/admin",
    },
    {
      id: "users",
      icon: <Users size={20} />,
      label: "Users",
      badge: 24,
    },
    {
      id: "settings",
      icon: <Settings size={20} />,
      label: "Page Config",
      children: [
        { id: "home", label: "Home", path: "/admin/pageconfig/homepage" },
        { id: "menus", label: "Menus", path: "/admin/pageconfig/about" },
        {
          id: "seo",
          label: "SEO Settings",
          path: "/admin/pageconfig/training",
        },
      ],
    },
    // {
    //   id: "analytics",
    //   icon: <BarChart3 size={20} />,
    //   label: "Analytics",
    // },
    {
      id: "gallery",
      icon: <Image size={20} />,
      label: "Gallery",
    },
    {
      id: "videos",
      icon: <Film size={20} />,
      label: "Videos",
    },
  ];

  const [openMenus, setOpenMenus] = useState({});
  const toggleSubmenu = (id) => {
    setOpenMenus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        text: "text-blue-500 dark:text-blue-400",
        border: "border-blue-500",
        badge: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300",
      },
    };
    return colors[color] || colors.blue;
  };
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside
      className={`
    ${collapsed ? "w-20" : "w-64"}
    bg-white dark:bg-gray-800
    shadow-xl h-screen
    flex-shrink-0
    transition-[width] duration-300 ease-in-out
  `}
    >
      <div className="p-2">
        {/* Logo */}
        <div
          className="flex items-center justify-center  mb-8"
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <Settings className="text-white" size={20} />
          </div>
          {!collapsed && (
            <h1
              className="
    text-[18px] font-bold text-gray-800 dark:text-white
    cursor-pointer select-none
    hover:text-blue-500 transition pl-3
  "
            >
              AccessRace Panel
            </h1>
          )}
        </div>

        {/* Navigation */}
        {navigationItems.map((item) => {
          const isActive = activeItem === item.id;
          const hasChildren = item.children?.length > 0;

          return (
            <div key={item.id}>
              {item.path ? (
                // 👉 MENU CÓ PATH → ĐI ROUTE
                <Link to={item.path}>
                  <button
                    onClick={() => setActiveItem(item.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-all
          ${collapsed ? "justify-center" : "space-x-3"}
          ${
            isActive
              ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20"
              : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
          }
        `}
                  >
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <span className="font-medium flex-1 text-left">
                        {item.label}
                      </span>
                    )}
                  </button>
                </Link>
              ) : (
                // 👉 MENU KHÔNG PATH → TOGGLE SUBMENU
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className={`w-full flex items-center p-3 rounded-lg transition-all
        ${collapsed ? "justify-center" : "space-x-3"}
        hover:bg-gray-50 dark:hover:bg-gray-700/50
      `}
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    {item.icon}
                  </span>

                  {!collapsed && (
                    <span className="font-medium flex-1 text-left">
                      {item.label}
                    </span>
                  )}
                  {!collapsed && item.children?.length > 0 &&(
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        openMenus[item.id] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  
                </button>
              )}

              {/* ===== SUBMENU ===== */}
              {!collapsed && !item.path && openMenus[item.id] && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children?.map((child) => (
                    <Link key={child.id} to={child.path}>
                      <button
                        onClick={() => setActiveItem(child.id)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm
              ${
                activeItem === child.id
                  ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            `}
                      >
                        {child.label}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Theme Toggle */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          {/* User Profile */}
          <div className="flex items-center justify-center  py-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-400 flex items-center justify-center">
              <User className="text-white" size={18} />
            </div>
            {!collapsed && (
              <div className="ml-3">
                <p className="font-semibold dark:text-white">Quản trị viên</p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  admin@example.com
                </p>
              </div>
            )}
          </div>
          {/*  */}
          <button
            onClick={toggleDarkMode}
            className="w-full flex items-center justify-center space-x-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
          >
            <div
              className={`p-2 rounded-lg ${
                isDarkMode
                  ? "bg-yellow-100 dark:bg-yellow-900/30"
                  : "bg-blue-100 dark:bg-blue-900/30"
              }`}
            >
              {isDarkMode ? (
                <Sun
                  className="text-yellow-500 dark:text-yellow-400"
                  size={18}
                />
              ) : (
                <Moon className="text-blue-500 dark:text-blue-400" size={18} />
              )}
            </div>
            {!collapsed && (
              <span className="font-medium dark:text-white">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
