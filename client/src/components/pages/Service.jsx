import { Link } from "react-router-dom";
import { ImageWithFallBack } from "../fallback/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

import imgImage13 from "slider_1";
import imgDaCopy21 from "slider_1";
import imgDauCopy21 from "slider_1";
import imgVaiCoGayCopy21 from "slider_1";
import imgImage14 from "slider_2";
import imgTayCopy211 from "slider_1";
import imgChanCopy21 from "slider_1";
import imgBodyCopy21 from "slider_1";
import imgPhuKhoaCopy1 from "slider_1";
import imgThietBiChamSocCopy21 from "slider_1";

const services = [
  {
    id: "liet-trinh-ket-hop",
    name: "Liệu trình kết hợp",
    icon: imgImage13,
    color: "from-green-500 to-teal-500",
    description:
      "Kết hợp nhiều phương pháp massage và chăm sóc sức khỏe toàn diện",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600",
  },
  {
    id: "da",
    name: "Da",
    icon: imgDaCopy21,
    color: "from-teal-500 to-cyan-500",
    description: "Chăm sóc da chuyên sâu, làm đẹp và tái tạo làn da khỏe mạnh",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=600",
  },
  {
    id: "dau",
    name: "Đầu",
    icon: imgDauCopy21,
    color: "from-green-500 to-emerald-500",
    description: "Massage đầu thư giãn, giảm stress và cải thiện giấc ngủ",
    image: "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=600",
  },
  {
    id: "vai-co-gay",
    name: "Vai cổ gáy",
    icon: imgVaiCoGayCopy21,
    color: "from-green-500 to-emerald-500",
    description: "Giảm đau nhức vùng vai, cổ, gáy do làm việc văn phòng",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600",
  },
  {
    id: "tay",
    name: "Tay",
    icon: imgImage14,
    color: "from-teal-500 to-cyan-500",
    description: "Massage tay, giảm căng thẳng và mệt mỏi do làm việc",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=600",
  },
  {
    id: "chan",
    name: "Chân",
    icon: imgTayCopy211,
    color: "from-green-500 to-teal-500",
    description: "Bấm huyệt bàn chân, giảm mỏi và căng thẳng cho đôi chân",
    image: "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=600",
  },
  {
    id: "body",
    name: "Body",
    icon: imgChanCopy21,
    color: "from-teal-500 to-cyan-500",
    description: "Massage toàn thân giúp thư giãn và cải thiện tuần hoàn máu",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600",
  },
  {
    id: "phu-khoa",
    name: "Phụ khoa",
    icon: imgBodyCopy21,
    color: "from-green-500 to-emerald-500",
    description: "Chăm sóc sức khỏe phụ khoa chuyên nghiệp và riêng tư",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=600",
  },
  {
    id: "thiet-bi-cham-soc",
    name: "Thiết bị chăm sóc",
    icon: imgPhuKhoaCopy1,
    color: "from-teal-500 to-cyan-500",
    description: "Sử dụng thiết bị hiện đại cho liệu trình chăm sóc chuyên sâu",
    image: "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=600",
  },
];

const bookingSteps = [
  {
    step: 1,
    title: "Tải ứng dụng ToppiCare",
    description: "Tải app từ App Store hoặc Google Play",
    image: "https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=400",
  },
  {
    step: 2,
    title: "Chọn dịch vụ",
    description: "Lựa chọn loại dịch vụ và thời gian phù hợp",
    image: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=400",
  },
  {
    step: 3,
    title: "Xác nhận thông tin",
    description: "Nhập địa chỉ và thông tin liên hệ",
    image: "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=400",
  },
  {
    step: 4,
    title: "Thanh toán",
    description: "Thanh toán online hoặc tiền mặt",
    image: "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400",
  },
  {
    step: 5,
    title: "KTV đến phục vụ",
    description: "Kỹ thuật viên sẽ đến đúng giờ hẹn",
    image: "https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=400",
  },
];


function Service() {
  const [selectedStep, setSelectedStep] = useState(1);
  return (
    <div className="">
      {/* Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallBack
          src="https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=1200"
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-4xl md:text-6xl mb-6 font-bold">
              Dịch vụ của chúng tôi
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 text-[16px]">
              Khám phá các dịch vụ chăm sóc sức khỏe chuyên nghiệp với đội ngũ kỹ thuật viên tay nghề cao
            </p>
            <button className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            Các dịch vụ nổi bật
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Lựa chọn dịch vụ phù hợp với nhu cầu của bạn
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallBack
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 w-16 h-16 rounded-2xl bg-[#2dbdb6] flex items-center justify-center shadow-lg overflow-hidden`}>
                    <img src={service.icon} alt={service.name} className="w-12 h-12 object-contain" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-[16px]">{service.description}</p>
                  <div className="flex items-center text-[#2dbdb6] group-hover:gap-2 transition-all">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Guide */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            Hướng dẫn đặt dịch vụ
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px] text-[15px]">
            5 bước đơn giản để đặt dịch vụ chăm sóc sức khỏe tại nhà
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Steps List - Left Side */}
            <div className="flex flex-col gap-4">
              {bookingSteps.map((step) => (
                <button
                  key={step.step}
                  onClick={() => setSelectedStep(step.step)}
                  className={`w-full backdrop-blur-lg border rounded-3xl p-6 transition-all text-left ${
                    selectedStep === step.step
                      ? 'bg-[#2dbdb6] border-green-500 shadow-xl scale-105'
                      : 'bg-white/70 border-white/20 hover:shadow-lg hover:scale-102'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all ${
                        selectedStep === step.step
                          ? 'bg-white text-[#2dbdb6]'
                          : 'bg-gradient-to-br from-[#2dbdb6] text-white'
                      }`}
                    >
                      {selectedStep === step.step ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="text-lg">{step.step}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg mb-2 font-bold transition-colors ${
                          selectedStep === step.step ? 'text-white' : 'text-gray-800'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm transition-colors ${
                          selectedStep === step.step ? 'text-white/90' : 'text-gray-600'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Image Display - Right Side */}
            <div className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                {bookingSteps.map((step) => (
                  <div
                    key={step.step}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      selectedStep === step.step ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <ImageWithFallBack
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                        <span className="text-sm">Bước {step.step}</span>
                      </div>
                      <h3 className="text-2xl mb-2">{step.title}</h3>
                      <p className="text-white/90">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Tải ứng dụng ngay
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2dbdb6]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-4 font-bold">
            Sẵn sàng trải nghiệm dịch vụ của chúng tôi?
          </h2>
          <p className="text-white/90 text-lg mb-8 text-[16px]">
            Đặt lịch ngay hôm nay để nhận ưu đãi đặc biệt
          </p>
          <button className="px-8 py-3 bg-white text-[rgb(45,189,182)] rounded-full hover:shadow-lg hover:scale-105 transition-all">
            Đặt lịch ngay
          </button>
        </div>
      </section>
    </div>
  );
}

export default Service;
