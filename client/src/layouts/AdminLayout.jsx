import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import { useState, useEffect } from "react";
import Header from "../components/admin/Header";

export default function AdminLayout() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Ưu tiên localStorage → system → light
    if (localStorage.theme === "dark") return true;
    if (
      !("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }
    return false;
  });

  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const root = document.documentElement;
    document.title ="Admin"

    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);
  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-gray-900">
      <Sidebar
        isDarkMode={isDarkMode}
        toggleDarkMode={()=>setIsDarkMode((v)=>!v)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
      <div className="flex-1 p-6 transition-[padding] duration-300 ease-in-out">
        <Header/>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 min-h-[30%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
