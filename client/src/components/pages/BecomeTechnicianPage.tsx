import { useState } from 'react';
// import { ImageWithFallBack } from '../fallback/ImageWithFallBack';
import { ImageWithFallBack } from '../fallback/ImageWithFallback';
import { Briefcase, DollarSign, Clock, Heart, TrendingUp, Users, Award, Shield } from 'lucide-react';

const opportunities = [
  {
    icon: DollarSign,
    title: 'Thu nhập hấp dẫn',
    description: 'Thu nhập từ 15-30 triệu/tháng tùy theo năng lực và số giờ làm việc',
  },
  {
    icon: Clock,
    title: 'Thời gian linh hoạt',
    description: 'Tự do sắp xếp lịch làm việc phù hợp với bản thân',
  },
  {
    icon: TrendingUp,
    title: 'Cơ hội phát triển',
    description: 'Đào tạo nâng cao kỹ năng, thăng tiến nghề nghiệp rõ ràng',
  },
  {
    icon: Users,
    title: 'Môi trường chuyên nghiệp',
    description: 'Làm việc trong môi trường năng động, thân thiện',
  },
];

const steps = [
  {
    step: 1,
    title: 'Đăng ký thông tin',
    description: 'Điền form đăng ký với thông tin cơ bản của bạn',
    image: 'https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=400',
  },
  {
    step: 2,
    title: 'Phỏng vấn',
    description: 'Tham gia buổi phỏng vấn với đội ngũ tuyển dụng',
    image: 'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=400',
  },
  {
    step: 3,
    title: 'Đào tạo',
    description: 'Tham gia khóa đào tạo kỹ năng chuyên môn 2-4 tuần',
    image: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400',
  },
  {
    step: 4,
    title: 'Kiểm tra',
    description: 'Hoàn thành bài kiểm tra cuối khóa và nhận chứng chỉ',
    image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=400',
  },
  {
    step: 5,
    title: 'Bắt đầu làm việc',
    description: 'Chính thức trở thành KTV của ToppiCare',
    image: 'https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=400',
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Bảo hiểm đầy đủ',
    description: 'BHYT, BHXH, BHTN theo quy định',
  },
  {
    icon: Heart,
    title: 'Chăm sóc sức khỏe',
    description: 'Khám sức khỏe định kỳ, bảo hiểm sức khỏe',
  },
  {
    icon: TrendingUp,
    title: 'Thưởng hiệu suất',
    description: 'Chế độ thưởng hấp dẫn theo doanh thu',
  },
  {
    icon: Shield,
    title: 'An toàn lao động',
    description: 'Đảm bảo an toàn tuyệt đối khi làm việc',
  },
];

export function BecomeTechnicianPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    gender: 'female',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.');
    setFormData({ fullName: '', phone: '', age: '', gender: 'female' });
  };

  return (
    <div className="pt-20 md:pt-24">
      {/* Banner */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <ImageWithFallBack
          src="https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=1200"
          alt="Become Technician"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6">
                <Briefcase className="w-5 h-5" />
                <span>Tuyển dụng KTV</span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl mb-6">
                Trở thành Kỹ thuật viên ToppiCare
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 text-[18px]">
                Tham gia đội ngũ chuyên nghiệp, xây dựng sự nghiệp bền vững với thu nhập hấp dẫn
              </p>
              <button
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            Cơ hội nghề nghiệp tại ToppiCare
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Những lợi ích khi trở thành KTV của chúng tôi
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-8 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#2dbdb6] flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">{opportunity.title}</h3>
                  <p className="text-gray-600 text-[16px] text-[15px]">{opportunity.description}</p>
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
            Quy trình đơn giản, minh bạch trong 5 bước
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.step}
                className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="relative aspect-square overflow-hidden">
                  <ImageWithFallBack
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#2dbdb6] flex items-center justify-center text-white text-xl shadow-lg">
                    {step.step}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[rgb(204,144,0)] mb-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">{step.title}</h3>
                  <p className="text-gray-600 text-sm text-[16px]">{step.description}</p>
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
            Môi trường & Phúc lợi
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Chế độ đãi ngộ toàn diện cho nhân viên
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#2dbdb6] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">{benefit.title}</h3>
                  <p className="text-gray-600 text-[16px]">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          {/* Work Environment Images */}
          <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register-form" className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent pb-2 font-bold">
            Hợp tác cùng ToppiCare
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            Điền thông tin để chúng tôi liên hệ với bạn
          </p>

          <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8 md:p-12">
  <div className="space-y-6">
    
    {/* Họ và tên */}
    <div>
      <label className="block text-gray-700 mb-2 text-[16px]">Họ và tên *</label>
      <input
        type="text"
        required
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
        placeholder="Nhập họ và tên"
      />
    </div>

    {/* Số điện thoại */}
    <div>
      <label className="block text-gray-700 mb-2 text-[16px]">Số điện thoại *</label>
      <input
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
        placeholder="Nhập số điện thoại"
      />
    </div>

    {/* Tuổi và Giới tính */}
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 mb-2 text-[16px]">Tuổi *</label>
        <input
          type="number"
          required
          min="18"
          max="60"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          className="w-full px-6 py-3 rounded-2xl bg-white/80 border border-gray-200 outline-none focus:border-purple-500 transition-colors"
          placeholder="Nhập tuổi"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2">Giới tính *</label>
        <select
          required
          value={formData.gender}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
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
      className="w-full py-3 bg-[#2dbdb6] text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all text-[16px]"
    >
      Gửi đăng ký
    </button>
  </div>
</form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2dbdb6]">
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
      </section>
    </div>
  );
}