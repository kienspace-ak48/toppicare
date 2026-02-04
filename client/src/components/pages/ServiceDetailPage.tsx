import { useParams, Link } from "react-router-dom";
import { Check, Clock, Apple, Smartphone } from "lucide-react";
import { ImageWithFallBack } from "../fallback/ImageWithFallback";
import { useEffect, useState } from "react";
import { useGetAllServicesPkg } from "../../hooks/useServices";

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
  
const ASSET_URL = window.__ENV__.API_URL;
  const { slug } = useParams();
  console.log(slug);

  const {data: dataS, loading: loadingS, error: errorS} = useGetAllServicesPkg(slug);
    console.log(dataS);
  const service2 = dataS?.data;
    // 
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


  // if (loading) {
  //   return (
  //     <div className="pt-24 text-center text-gray-500">
  //       Đang tải dịch vụ...
  //     </div>
  //   );
  // }
  // var services = null;
  console.log('service 2', service2)
  if (!service2?.packages.length) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 text-xl mb-6">Dịch vụ không tồn tại</p>
        <Link
          to="/services"
          className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
        >
          Quay lại danh sách dịch vụ
        </Link>
      </div>
    );
  }

  return (
    <div className="">

      {/* Banner */}
            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
              <ImageWithFallBack
                // src={${ASSET_URL}service2?.thumbnail}
                src={`${ASSET_URL + service2?.thumbnail}`}
                alt={service2?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 bg-[#2dbdb6] rounded-full mb-4`}>
                    {/* <img src={service?.icon} alt={service?.name} className="w-8 h-8 object-contain" /> */}
                    <Clock className="text-white" />
                    <span className="text-white text-xl">{service2?.name}</span>
                  </div>
                  <h1 className="text-white text-4xl md:text-6xl mb-6 max-w-2xl font-bold">
                    Trải nghiệm dịch vụ {service2?.name.toLowerCase()} chuyên nghiệp
                  </h1>
                  <button 
                    // onClick={handleAppStoreClick}
                    className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
                  >
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
            <p className="text-gray-700">{service2.desc}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#2dbdb6] mb-4">
              Lợi ích
            </h2>
            <ul className="space-y-3">
              {service2.benefits.map((b: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <Check className="text-[#2dbdb6]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2 leading-relaxed">
            Các gói dịch vụ
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Lựa chọn gói phù hợp với nhu cầu của bạn
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {service2?.packages?.map((pkg: any, index: number) => (
              <div
                key={index}
                className={`backdrop-blur-lg bg-white/70 border-2 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105 ${
                  pkg.is_popular === true ? 'border-[#2dbdb6] transform scale-105' : 'border-white/20'
                }`}
              >
                {pkg.is_popular === true && (
                  <div className="inline-block px-4 py-1 bg-[#2dbdb6] text-white rounded-full text-sm mb-4">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-2xl mb-2 text-gray-800">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <Clock className="w-5 h-5" />
                  <span>{pkg.duration +' phút'}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl bg-[#2dbdb6] bg-clip-text text-transparent">
                    {pkg.price+'.000đ'}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#2dbdb6] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <button 
                  onClick={handleAppStoreClick}
                  className={`w-full py-3 rounded-full transition-all ${
                    index === 1
                      ? 'bg-[#2dbdb6] text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Đặt lịch ngay
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2dbdb6] to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-4 font-bold">
            Đặt lịch dễ dàng qua ứng dụng
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Tải app ToppiCare để đặt lịch và nhận ưu đãi đặc biệt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              // onClick={handleAppStoreClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white text-[#2dbdb6] rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <Apple className="w-6 h-6" />
              <span>Tải trên App Store</span>
            </button>
            <button 
              // onClick={handleGooglePlayClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white text-[#2dbdb6] rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <Smartphone className="w-6 h-6" />
              <span>Tải trên Google Play</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
