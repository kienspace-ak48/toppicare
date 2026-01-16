import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ClientLayout from "./layouts/ClientLayout";
import AdminLayout from "./layouts/AdminLayout";
import ScrollToTop from "./components/utils/ScrollToTop";

import { HomePage } from "./components/pages/HomePage";
import About from "./components/pages/About";
import Service from "./components/pages/Service";
import Traning from "./components/pages/Traning";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import HomeAdminConfig from './components/admin/pageconfig/HomeCF'

import Dashboard from "./pages/admin/Dashboard";
// import Users from "./pages/admin/Users";
import NotFound from "./components/pages/NotFound";
import './index_original.css'
export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* CLIENT */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/training" element={<Traning />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Route>

        {/* ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pageconfig/homepage" element={<HomeAdminConfig />} />
          {/* ❗ 404 ADMIN */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
