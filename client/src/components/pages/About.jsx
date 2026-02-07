import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallBack } from "../fallback/ImageWithFallback";

import usePageConfig from "../../hooks/usePageConfig";
// const ASSET_URL = import.meta.env.VITE_API_URL;
const ASSET_URL = window.__ENV__.API_URL;

// const {data, loading, error} = usePageConfig();
// const homepage = data.data?.homepage;
// console.log(data)

// const bannerSlides0 = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=1200",
//     title: "Về ToppiCare",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=1200",
//     title: "Đội ngũ chuyên nghiệp",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=1200",
//     title: "Dịch vụ chất lượng cao",
//   },
// ];

function About() {
  //
  const { data, loading, error } = usePageConfig();
  // console.log(data)
  const aboutSection = data?.data?.about;
  // console.log("aboutSection co gi", aboutSection);
  const [currentSlide, setCurrentSlide] = useState(0);
  //
  const bannerSlides = aboutSection?.slider;
  console.log(bannerSlides)
  //
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + bannerSlides.length) % bannerSlides.length,
    );
  };
  return (
    <div className="">
      {/* Banner Slider */}
      <section className="relative w-full aspect-3/1 overflow-hidden">
        {aboutSection?.slider.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallBack
              src={ASSET_URL + slide.img}
              alt={slide.title}
              className="w-full h-full object-contain object-center"
            />
            <div className="absolute inset-0 "></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <h1 className="text-white text-4xl md:text-6xl font-bold">
                  {slide.title}
                </h1>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Vision */}
      {aboutSection?.vision.map((v, index) => (
        <section 
        key={index}
        className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className={`flex items-center gap-8 ${
                index % 2 === 1 ? "flex-row-reverse" : "flex-row"
              }
            `}
            >
              {/* Image  */}
              <div className="w-1/2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <ImageWithFallBack
                    src={ASSET_URL + v.img}
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl -z-10"></div> */}
              </div>
              {/* Content */}
              <div className="w-1/2">
                <h2 className="text-3xl md:text-4xl mb-6 bg-[#2dbdb6] bg-clip-text text-transparent font-bold">
                  {v?.title}
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {v?.desc?.map((d, index) => (
                    <p
                      key={index}
                      className="text-[15px]"
                      className="text-[16px]"
                    >
                      {d}
                    </p>
                  ))}
                  {/* Trở thành nền tảng dịch vụ chăm sóc sức khỏe hàng đầu tại Việt Nam, mang đến những trải nghiệm massage và spa chuyên nghiệp, tiện lợi và chất lượng cao cho hàng triệu người dân. */}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Mission */}
      {/* <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl mb-6 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                Sứ mệnh
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-[15px]" className="text-[16px]">
                  <strong className="text-[#2dbdb6]">Mang lại sức khỏe và hạnh phúc:</strong> Chúng tôi cung cấp các dịch vụ chăm sóc sức khỏe chuyên nghiệp, giúp khách hàng thư giãn, giảm stress và cải thiện chất lượng cuộc sống.
                </p>
                <p className="text-[16px]">
                  <strong className="text-[#2dbdb6]">Tạo cơ hội việc làm:</strong> Xây dựng một đội ngũ kỹ thuật viên tay nghề cao, tạo ra hàng nghìn cơ hội việc làm ổn định và thu nhập hấp dẫn.
                </p>
                <p className="text-[15px]" className="text-[16px]">
                  <strong className="text-[#2dbdb6]">Ứng dụng công nghệ:</strong> Sử dụng nền tảng công nghệ hiện đại để kết nối khách hàng với các dịch vụ chăm sóc sức khỏe một cách nhanh chóng, tiện lợi và minh bạch.
                </p>
                <p className="text-[15px]" className="text-[16px]">
                  <strong className="text-[#2dbdb6]">Phát triển bền vững:</strong> Cam kết phát triển doanh nghiệp theo hướng bền vững, đóng góp tích cực cho sự phát triển của cộng đồng và xã hội.
                </p>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallBack
                  src="https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=600"
                  alt="Mission"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Brand Story */}
      {/* <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallBack
                  src="https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600"
                  alt="Brand Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-3xl -z-10"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                Câu chuyện thương hiệu
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-[15px]" className="text-[16px]">
                  ToppiCare được thành lập vào năm 2020 với mong muốn mang đến những dịch vụ chăm sóc sức khỏe chất lượng cao, tiện lợi và dễ tiếp cận cho mọi người dân Việt Nam.
                </p>
                <p className="text-[15px]" className="text-[16px]">
                  Xuất phát từ những khó khăn trong việc tìm kiếm các dịch vụ massage và spa uy tín, đội ngũ sáng lập ToppiCare đã quyết tâm xây dựng một nền tảng công nghệ kết nối khách hàng với các kỹ thuật viên chuyên nghiệp.
                </p>
                <p className="text-[15px]" className="text-[16px]">
                  Sau 4 năm phát triển, ToppiCare đã phục vụ hơn 500.000 khách hàng, có mặt tại 10 tỉnh thành lớn trên toàn quốc với đội ngũ hơn 2.000 kỹ thuật viên được đào tạo bài bản.
                </p>
                <p className="text-[15px]" className="text-[16px]">
                  Chúng tôi tự hào là đơn vị tiên phong trong việc ứng dụng công nghệ vào lĩnh vực chăm sóc sức khỏe, không ngừng cải tiến để mang lại trải nghiệm tốt nhất cho khách hàng và kỹ thuật viên.
                </p>
                <p className="text-[#2dbdb6]">
                  <em>"ToppiCare - Chăm sóc sức khỏe, Nâng tầm trải nghiệm"</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats */}
      <section className="py-16 bg-[#2dbdb6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {aboutSection?.stats.map((s, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl mb-2">{s.number}</div>
                <div className="text-sm md:text-base opacity-90 text-[16px] text-[15px]">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
