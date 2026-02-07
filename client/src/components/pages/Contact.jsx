import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ImageWithFallBack } from '../fallback/ImageWithFallback';
import { useState } from 'react';
import usePageConfig from "../../hooks/usePageConfig";
  // import { useGetAllServices } from "../../hooks/useServices";
const contactInfo = [
  {
    icon: MapPin,
    title: 'Địa chỉ trụ sở chính',
    content: '16A Lê Hồng Phong, Phường Hòa Hưng, Ho Chi Minh City, Vietnam',
  },
  {
    icon: Phone,
    title: 'Số điện thoại',
    content: 'Hotline: 0862.4848.98\nPhone: 0862.4848.98',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@toppicare.vn',
  },
  {
    icon: Clock,
    title: 'Giờ làm việc',
    content: 'Thứ 2 - Chủ nhật: 8:00 - 22:00\nDịch vụ 24/7',
  },
];

const branches = [
  { name: 'Chi nhánh Quận 1', address: '123 Đường ABC, Quận 1, TP.HCM', phone: '(028) 3xxx 1111' },
  { name: 'Chi nhánh Quận 3', address: '456 Đường DEF, Quận 3, TP.HCM', phone: '(028) 3xxx 2222' },
  { name: 'Chi nhánh Quận 7', address: '789 Đường GHI, Quận 7, TP.HCM', phone: '(028) 3xxx 3333' },
  { name: 'Chi nhánh Bình Thạnh', address: '321 Đường JKL, Bình Thạnh, TP.HCM', phone: '(028) 3xxx 4444' },
  { name: 'Chi nhánh Hà Nội', address: '654 Đường MNO, Hoàn Kiếm, Hà Nội', phone: '(024) 3xxx 5555' },
  { name: 'Chi nhánh Đà Nẵng', address: '987 Đường PQR, Hải Châu, Đà Nẵng', phone: '(0236) 3xxx 6666' },
];


function Contact() {
  //edit
  const {data, loading, error} = usePageConfig();
  const contactSection = data?.data?.contact;
  // const ASSET_URL = import.meta.env.VITE_API_URL;
  const ASSET_URL = window.__ENV__.API_URL;
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };
    return(
        <div className="">
      {/* Banner */}
      <section className="relative w-full aspect-3/1 overflow-hidden">
        <ImageWithFallBack
          src={ASSET_URL+contactSection?.banner?.img}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-4xl md:text-6xl mb-6 font-bold">
              {contactSection?.banner?.title||'Liên hệ với chúng tôi'}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              {contactSection?.banner?.title||'Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            Thông tin liên hệ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#2dbdb6] flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line leading-relaxed text-[16px] text-[15px]">{info.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                Gửi tin nhắn cho chúng tôi
              </h2>
              <p className="text-gray-600 mb-8 text-[16px] text-[15px]">
                Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại cho bạn
              </p>

              <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8">
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2 text-[16px] text-[15px]">Họ và tên *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 text-[16px] text-[15px]">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                        placeholder="Nhập email"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2 text-[16px] text-[15px]">Số điện thoại *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                        placeholder="Nhập số điện thoại"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-[16px] text-[15px]">Chủ đề *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
                      placeholder="Nhập chủ đề"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2 text-[16px] text-[15px]">Nội dung *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors resize-none"
                      placeholder="Nhập nội dung tin nhắn"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#2dbdb6] text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Gửi tin nhắn
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl md:text-4xl mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                Vị trí trụ sở chính
              </h2>
              <p className="text-gray-600 mb-8 text-[16px] text-[15px]">
                Ghé thăm văn phòng chúng tôi hoặc xem vị trí trên bản đồ
              </p>

              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl mb-6">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 flex items-center justify-center">
                  {/* <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-green-600" />
                    <p className="text-gray-700 text-lg">Bản đồ Google Maps</p>
                    <p className="text-gray-600 text-sm mt-2">123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                   */}
                   <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4907322578797!2d106.66947347553914!3d10.77367665924344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edec7cd6b63%3A0xda47505a46e0b024!2zMTZBIEzDqiBI4buTbmcgUGhvbmcsIFBoxrDhu51uZyAxMiwgUXXhuq1uIDEwLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1769746197471!5m2!1svi!2s"
      className="w-full h-full"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Branches 
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold">
            Hệ thống chi nhánh
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px] text-[15px]">
            ToppiCare có mặt tại nhiều tỉnh thành trên cả nước
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-6 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#2dbdb6] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-gray-800 text-[18px]">{branch.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 text-[16px]">{branch.address}</p>
                    <p className="text-[rgb(45,189,182)] text-sm flex items-center gap-2 text-[16px]">
                      <Phone className="w-4 h-4" />
                      {branch.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA */}
      <section className="py-16 bg-[#2dbdb6]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-4 font-bold">
            Cần hỗ trợ ngay?
          </h2>
          <p className="text-white/90 text-lg mb-8 text-[16px]">
            Gọi hotline 0862.4848.98 để được tư vấn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-[rgb(45,189,182)] rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Gọi ngay
            </button>
            <button className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-full hover:bg-white/30 hover:scale-105 transition-all">
              Tải ứng dụng
            </button>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Contact;