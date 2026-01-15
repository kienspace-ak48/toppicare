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
} from "lucide-react";

const Sidebar = ({ isDarkMode, toggleDarkMode, activeItem, setActiveItem }) => {
  const navigationItems = [
    {
      id: "dashboard",
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      active: true,
    },
    { id: "users", icon: <Users size={20} />, label: "Users", badge: 24 },
    // { id: "posts", icon: <FileText size={20} />, label: "Posts", badge: 128 },
    { id: "settings", icon: <Settings size={20} />, label: "Page Config" },
    { id: "analytics", icon: <BarChart3 size={20} />, label: "Analytics" },
    // { id: "products", icon: <Package size={20} />, label: "Products" },
  ];

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
        <div className="flex items-center justify-center  mb-8" onClick={() => setCollapsed(!collapsed)}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
            <Settings className="text-white" size={20} />
          </div>
          {!collapsed && (<h1
            className="
    text-[18px] font-bold text-gray-800 dark:text-white
    cursor-pointer select-none
    hover:text-blue-500 transition pl-3
  "
          >
            AccessRace Panel
          </h1>)}
          
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = activeItem === item.id;
            const colorClasses = getColorClasses("blue");
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
  ${collapsed ? "justify-center" : "space-x-3"}
  ${
    isActive
      ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10"
      : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
  }`}
              >
                <span
                  className={`${
                    isActive
                      ? "text-blue-500 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {item.icon}
                </span>
                {!collapsed && (
                  <span className={`
    font-medium whitespace-nowrap
    transition-all duration-200
    ${collapsed
      ? 'opacity-0 translate-x-2 pointer-events-none'
      : 'opacity-100 translate-x-0'}
  `}>{item.label}</span>
                )}
                {!collapsed && item.badge && (
                  <span
                    className={`ml-auto text-xs px-2 py-1 rounded-full ${colorClasses.badge}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
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
