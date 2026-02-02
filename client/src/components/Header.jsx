import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Globe,
  Download,
  UserPlus,
  HelpCircle,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Newspaper,
  Phone,
} from "lucide-react";
import imgLogo from "t_logo";
export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState();
  const location = useLocation();
  const mainMenuItems = [
    { name: "Trang Chủ", path: "/", icon: Home },
    { name: "Giới thiệu", path: "/about", icon: Info },
    { name: "Dịch vụ", path: "/services", icon: Briefcase },
    { name: "Học viện đào tạo", path: "/training", icon: GraduationCap },
    { name: "Tin tức & Hoạt động", path: "/news", icon: Newspaper },
    { name: "Liên hệ", path: "/contact", icon: Phone },
  ];
  const horizontalMenuItems = [
    { name: "Tải ứng dụng", icon: Download, action: "download" },
    { name: "Trở thành KTV", icon: UserPlus, path: "/become-teachnician" },
    { name: "Trung tâm hỗ trợ", icon: HelpCircle, path: "/help" },
  ];
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/70 border-b border-white/20 shadow-lg ">
        {/* Topbar - horizontal menu */}
        <div className="bg-gray-100 text-gray-800 py-2 px-4 border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleDropdown}
                className="p-2 rounded-lg hover:bg-[#dbdb6]/10 transition-colors"
              >
                {dropdownOpen ? (
                  <X className="w-8 h-8 text-[#2dbdb6]" />
                ) : (
                  <Menu className="w-8 h-8 text-[2dbdb6" />
                )}
              </button>
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center"
                onClick={closeDropdown}
              >
                <img
                  src={imgLogo}
                  alt="Toppicare logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-4 md:gap-6 text-sm ml-auto">
              {horizontalMenuItems.map((item) => (
                              item.path ? (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                                >
                                  <item.icon className="w-4 h-4" />
                                  <span className="hidden sm:inline text-[16px]">{item.name}</span>
                                </Link>
                              ) : (
                                <button
                                  key={item.name}
                                  onClick={() => {
                                    if (item.action === 'download') {
                                      window.open('https://play.google.com/store/apps/details?id=com.viettrace.toppicare&pcampaignid=web_share', '_blank');
                                    }
                                  }}
                                  className="flex items-center gap-1 hover:opacity-80 transition-opacity"
                                >
                                  <item.icon className="w-4 h-4" />
                                  <span className="hidden sm:inline text-[16px]">{item.name}</span>
                                </button>
                              )
                            ))}
              <button className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline text-[16px] ">VI</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown menu */}
      {dropdownOpen && (
        <>
          {/* backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-30 transition-opacity"
            onClick={closeDropdown}
          />
          {/* Dropdown content */}
          <div className="fixed top-13 left-0 right-0 z-35 backdrop-blur-xl bg-white/95 shadow-2xl border-b border-white/20 animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mainMenuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          onClick={closeDropdown}
                          className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                            isActive
                              ? "bg-[#2bdbd6] text-white shadowlg"
                              : "text-gray-700 hover:bg-white/80 hover:shadow-md"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Support Section */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="backdrop-blur-lg bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-4 max-w-md">
                  <h3 className="text-sm mb-2 text-gray-800">Cần hỗ trợ?</h3>
                  <p className="text-xs text-gray-600 mb-3">
                    Liên hệ hotline để được tư vấn
                  </p>
                  <a
                    href="tel:0862484898"
                    className="inline-block px-6 py-2 bg-[#2dbdb6] text-white text-sm rounded-xl hover:shadow-lg transition-all"
                  >
                    0862.4848.98
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
  // end
}
