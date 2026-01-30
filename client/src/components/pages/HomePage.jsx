import slider_1 from "slider_1";
import slider_2 from "slider_2";
import slider_3 from "slider_3";
import {
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Shield,
  Award,
  DollarSign,
  Lock,
  TrendingUp,
  ChevronDown,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ImageWithFallBack } from "../fallback/ImageWithFallback";
import {Link} from 'react-router-dom';
// const ASSET_URL = import.meta.env.VITE_API_URL;
const ASSET_URL = window.__ENV__.API_URL;

import useServices from "../../hooks/useServices";
import usePageConfig from "../../hooks/usePageConfig";
import { useNews, useThreeBlogHomePage } from "../../hooks/useNews";
import { formatDate } from "../utils/formatDate";

function HomePage() {
  console.log(useThreeBlogHomePage())
  const {
  data: dataNews,
  loading: loadingNews,
  error: errNews
} = useThreeBlogHomePage();
  const newsArticles_2 = dataNews?.data;
  console.log(dataNews?.data)
  // const { data, loading, error } = useServices();
  const{data, loading, error} = usePageConfig();
  console.log(data)
  const [pageConfig, setPageConfig] = useState(null);
  let heroSlides =data.data?.homepage?.banner??[];
  let intro_app_benefits = data.data?.homepage?.intro_app?.benefits ??[];
  useEffect(() => {
    if (data) {
      setPageConfig(data.data);
    }
  }, [data]);
  
  
  // console.log(data)
  // const heroSlides = [
  //   {
  //     id: 1,
  //     image: slider_1,
  //     title: "Dịch vụ massage chăm sóc sức khỏe",
  //   },
  //   {
  //     id: 2,
  //     image: slider_2,
  //     title: "Kỹ thuật viên chuyên nghiệp",
  //   },
  //   {
  //     id: 3,
  //     image: slider_3,
  //     title: "Thư giãn và chăm sóc toàn diện",
  //   },
  // ];
  
  //   const services = [
  //     {
  //       id: "liet-trinh-ket-hop",
  //       name: "Liệu trình kết hợp",
  //       icon: imgImage13,
  //       color: "from-green-500 to-teal-500",
  //     },
  //     {
  //       id: "da",
  //       name: "Da",
  //       icon: imgDaCopy21,
  //       color: "from-teal-500 to-cyan-500",
  //     },
  //     {
  //       id: "dau",
  //       name: "Đầu",
  //       icon: imgDauCopy21,
  //       color: "from-green-500 to-emerald-500",
  //     },
  //     {
  //       id: "vai-co-gay",
  //       name: "Vai cổ gáy",
  //       icon: imgVaiCoGayCopy21,
  //       color: "from-green-500 to-emerald-500",
  //     },
  //     {
  //       id: "tay",
  //       name: "Tay",
  //       icon: imgImage14,
  //       color: "from-teal-500 to-cyan-500",
  //     },
  //     {
  //       id: "chan",
  //       name: "Chân",
  //       icon: imgTayCopy211,
  //       color: "from-green-500 to-teal-500",
  //     },
  //     {
  //       id: "body",
  //       name: "Body",
  //       icon: imgChanCopy21,
  //       color: "from-teal-500 to-cyan-500",
  //     },
  //     {
  //       id: "phu-khoa",
  //       name: "Phụ khoa",
  //       icon: imgBodyCopy21,
  //       color: "from-green-500 to-emerald-500",
  //     },
  //     {
  //       id: "thiet-bi-cham-soc",
  //       name: "Thiết bị chăm sóc",
  //       icon: imgPhuKhoaCopy1,
  //       color: "from-teal-500 to-cyan-500",
  //     },
  //     {
  //       id: "tat-ca",
  //       name: "Tất cả",
  //       icon: imgThietBiChamSocCopy21,
  //       color: "from-green-500 to-teal-500",
  //     },
  //   ];
  // const commitments = [
  //   {
  //     icon: Award,
  //     title: "Kỹ Thuật Viên tay nghề cao",
  //     description:
  //       "Đội ngũ KTV được đào tạo bài bản, chuyên nghiệp với kinh nghiệp lâu năm",
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: "Liệu trình đa dạng",
  //     description:
  //       "Nhiều gói dịch vụ phong phú, phù hợp với mọi nhu cầu khách hàng",
  //   },
  //   {
  //     icon: DollarSign,
  //     title: "Giá cả minh bạch",
  //     description: "Bảng giá rõ ràng, không phát sinh chi phí ẩn",
  //   },
  //   {
  //     icon: Lock,
  //     title: "Bảo mật thông tin cá nhân",
  //     description: "Cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Hiệu quả vượt trội",
  //     description: "Mang lại kết quả chăm sóc sức khỏe tối ưu nhất",
  //   },
  //   {
  //     icon: Clock,
  //     title: "Đúng hẹn",
  //     description:
  //       "An tâm trải nghiệm: Kỹ thuật viên đến đúng giờ, đúng lịch hẹn, giúp khách hàng thư giãn trọn vẹn ngay tại nhà",
  //   },
  // ];
  const newsArticles = [
    {
      id: 1,
      title: "Lợi ích của mesage thường xuyên đối với sức khỏe",
      excerpt:
        "Khám phá những lợi ích tuyệt vời mà massage mang lại cho cơ thể và tinh thần...",
      image:
        "https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400",
      date: "15/12/2024",
    },
    {
      id: 2,
      title: "ToppiCare khai trương chi nhánh mới tại Quận 7",
      excerpt: "Chúng tôi vui mừng thông báo về sự ra mắt chi nhánh mới...",
      image:
        "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=400",
      date: "10/12/2024",
    },
    {
      id: 3,
      title: "Chương trình khuyến mãi đặc biệt dịp cuối năm",
      excerpt: "Giảm giá lên đến 30% cho các gói dịch vụ spa cao cấp...",
      image:
        "https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=400",
      date: "05/12/2024",
    },
  ];
  const faqs = [
    {
      question: "Làm thế nào để đặt lịch dịch vụ?",
      answer:
        "Bạn có thể đặt lịch qua ứng dụng ToppiCare hoặc gọi số hotline 1900 xxxx",
    },
    {
      question: "ToppiCare có phục vụ tại nhà không?",
      answer:
        "Có, chúng tôi cung cấp dịch vụ massage tại nhà trong khu vực nội thành TP.HCM. KTV sẽ mang theo đầy đủ dụng cụ chuyên nghiệp.",
    },
    {
      question: "Giá dịch vụ của ToppiCare như thế nào?",
      answer:
        "Giá dịch vụ dao động từ 200.000đ - 800.000đ tùy theo loại dịch vụ và thời lượng. Bạn có thể xem chi tiết trong mục Dịch vụ.",
    },
    {
      question: "Tôi có thể hủy lịch đã đặt không?",
      answer:
        "Bạn có thể hủy lịch trước 2 giờ so với giờ hẹn mà không mất phí. Hủy muộn hơn sẽ tính phí 30% giá trị dịch vụ.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  return (
    <div className="">
      {/* Hero slider */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden ">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opcaity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallBack
              src={ASSET_URL+slide.banner_img}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <h2 className="text-white text-4xl md:text-6xl max-w-2xl mb-6 font-bold">
                  {slide.title}
                </h2>
                <button className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all">
                  Đặt lịch ngay
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* button  */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2  w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        {/* control slide */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
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
      {/* Slogan */}
      <section className="py-6 bg-[#2bdbd6]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            {pageConfig?.homepage?.slogan??'Chạm là khỏe - Đặt là đến!'}
            
          </h2>
        </div>
      </section>
      {/* About Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                {/* Giới thiệu về ToppiCare */}
                {pageConfig?.homepage?.about?.title}
              </h2>
              <div>
                {pageConfig?.homepage?.about.desc.split("/br/").map((item, index)=>(
                  <p key={index} className="text-gray-700 mb-6 leading-relaxed text-[15px]">
                    {item}
                  </p>
                ))}
              </div>
              {/* <p className="text-gray-700 mb-6 leading-relaxed text-[16px] text-[15px]">
                Với đội ngũ kỹ thuật viên được đào tạo bài bản, chúng tôi cam
                kết mang đến dịch vụ chất lượng cao, giúp khách hàng thư giãn và
                cải thiện sức khỏe một cách toàn diện.
              </p> */}
              <Link
                to="/about"
                className="inline-block px-6 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="relative">
              {/* Khối Video Thumbnail và Nút Play */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-200 to-teal-200 z-10">
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <button className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform shadow-lg group">
                    {/* Thêm class group vào button để có thể style icon bên trong khi hover nút */}
                    <Play className="w-10 h-10 text-[#2dbdb6] ml-1 group-hover:text-green-700 transition-colors" />
                  </button>
                </div>
                <ImageWithFallBack
                  src="https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=800"
                  alt="Video Introduction"
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro App & Services Section */}
      <section className="py-16 md:py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* CỘT TRÁI: HÌNH ẢNH ĐIỆN THOẠI */}
            <div className="relative order-2 md:order-1">
              {/* Hiệu ứng nền mờ trang trí phía sau điện thoại */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#2dbdb6]/20 to-green-100 rounded-full blur-3xl -z-10"></div>
              
              {/* Hình ảnh điện thoại */}
              <div className="relative mx-auto w-full max-w-[350px] transform hover:scale-[1.02] transition-transform duration-500">
                {/* Bạn thay biến 'phoneAppImage' bằng đường dẫn ảnh bạn vừa upload nhé */}
                <img 
                  src={ASSET_URL+pageConfig?.homepage?.intro_app.img}
                  alt="Toppicare App Interface" 
                  className="w-full h-auto drop-shadow-2xl" 
                />
              </div>
            </div>

            {/* CỘT PHẢI: NỘI DUNG TEXT */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {/* ToppiCare - Nền tảng đặt lịch <span className="text-[#2dbdb6]">massage và chăm sóc sức khỏe</span> tại nhà */}
                {pageConfig?.homepage?.intro_app?.title}
              </h2>

              {/* Danh sách các tính năng (Checklist) */}
              <ul className="space-y-4 mb-8">
                {
                // mau= [
                //   "Đa dạng gói dịch vụ, đáp ứng mọi nhu cầu chăm sóc",
                //   "Đặt lịch nhanh chóng chỉ với vài thao tác",
                //   "Nhiều ưu đãi hấp dẫn dành cho khách hàng",
                //   "Gợi ý chăm sóc thông minh",
                //   "Ghi lại lịch sử sức khỏe sau mỗi lần trải nghiệm"
                // ];
                
                intro_app_benefits.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#2dbdb6]/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#2dbdb6] stroke-[3]" />
                    </div>
                    <span className="text-gray-700 text-[16px] md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2dbdb6] text-white rounded-full font-semibold hover:bg-teal-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Tìm hiểu thêm các dịch vụ của chúng tôi
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
      {/* Commitments */}
      <section className="py-4 md:py-12 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                {pageConfig?.homepage?.commitment?.title??'Cam kết của chúng tôi _'} 
            </h2>
            <p className="text-center text-gray-600 mb-12 text-[16px]">
                {pageConfig?.homepage?.commitment?.desc??'Những giá trị cốt lõi mà ToppiCare mang đến _'} 
            </p>
            {/*  */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pageConfig?.homepage.commitment.cards.map((com, index)=>{
                    const Icon = Award;
                    return(
                        <div
                        key={index} 
                        className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105">
                            <div className="w-16 h-16 rounded-2xl bg-[#2dbdb6] flex items-center justify-center mb-4" >
                                <Icon className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="text-xl mb-3 bg-gradient-to-r from-[#ff6b6b] to-[#FF8C42] bg-clip-text text-transparent text-[16px] font-bold">{com.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-[16px]">{com.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
              Tin tức & Hoạt động mới nhất
            </h2>
            <Link
              to="/news"
              className="text-[#2dbdb6] hover:text-teal-600 transition-colors flex items-center gap-2"
            >
              Xem thêm
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {newsArticles_2?.map((article) => (
              <Link to={`/blog-detail/${article.slug}`}>
                <div
                key={article._id}
                className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
              >
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallBack
                    src={ASSET_URL+article.img}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  {/* --- MỚI: Mắt xem (Góc phải trên) --- */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full text-sm flex items-center gap-2 shadow-sm">
          <Eye className="w-4 h-4" />
          {/* Bạn thay 'article.views' bằng biến chứa lượt xem thực tế */}
          <span>{article.views || '120'}</span>
        </div>
        {/* ----------------------------------- */}
                </div>
                
                <div className="p-6">
                  <p className="text-sm text-[rgb(45,189,182)] mb-2">{formatDate(article.createdAt)}</p>
                  <h3 className="text-lg mb-3 text-gray-800 text-[18px] font-bold">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 text-[16px]">{article.desc}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-2 md:py-8 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            {pageConfig?.homepage?.faq?.title??'Câu hỏi thường gặp _'}
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/50 transition-colors"
                >
                  <span className="text-gray-800 text-[16px]">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-green-600 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed text-[16px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
      <Link
        to="/help" // Thay đường dẫn trang FAQ của bạn vào đây
        className="inline-flex items-center gap-2 px-8 py-3 bg-[#2dbdb6] text-white rounded-full font-semibold hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
      >
        Xem thêm
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
        </div>
      </section>
      {/* end */}
    </div>
  );
}

export { HomePage };
