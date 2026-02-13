import { useState } from 'react';
import { Search, ChevronRight, User, Briefcase, Bell, CreditCard, Calendar, Shield, FileText, MessageSquare, UserPlus, DollarSign, ClipboardList, Star, Award, HelpCircle } from 'lucide-react';
import { ImageWithFallBack } from '../fallback/ImageWithFallback';

const userTopics = [
  { 
    id: 'notifications',
    name: 'Thông báo', 
    icon: Bell,
    description: 'Quản lý và xem các thông báo từ ToppiCare',
    articles: 5
  },
  { 
    id: 'booking-guide',
    name: 'Hướng dẫn đặt dịch vụ', 
    icon: ClipboardList,
    description: 'Các bước đặt lịch dịch vụ nhanh chóng',
    articles: 8
  },
  { 
    id: 'pricing-payment',
    name: 'Giá cả & thanh toán', 
    icon: CreditCard,
    description: 'Thông tin về giá dịch vụ và phương thức thanh toán',
    articles: 12
  },
  { 
    id: 'services',
    name: 'Dịch vụ & liệu trình', 
    icon: Briefcase,
    description: 'Tìm hiểu về các dịch vụ và gói liệu trình',
    articles: 15
  },
  { 
    id: 'appointments',
    name: 'Lịch hẹn & thay đổi lịch', 
    icon: Calendar,
    description: 'Quản lý và thay đổi lịch hẹn của bạn',
    articles: 10
  },
  { 
    id: 'safety',
    name: 'An toàn & bảo mật', 
    icon: Shield,
    description: 'Chính sách bảo mật thông tin khách hàng',
    articles: 6
  },
  { 
    id: 'terms-policy',
    name: 'Điều khoản & Chính sách', 
    icon: FileText,
    description: 'Các điều khoản sử dụng và chính sách',
    articles: 8
  },
  { 
    id: 'complaints',
    name: 'Khiếu nại & phản hồi', 
    icon: MessageSquare,
    description: 'Gửi khiếu nại và phản hồi về dịch vụ',
    articles: 4
  },
];

const technicianTopics = [
  { 
    id: 'registration',
    name: 'Đăng ký & hồ sơ KTV', 
    icon: UserPlus,
    description: 'Hướng dẫn đăng ký và quản lý hồ sơ kỹ thuật viên',
    articles: 10
  },
  { 
    id: 'schedule',
    name: 'Nhận lịch & làm việc', 
    icon: Calendar,
    description: 'Cách nhận và quản lý lịch làm việc',
    articles: 12
  },
  { 
    id: 'income',
    name: 'Thu nhập & thanh toán', 
    icon: DollarSign,
    description: 'Thông tin về thu nhập và quy trình thanh toán',
    articles: 9
  },
  { 
    id: 'process',
    name: 'Quy trình dịch vụ', 
    icon: ClipboardList,
    description: 'Quy trình chuẩn khi thực hiện dịch vụ',
    articles: 15
  },
  { 
    id: 'rating',
    name: 'Đánh giá & kỷ luật', 
    icon: Star,
    description: 'Hệ thống đánh giá và quy định kỷ luật',
    articles: 7
  },
  { 
    id: 'benefits',
    name: 'Quyền lợi & hỗ trợ KTV', 
    icon: Award,
    description: 'Các quyền lợi và chính sách hỗ trợ KTV',
    articles: 11
  },
  { 
    id: 'terms-ktv',
    name: 'Điều khoản & Chính sách', 
    icon: FileText,
    description: 'Điều khoản dành cho kỹ thuật viên',
    articles: 8
  },
];

export function HelpCenterPage() {
  const [activeTab, setActiveTab] = useState<'user' | 'technician'>('user');
  const [searchQuery, setSearchQuery] = useState('');

  const currentTopics = activeTab === 'user' ? userTopics : technicianTopics;

  const filteredTopics = currentTopics.filter(topic =>
    topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="">
      {/* Banner with Search */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallBack
          src="https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=1200"
          alt="Help Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2dbdb6]/80 to-cyan-600/90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 w-full text-center">
            <h1 className="text-white text-4xl md:text-5xl mb-8">
              Chúng tôi có thể giúp gì cho bạn?
            </h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm thông tin thắc mắc..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full backdrop-blur-lg bg-white/90 border-2 border-white/20 focus:outline-none focus:border-green-500 transition-all text-gray-800 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-[60px] z-30 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setActiveTab('user')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all ${
                activeTab === 'user'
                  ? 'bg-[#2dbdb6] text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md'
              }`}
            >
              <User className="w-5 h-5" />
              <span className="text-[16px]">Khách hàng</span>
            </button>
            <button
              onClick={() => setActiveTab('technician')}
              className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all ${
                activeTab === 'technician'
                  ? 'bg-[#2dbdb6] text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span className="text-[16px]">Kỹ thuật viên</span>
            </button>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent pb-2 font-bold">
            {activeTab === 'user' ? 'Hỗ trợ khách hàng' : 'Hỗ trợ kỹ thuật viên'}
          </h2>
          <p className="text-center text-gray-600 mb-12 text-[16px]">
            {activeTab === 'user' 
              ? 'Tìm câu trả lời cho các câu hỏi thường gặp về dịch vụ'
              : 'Hướng dẫn và hỗ trợ dành cho kỹ thuật viên ToppiCare'}
          </p>

          {filteredTopics.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={topic.id}
                    className="group backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl p-6 hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#2dbdb6] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg mb-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent group-hover:text-green-600 transition-colors text-[18px] font-bold">
  {topic.name}
</h3>
                        <p className="text-gray-600 leading-relaxed text-[16px]">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm text-gray-500">{topic.articles} bài viết</span>
                      <ChevronRight className="w-5 h-5 text-[#2dbdb6] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Không tìm thấy kết quả phù hợp</p>
              <p className="text-gray-500 text-sm mt-2">Vui lòng thử từ khóa khác</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-8 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-4 bg-[#2dbdb6] bg-clip-text text-transparent pb-2 font-bold">
            Vẫn cần trợ giúp?
          </h2>
          <p className="text-gray-600 mb-8">
            Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0862484898"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Gọi hotline: 0862.4848.98
            </a>
            <a
              href="mailto:info@toppicare.vn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[rgb(45,189,182)] border-2 border-[#2dbdb6] rounded-full hover:shadow-lg hover:scale-105 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email hỗ trợ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
