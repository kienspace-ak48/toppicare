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
import BlogDetail from "./components/pages/BlogDetail";
import PolicyPage from "./components/pages/PolicyPage";
import PocicyPartner from './components/pages/PolicyPartner';
import Dashboard from "./pages/admin/Dashboard";
import ServiceDetailPage from "./components/pages/ServiceDetailPage";

// import Users from "./pages/admin/Users";
import NotFound from "./components/pages/NotFound";
import './index_original.css'
import { HelpCenterPage } from "./components/pages/HelpCenterPage";
import { BecomeTechnicianPage } from "./components/pages/BecomeTechnicianPage";
import ArticleDetail from "./components/pages/ArticleDetail";
export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        {/* CLIENT */}
        <Route element={<ClientLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/dich-vu" element={<Service />} />
          <Route path="/dich-vu/chi-tiet/:slug" element={<ServiceDetailPage />} />
          <Route path="/trung-tam-ho-tro/bai-viet/:slug" element={<ArticleDetail/>}/>
          <Route path="/training" element={<Traning />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/trung-tam-ho-tro" element={<HelpCenterPage />} />
          <Route path="/tuyen-ky-thuat-vien" element={<BecomeTechnicianPage />} />

          <Route path="/bai-viet/:slug" element={<BlogDetail/>}/>
          <Route path="/policy/customer" element={<PolicyPage/>}></Route>
          <Route path="/policy/partner" element={<PocicyPartner/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>

        {/* ADMIN */}
        <Route path="/admin-old" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="pageconfig/homepage" element={<HomeAdminConfig />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}
