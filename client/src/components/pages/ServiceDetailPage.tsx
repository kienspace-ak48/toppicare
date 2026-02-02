import { useParams, Link } from "react-router-dom";
import { Check, Clock, Apple, Smartphone } from "lucide-react";
import { ImageWithFallBack } from "../fallback/ImageWithFallback";
import { useEffect, useState } from "react";

//
const serviceDetailMock = {
  _id: "service_1",
  name: "Liệu trình kết hợp",
  slug: "liet-trinh-ket-hop",
  image: "/assets/services/banner.jpg",
  icon: "/assets/icons/service-icon.png",
  description:
    "Liệu trình kết hợp mang đến trải nghiệm chăm sóc toàn diện, giúp thư giãn và cải thiện sức khỏe.",
  benefits: [
    "Thư giãn sâu, giảm căng thẳng",
    "Cải thiện tuần hoàn máu",
    "Tăng cường sức khỏe tổng thể",
    "Đội ngũ chuyên viên giàu kinh nghiệm"
  ],
  packages: [
    {
      _id: "pkg_1",
      name: "Gói cơ bản",
      duration: 60,
      price: 399000,
      features: [
        "Massage thư giãn",
        "Xông hơi thảo dược",
        "Trà detox"
      ],
      isPopular: false
    },
    {
      _id: "pkg_2",
      name: "Gói nâng cao",
      duration: 90,
      price: 599000,
      features: [
        "Massage chuyên sâu",
        "Xông hơi đá muối",
        "Ngâm chân thảo dược",
        "Trà detox cao cấp"
      ],
      isPopular: true
    }
  ]
};




export default function ServiceDetailPage() {
  const { serviceId } = useParams(); // slug
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // MOCK DATA TẠI CHỖ
    const dataTest = {
      _id: "service_1",
      name: "Liệu trình kết hợp",
      description:
        "Liệu trình kết hợp mang đến trải nghiệm chăm sóc toàn diện.",
      packages: [
        {
          _id: "pkg_1",
          name: "Gói cơ bản",
          duration: 60,
          price: 399000,
          features: [
            "Massage thư giãn",
            "Xông hơi",
            "Trà detox"
          ],
          isPopular: false
        },
        {
          _id: "pkg_2",
          name: "Gói nâng cao",
          duration: 90,
          price: 599000,
          features: [
            "Massage chuyên sâu",
            "Xông hơi đá muối",
            "Ngâm chân"
          ],
          isPopular: true
        }
      ]
    };

    // giả lập loading
    setTimeout(() => {
      setService(serviceDetailMock);
      setLoading(false);
    }, 300);
  }, []);


  if (loading) {
    return (
      <div className="pt-24 text-center text-gray-500">
        Đang tải dịch vụ...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="pt-24 text-center">
        <p className="mb-4">Dịch vụ không tồn tại</p>
        <Link to="/services" className="text-[#2dbdb6] underline">
          Quay lại
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">

      {/* BANNER */}
      <section className="relative h-[400px] md:h-[500px]">
        <ImageWithFallBack
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 bg-[#2dbdb6] px-6 py-3 rounded-full w-fit mb-4">
              <img src={service.icon} className="w-8 h-8" />
              <span className="text-white text-xl">{service.name}</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Trải nghiệm dịch vụ {service.name.toLowerCase()}
            </h1>
            <button className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full">
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#2dbdb6] mb-4">
              Mô tả dịch vụ
            </h2>
            <p className="text-gray-700">{service.description}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2dbdb6] mb-4">
              Lợi ích
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((b: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-[#2dbdb6]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#2dbdb6] mb-12">
            Các gói dịch vụ
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {service.packages.map((pkg: any, i: number) => (
              <div
                key={pkg._id}
                className={`bg-white rounded-3xl p-8 border ${
                  pkg.isPopular
                    ? "border-[#2dbdb6] scale-105"
                    : "border-gray-200"
                }`}
              >
                {pkg.isPopular && (
                  <span className="inline-block bg-[#2dbdb6] text-white px-4 py-1 rounded-full mb-4">
                    Phổ biến nhất
                  </span>
                )}

                <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>

                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock size={18} /> {pkg.duration} phút
                </div>

                <div className="text-4xl text-[#2dbdb6] mb-6">
                  {pkg.price.toLocaleString()}đ
                </div>

                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f: string, idx: number) => (
                    <li key={idx} className="flex gap-2">
                      <Check className="text-[#2dbdb6]" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 rounded-full bg-[#2dbdb6] text-white">
                  Đặt lịch ngay
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2dbdb6] text-center text-white">
        <h2 className="text-4xl font-bold mb-4">
          Đặt lịch qua ứng dụng
        </h2>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-white text-[#2dbdb6] px-6 py-3 rounded-full">
            <Apple /> App Store
          </button>
          <button className="flex items-center gap-2 bg-white text-[#2dbdb6] px-6 py-3 rounded-full">
            <Smartphone /> Google Play
          </button>
        </div>
      </section>
    </div>
  );
}
