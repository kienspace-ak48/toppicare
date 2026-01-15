import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect } from "react";

export default function ClientLayout() {
  return (
    <div className=" bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 mt-[65px]">
      <Header onMenuToggle={() => {}} />
      <Outlet />
      <Footer />
    </div>
  );
}
