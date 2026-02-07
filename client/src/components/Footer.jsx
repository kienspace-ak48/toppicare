import imgLogo from "t_logo";
import { Link } from "react-router-dom";
import imgLogo2 from "t_logo2";
import chplay_qr from 'chplay_qr';
import chplay_qr2 from 'chplay_qr2';
import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";

function Footer() {
  const aboutLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Gới thiệu", path: "/about" },
    { name: "Dịch vụ", path: "/services" },
    { name: "Học viện đào tạo", path: "/training" },
    { name: "Tin tức & Hoạt động", path: "/news" },
    { name: "Tuyển dụng", path: "/become-partner" },
  ];
  const policyLinks = [
    { name: "Chính sách cho Khách hàng", path: "/policy/customer" },
    { name: "Chính sách cho KTV", path: "/policy/partner" },
  ];

  return (
    <>
      <footer className="bg-[rgb(57,181,74)] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Chia lam 2 khối lớn trên màn hình lớn (LG) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* --- Khoi ben trai (logo, contact, about) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* 1.logo & contact info */}
              <div className="space-y-4">
                <Link to="/" className="flex items-center gap-3">
                  <img
                    src={imgLogo2}
                    alt="toppicare logo"
                    className="h-14 w-auto object-contain"
                  />
                </Link>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white-200" />
                    <span className="text-[rgb(255,255,255)]">
                      16A Lê Hồng Phong, Phường Hòa Hưng, Ho Chi Minh City, Vietnam
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 text-white-200" />
                    <span className="text-[rgb(255,255,255)]">0862.4848.98</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 text-white-200" />
                    <span className="text-[rgb(255,255,255)]">
                      info@toppicare.vn
                    </span>
                  </div>
                </div>
              </div>
              {/* 2. About ToppiCare */}
              <div>
                <h3 className="text-lg mb-4 bg-[#cc9000] bg-clip-text text-[rgb(228,228,228)] font-bold">
                  Về ToppiCare
                </h3>
                <ul className="space-y-2 text-sm">
                  {aboutLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-[rgb(255,255,255)] hover:text-orange transition-colors hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* --- KHỐI BÊN PHẢI (Policies, Social, Download App) --- */}
            <div className="flex flex-col gap-8">
              {/* Hàng trên: Policies và Social Media nằm ngang nhau */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* 3. Policies */}
                <div>
                  <h3 className="text-lg mb-4 bg-[#cc9000] bg-clip-text text-[rgb(228,228,228)] font-bold">
                    Chính sách và điều khoản
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {policyLinks.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.path}
                          className="text-[rgb(255,255,255)] hover:text-white transition-colors hover:translate-x-1 inline-block"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Social Media */}
                <div>
                  <h3 className="text-lg mb-4 bg-[#cc9000] bg-clip-text text-[rgb(228,228,228)] font-bold">
                    Mạng xã hội
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/toppicare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.youtube.com/@ToppiCare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@toppicare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* --- PHẦN DOWNLOAD APP (Nằm dưới cùng của khối phải) --- */}
              {/* w-full sẽ giúp nó tự động dài bằng bề ngang của khối chứa (bằng tổng Policies + Social) */}
              <div className="w-full bg-gradient-to-br from-cyan-100 to-teal-100 rounded-2xl p-6 flex flex-col xl:flex-row items-center justify-between gap-6 shadow-lg">
                <div className="flex items-center gap-4">
                  {/* QR Code */}
                  <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex-shrink-0 shadow-md">
                    <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      {/* <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                        />
                      </svg> */}
                      <img src={chplay_qr2} alt="qr code" />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="text-center md:text-left">
                    <h4 className="text-gray-900 font-bold text-base">
                      Tải App Toppicare
                    </h4>
                    <p className="text-gray-600 text-xs mt-1">
                      Trải nghiệm đặt lịch ngay
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className=" flex gap-2 w-full xl:w-auto">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.viettrace.toppicare&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 xl:flex-none flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl px-3 py-2 hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[8px] opacity-80 uppercase">
                        GET IT ON
                      </span>
                      <span className="text-xs font-bold">Google Play</span>
                    </div>
                    {/* <!-- Hover QR --> */}
                      <div
                        className="absolute hidden top-full left-0 -mt-20  group-hover:block bg-white p-2 rounded-md shadow-lg z-40"
                      >
                        <img
                          src="/toppi_ggplay.png"
                          className="max-w-32 max-h-32 object-contain"
                          alt="QR App Store"
                        />
                      </div>
                    {/*  */}
                  </a>
                  

                  <a
                    href="https://apps.apple.com/vn/app/toppicare/id6755223405?l=vi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex-1 xl:flex-none flex items-center justify-center gap-2 bg-gray-900 text-white rounded-xl px-3 py-2 hover:bg-gray-800 transition-colors shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-[8px] opacity-80 uppercase">
                        Download on
                      </span>
                      <span className="text-xs font-bold">App Store</span>
                    </div>
                    {/* <!-- Hover QR --> */}
                      <div
                        className="absolute hidden top-full left-0 -mt-20  group-hover:block bg-white p-2 rounded-md shadow-lg z-40"
                      >
                        <img
                          src="/toppi_appstore.png"
                          className="max-w-32 max-h-32 object-contain"
                          alt="QR App Store"
                        />
                      </div>
                    {/*  */}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* copyright */}
          <div className="pt-8 border-t boreder-white/10 text-center text-sm text-gray-400">
            <p className="text-[rgb(255,255,255)]">
              &copy; 2024 ToppiCare. Tất cả được bảo lưu.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export { Footer };
