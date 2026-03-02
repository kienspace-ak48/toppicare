import { ImageWithFallBack } from '../fallback/ImageWithFallback';
import { BookOpen, Video, FileText, Award, X, Calendar, Eye } from 'lucide-react'; // Đã thêm icon X để đóng popup
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import usePageConfig from "../../hooks/usePageConfig";
import { useGetAllTrainingBlog, useGetCategoryByRoot } from '../../hooks/useNews';
import { formatDate } from '../utils/formatDate';
import DynamicFA from '../fallback/FontAwesomeIcon';
// import { useGetAllServices } from "../../hooks/use";
// const ASSET_URL = import.meta.env.VITE_API_URL;
const ASSET_URL = window.__ENV__.API_URL;
const trainingArticles = [
  {
    id: 1,
    title: 'Kỹ thuật massage Thụy Điển cơ bản',
    category: 'Kỹ thuật massage',
    excerpt: 'Hướng dẫn chi tiết các động tác massage Thụy Điển cho người mới bắt đầu...',
    image: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400',
    duration: '45 phút',
    type: 'video',
  },
  {
    id: 2,
    title: 'Cách sử dụng tinh dầu trong massage',
    category: 'Aromatherapy',
    excerpt: 'Tìm hiểu về các loại tinh dầu và cách pha chế, sử dụng hiệu quả...',
    image: 'https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=400',
    duration: '30 phút',
    type: 'video',
  },
  {
    id: 3,
    title: 'Kỹ thuật bấm huyệt trị liệu',
    category: 'Bấm huyệt',
    excerpt: 'Học cách nhận diện và kích thích các huyệt đạo quan trọng...',
    image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=400',
    duration: '60 phút',
    type: 'article',
  },
  {
    id: 4,
    title: 'Giao tiếp và chăm sóc khách hàng',
    category: 'Kỹ năng mềm',
    excerpt: 'Nghệ thuật giao tiếp chuyên nghiệp với khách hàng trong ngành spa...',
    image: 'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=400',
    duration: '40 phút',
    type: 'video',
  },
  {
    id: 5,
    title: 'An toàn lao động cho KTV',
    category: 'An toàn',
    excerpt: 'Hướng dẫn các biện pháp bảo vệ sức khỏe nghề nghiệp cho kỹ thuật viên...',
    image: 'https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=400',
    duration: '35 phút',
    type: 'article',
  },
  {
    id: 6,
    title: 'Kỹ thuật massage đá nóng',
    category: 'Kỹ thuật massage',
    excerpt: 'Tìm hiểu về liệu pháp massage đá nóng và cách áp dụng an toàn...',
    image: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=400',
    duration: '50 phút',
    type: 'video',
  },
];

// const categories = [
//   { name: 'Kỹ thuật massage', icon: '💆', count: 15 },
//   { name: 'Aromatherapy', icon: '🌸', count: 8 },
//   { name: 'Bấm huyệt', icon: '✋', count: 12 },
//   { name: 'Kỹ năng mềm', icon: '💬', count: 10 },
//   { name: 'An toàn', icon: '🛡️', count: 6 },
//   { name: 'Chăm sóc khách hàng', icon: '🤝', count: 7 },
// ];

function Traning() {
    // 1. State quản lý popup
    const {
        data: dataM,
        loading: loadinM,
        error: errorM,
      } = useGetCategoryByRoot("training");
      const trainingMenu = dataM?.data;
      console.log(trainingMenu);
      const categories = trainingMenu?.map(item=>({
        category_root: item.category_root,
        name: item.name,
        count: item.quantity
      }
      ))
      
    //
    const {data : dataT, loading: loadingT, error: errorT} = useGetAllTrainingBlog();;
    const trainingBlogs = dataT?.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    age: '',
    gender: 'female',
    course: ''
  });
  //edit
  const {data, loading, status } = usePageConfig();
  const trainingSection = data?.data?.training;
  const benefits = trainingSection?.benefit.cards;
  // console.log(benefits)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ sớm.');
    setIsModalOpen(false); // Đóng popup sau khi submit thành công
  };
    return(
        <div className="">
      {/* Banner */}
      <section className="relative w-full aspect-3/1 overflow-hidden">
        <ImageWithFallBack
          src={ASSET_URL+trainingSection?.banner?.img}
          alt="Training Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-4xl md:text-6xl mb-6 font-bold">
              {trainingSection?.banner?.title?trainingSection?.banner?.title:'Học viện đào tạo ToppiCare'}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8">
              {trainingSection?.banner?.desc?trainingSection?.banner?.desc:'Nâng cao kỹ năng chuyên môn với các khóa học và tài liệu đào tạo chất lượng cao'}
              
            </p>
            {/* SỬA: Button mở popup */}
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-[#2dbdb6] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all inline-block text-center cursor-pointer font-bold"
            >
              Tham gia ngay
            </button> */}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            Danh mục kiến thức
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories?.map((category, index) => (
              <button
                key={index}
                className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-6 hover:shadow-xl transition-all hover:scale-105 text-center"
              >
                <div className="text-4xl mb-3"><DynamicFA className="w-8 h-8 text-orange-500" name={`fa-solid fa-layer-group`} /></div>
                <div className="text-gray-800 mb-1 text-[16px]">{category.name}</div>
                <div className="text-sm text-[rgb(45,189,182)]">{category.count} bài học</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Training Articles */}
      <section className="py-8 md:py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
                Bài học nổi bật
              </h2>
              <p className="text-gray-600 text-[16px] text-[15px]">
                Các bài hướng dẫn và khóa học dành cho KTV
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingBlogs?.map((article) => (
              <Link to={`/bai-viet/${article.slug}`} key={article._id}>
                <div
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer group"
                >
                  <div className="relative w-full aspect-3/1 overflow-hidden">
                    <ImageWithFallBack
                      src={ASSET_URL+article.img}
                      alt={article.title}
                      className="w-full h-full object-contain object-center hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[rgb(45,189,182)] text-white rounded-full text-sm font-medium shadow-sm">
                      {article.category_id.name}
                    </div>

                    {/* Type Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      {article.type === 'video' ? (
                        <Video className="w-5 h-5 text-[#2dbdb6]" />
                      ) : (
                        <FileText className="w-5 h-5 text-[#2dbdb6]" />
                      )}
                    </div>

                    {/* Date & Views */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-3 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-white shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-xs font-medium">{formatDate(article.updatedAt)}</span>
                      </div>
                      <div className="w-px h-3 bg-white/30"></div>
                      <div className="flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-xs font-medium">{article.views?article.views:'1.5k'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg mb-3 text-gray-800 text-[18px] font-bold line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4 text-[16px] line-clamp-2">{article.desc}</p>
                    <button className="text-[rgb(45,189,182)] hover:text-green-600 transition-colors flex items-center gap-2">
                      <span>Xem chi tiết</span>
                      <BookOpen className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-4 bg-[#2dbdb6] bg-clip-text text-transparent font-bold pb-2">
            {(trainingSection?.benefit?.title)?trainingSection?.benefit?.title:''}
          </h2>
          <p className="text-center text-gray-600 mb-12">
              {trainingSection?.benefit?.desc?trainingSection?.benefit?.desc:''}            
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
            // [
            //   { icon: BookOpen, title: 'Học liệu phong phú', description: 'Hàng trăm bài học video và tài liệu chuyên sâu' },
            //   { icon: Award, title: 'Chứng chỉ uy tín', description: 'Nhận chứng chỉ sau khi hoàn thành khóa học' },
            //   { icon: Video, title: 'Học mọi lúc mọi nơi', description: 'Truy cập tài liệu 24/7 trên mọi thiết bị' },
            //   { icon: FileText, title: 'Cập nhật liên tục', description: 'Nội dung được cập nhật theo xu hướng mới nhất' },
            // ]
            benefits?.
            map((benefit, index) => {
              const Icon = Award //benefit.icon;
              return (
                <div
                  key={index}
                  className="backdrop-blur-lg bg-white/70 border border-white/20 rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#2dbdb6] flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl mb-3 bg-gradient-to-r from-[#FF6B6B] to-[#FF8C42] bg-clip-text text-transparent text-[18px] font-bold">{benefit.title}</h3>
                  <p className="text-gray-600 text-[16px] text-[15px]">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      

      {/* POPUP FORM (MODAL) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay nền đen */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsModalOpen(false)}
          ></div>

          {/* Container chứa Form */}
          <div className="relative w-full max-w-4xl z-10 animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto rounded-3xl">
            
            {/* Nút đóng X */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            {/* Nội dung Form */}
            <div className="bg-white p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-[#2dbdb6] font-bold pb-2">
                Học tập cùng ToppiCare
              </h2>
              <p className="text-center text-gray-600 mb-8 text-[16px]">
                Điền thông tin để chúng tôi liên hệ với bạn
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Họ và tên */}
                <div>
                  <label className="block text-gray-700 mb-2 text-[16px]">Họ và tên *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-[#2dbdb6] focus:ring-1 focus:ring-[#2dbdb6] transition-colors"
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
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-[#2dbdb6] focus:ring-1 focus:ring-[#2dbdb6] transition-colors"
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
                      className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-[#2dbdb6] focus:ring-1 focus:ring-[#2dbdb6] transition-colors"
                      placeholder="Nhập tuổi"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Giới tính *</label>
                    <select
                      required
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-[#2dbdb6] focus:ring-1 focus:ring-[#2dbdb6] transition-colors"
                    >
                      <option value="female">Nữ</option>
                      <option value="male">Nam</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                {/* Khóa học quan tâm */}
                <div>
                  <label className="block text-gray-700 mb-2 text-[16px]">Khóa học quan tâm *</label>
                  <select
                    required
                    value={formData.course || ''}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-6 py-3 rounded-2xl bg-gray-50 border border-gray-200 outline-none focus:border-[#2dbdb6] focus:ring-1 focus:ring-[#2dbdb6] transition-colors"
                  >
                    <option value="">-- Chọn khóa học --</option>
                    <option value="co-vai-gay">Massage Cổ Vai Gáy</option>
                    <option value="body">Massage Body</option>
                    <option value="foot">Massage Chân</option>
                    <option value="facial">Chăm sóc da mặt chuyên sâu</option>
                    <option value="combo">Trị liệu toàn thân (Combo)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#2dbdb6] text-white rounded-2xl hover:shadow-lg hover:scale-105 transition-all text-[16px] font-bold"
                >
                  Gửi đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    )
}

export default Traning;