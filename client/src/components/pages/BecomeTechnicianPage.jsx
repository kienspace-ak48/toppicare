import { useEffect, useState } from "react";
// import { ImageWithFallBack } from '../fallback/ImageWithFallBack';
import { ImageWithFallBack } from "../fallback/ImageWithFallback";
import {
  Briefcase,
  DollarSign,
  Clock,
  Heart,
  TrendingUp,
  Users,
  Award,
  Shield,
} from "lucide-react";
import usePageConfig from "../../hooks/usePageConfig";
import DynamicFA from "../fallback/FontAwesomeIcon";
const ASSET_URL = window.__ENV__.API_URL;

const opportunities = [
  {
    icon: DollarSign,
    title: "Thu nhập hấp dẫn",
    description:
      "Thu nhập từ 15-30 triệu/tháng tùy theo năng lực và số giờ làm việc",
  },
  {
    icon: Clock,
    title: "Thời gian linh hoạt",
    description: "Tự do sắp xếp lịch làm việc phù hợp với bản thân",
  },
  {
    icon: TrendingUp,
    title: "Cơ hội phát triển",
    description: "Đào tạo nâng cao kỹ năng, thăng tiến nghề nghiệp rõ ràng",
  },
  {
    icon: Users,
    title: "Môi trường chuyên nghiệp",
    description: "Làm việc trong môi trường năng động, thân thiện",
  },
];

const steps = [
  {
    step: 1,
    title: "Đăng ký thông tin",
    description: "Điền form đăng ký với thông tin cơ bản của bạn",
    image: "https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=400",
  },
  {
    step: 2,
    title: "Phỏng vấn",
    description: "Tham gia buổi phỏng vấn với đội ngũ tuyển dụng",
    image: "https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=400",
  },
  {
    step: 3,
    title: "Đào tạo",
    description: "Tham gia khóa đào tạo kỹ năng chuyên môn 2-4 tuần",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400",
  },
  {
    step: 4,
    title: "Kiểm tra",
    description: "Hoàn thành bài kiểm tra cuối khóa và nhận chứng chỉ",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=400",
  },
  {
    step: 5,
    title: "Bắt đầu làm việc",
    description: "Chính thức trở thành KTV của ToppiCare",
    image: "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=400",
  },
];

const benefits = [
  {
    icon: Award,
    title: "Bảo hiểm đầy đủ",
    description: "BHYT, BHXH, BHTN theo quy định",
  },
  {
    icon: Heart,
    title: "Chăm sóc sức khỏe",
    description: "Khám sức khỏe định kỳ, bảo hiểm sức khỏe",
  },
  {
    icon: TrendingUp,
    title: "Thưởng hiệu suất",
    description: "Chế độ thưởng hấp dẫn theo doanh thu",
  },
  {
    icon: Shield,
    title: "An toàn lao động",
    description: "Đảm bảo an toàn tuyệt đối khi làm việc",
  },
];
const SITE_KEY = "0x4AAAAAACZ49bnQxOXBIeHL";
const SITE_KEY_DOMAIN = "0x4AAAAAACZ4I-nJdAG-KT38";
export function BecomeTechnicianPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    gender: "female",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Vui lòng xác minh captcha");
      return;
    }
    console.log("Form submitted:", formData);
    alert(
      "Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
    );
    setFormData({ fullName: "", phone: "", age: "", gender: "female" });
    //
    console.log("Form submitted:", formData);
    try {
      setLoading(true);
      const res = await fetch(`${ASSET_URL}api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token: token, // ✅ gửi token ở đây
        }),
      });

      const data = await res.json();

      if (data.success) {
        console.log(data);
        alert("Gửi thành công");
        setFormData({
          fullName: "",
          phone: "",
          age: "",
          gender: "female",
        });
      } else {
        alert("Gửi thất bại");
      }
    } catch (err) {
      console.log(err);
      alert("Lỗi server");
    } finally {
      setLoading(false);
    }
  };
  //
  const { data, loading, error } = usePageConfig();
  const teachnicianSection = data?.data?.teachnician;
  console.log(teachnicianSection);
  useEffect(() => {
    window.onTurnstileSuccess = function (t) {
      // console.log("TOKEN:", t);
      setToken(t);
    };

    if (!window.turnstile) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const [token, setToken] = useState("");

  return (
    <div className="">
      {/* Banner */}
      <section className="relative w-full aspect-3/1 overflow-hidden">
        {teachnicianSection?.slider?.map((s, i) => (
          <div key={i}>
            <ImageWithFallBack
              src={ASSET_URL + s.img}
              alt="Become Technician"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-2xl">
                  <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                    <Briefcase className="w-5 h-5 " />
                    <span>Tuyển dụng KTV</span>
                  </div>
                  <h1 className="text-white text-xl md:text-2xl mb-6">
                    {s.title}
                  </h1>
                  <p className="text-white/90 text-[16px] md:text-2xl mb-8">
                    {s.desc}
                  </p>
                  <button
                    onClick={() =>
                      document
                        .getElementById("register-form")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hidden md:block px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Opportunities */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            {teachnicianSection?.opportunity_title}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            {teachnicianSection?.opportunity_desc}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachnicianSection?.opportunity.map((opportunity, index) => {
              let Icon = opportunity.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#2dbdb6] flex items-center justify-center mb-4">
                    {/* <Icon className="w-8 h-8 text-white" /> */}
                    <DynamicFA className="w-10 h-10 text-white" name={Icon} />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 text-[16px] ">
                    {opportunity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold">
            Các bước để trở thành KTV của ToppiCare
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Quy trình đơn giản, minh bạch các bước
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {teachnicianSection?.steps?.map((step, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallBack
                    src={ASSET_URL + step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#2dbdb6] flex items-center justify-center text-white text-xl shadow-lg">
                    {step.step_number}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[rgb(204,144,0)] mb-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold line-clamp-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm text-[16px] line-clamp-2">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent pb-2 font-bold">
            {teachnicianSection?.benefit_title}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            {teachnicianSection?.benefit_desc}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teachnicianSection?.benefits?.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#2dbdb6] flex items-center justify-center">
                    <DynamicFA className="w-10 h-10 text-white" name={Icon} />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-[16px]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Work Environment Images */}
          {/* <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=400',
              'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=400',
              'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400',
            ].map((image, index) => (
              <div key={index} className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                <ImageWithFallBack
                  src={image}
                  alt={`Work Environment ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Registration Form */}
      <section
        id="register-form"
        className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent pb-2 font-bold">
            Hợp tác cùng ToppiCare
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Điền thông tin để chúng tôi liên hệ với bạn
          </p>

          <form
            onSubmit={handleSubmit}
            className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8 md:p-12"
          >
            <div className="space-y-6">
              {/* Họ và tên */}
              <div>
                <label className="block text-gray-700 mb-2 text-[16px]">
                  Họ và tên *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                  placeholder="Nhập họ và tên"
                />
              </div>

              {/* Số điện thoại */}
              <div>
                <label className="block text-gray-700 mb-2 text-[16px]">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                  placeholder="Nhập số điện thoại"
                />
              </div>

              {/* Tuổi và Giới tính */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2 text-[16px]">
                    Tuổi *
                  </label>
                  <input
                    type="number"
                    required
                    min="18"
                    max="60"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                    placeholder="Nhập tuổi"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Giới tính *
                  </label>
                  <select
                    required
                    value={formData.gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value })
                    }
                    className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="female">Nữ</option>
                    <option value="male">Nam</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
              </div>

              {/* --- PHẦN MỚI THÊM: KHÓA HỌC --- 
    <div>
      <label className="block text-gray-700 mb-2 text-[16px]">Khóa học quan tâm *</label>
      <select
        required
        value={formData.course || ''} // Đảm bảo có giá trị mặc định
        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
        className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
      >
        <option value="">-- Chọn khóa học --</option>
        <option value="co-vai-gay">Massage Cổ Vai Gáy</option>
        <option value="body">Massage Body</option>
        <option value="foot">Massage Chân</option>
        <option value="facial">Chăm sóc da mặt chuyên sâu</option>
        <option value="combo">Trị liệu toàn thân (Combo)</option>
      </select>
    </div>
    {/* ------------------------------- */}

              <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 bg-[#2dbdb6] text-white rounded-2xl"
                  >
                    {loading ? "Đang gửi..." : "Gửi tin nhắn"}
                  </button>
            </div>
            <div
                  className="cf-turnstile text-end my-4"
                  data-sitekey={SITE_KEY_DOMAIN}
                  data-callback="onTurnstileSuccess"
                ></div>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2dbdb6]">
        <a href="tel:0862484898">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-white text-3xl md:text-4xl mb-4 font-bold">
              Bạn có câu hỏi về tuyển dụng?
            </h2>
            <p className="text-white/90 text-lg mb-8 text-[16px]">
              Liên hệ với chúng tôi qua hotline: 0862.4848.98
            </p>
            <button className="px-8 py-3 bg-white text-[rgb(45,189,182)] rounded-full hover:shadow-lg hover:scale-105 transition-all text-[16px]">
              Liên hệ ngay
            </button>
          </div>
        </a>
      </section>
    </div>
  );
}
