import { useState } from 'react';
import { ImageWithFallBack } from '../fallback/ImageWithFallback';
import { Calendar, Tag, TrendingUp,Eye } from 'lucide-react';

const newsCategories = ['Tất cả', 'Tin tức', 'Hoạt động', 'Khuyến mãi', 'Sức khỏe', 'Mẹo hay'];
import {useNews, useThreeBlogHomePage} from '../../hooks/useNews';
import { formatDate, formatDateTime } from '../utils/formatDate';
const newsArticles = [
  {
    id: 1,
    title: 'ToppiCare khai trương chi nhánh thứ 15 tại Hà Nội',
    category: 'Tin tức',
    excerpt: 'Chúng tôi vui mừng thông báo về sự ra mắt chi nhánh mới tại Hà Nội, mang đến dịch vụ chăm sóc sức khỏe chất lượng cao cho khách hàng miền Bắc...',
    image: 'https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=600',
    date: '15/12/2024',
    featured: true,
  },
  {
    id: 2,
    title: 'Chương trình khuyến mãi đặc biệt dịp cuối năm',
    category: 'Khuyến mãi',
    excerpt: 'Giảm giá lên đến 30% cho các gói dịch vụ spa cao cấp. Áp dụng từ 20/12 đến 31/12/2024...',
    image: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600',
    date: '12/12/2024',
    featured: true,
  },
  {
    id: 3,
    title: 'Lợi ích của massage thường xuyên đối với sức khỏe',
    category: 'Sức khỏe',
    excerpt: 'Khám phá những lợi ích tuyệt vời mà massage mang lại cho cơ thể và tinh thần, từ giảm stress đến cải thiện tuần hoàn máu...',
    image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=600',
    date: '10/12/2024',
    featured: false,
  },
  {
    id: 4,
    title: 'ToppiCare đồng hành cùng chương trình "Sức khỏe cộng đồng"',
    category: 'Hoạt động',
    excerpt: 'Chúng tôi tự hào tham gia chương trình khám và massage miễn phí cho người cao tuổi tại các viện dưỡng lão...',
    image: 'https://images.unsplash.com/photo-1761234852163-23f2ededd04e?w=600',
    date: '08/12/2024',
    featured: false,
  },
  {
    id: 5,
    title: '5 mẹo giảm đau vai gáy cho dân văn phòng',
    category: 'Mẹo hay',
    excerpt: 'Các bài tập đơn giản giúp giảm đau vai gáy ngay tại văn phòng, không cần thiết bị hỗ trợ...',
    image: 'https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=600',
    date: '05/12/2024',
    featured: false,
  },
  {
    id: 6,
    title: 'ToppiCare vinh dự nhận giải thưởng "Doanh nghiệp tiêu biểu 2024"',
    category: 'Tin tức',
    excerpt: 'Sự ghi nhận của thị trường và khách hàng là động lực để chúng tôi không ngừng phát triển và nâng cao chất lượng dịch vụ...',
    image: 'https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=600',
    date: '01/12/2024',
    featured: false,
  },
  {
    id: 7,
    title: 'Cách chọn tinh dầu massage phù hợp với cơ địa',
    category: 'Mẹo hay',
    excerpt: 'Hướng dẫn lựa chọn loại tinh dầu phù hợp với từng loại da và mục đích sử dụng để đạt hiệu quả tối ưu...',
    image: 'https://images.unsplash.com/photo-1757689314932-bec6e9c39e51?w=600',
    date: '28/11/2024',
    featured: false,
  },
  {
    id: 8,
    title: 'Chương trình "Tặng 1 triệu đồng" cho khách hàng giới thiệu bạn bè',
    category: 'Khuyến mãi',
    excerpt: 'Giới thiệu bạn bè sử dụng dịch vụ và nhận ngay voucher trị giá 1 triệu đồng. Số lượng có hạn...',
    image: 'https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?w=600',
    date: '25/11/2024',
    featured: false,
  },
  {
    id: 9,
    title: 'Massage bầu - Chăm sóc sức khỏe bà mẹ an toàn',
    category: 'Sức khỏe',
    excerpt: 'Dịch vụ massage chuyên biệt dành cho phụ nữ mang thai, giúp giảm đau lưng và căng thẳng an toàn...',
    image: 'https://images.unsplash.com/photo-1759216852567-5e1dd25f79f6?w=600',
    date: '20/11/2024',
    featured: false,
  },
];

function News() {
  const ASSET_URL = window.__ENV__.API_URL;
    const{data, loading, error} = useNews();
    console.log(data);
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    var newsArticles_2= data?.data; 
    console.log(newsArticles_2)
    // 
  const filteredArticles = selectedCategory === 'Tất cả' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);
    return(
        <div className="">
      {/* Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallBack
          src="https://images.unsplash.com/photo-1764690690771-b4522d66b433?w=1200"
          alt="News & Activities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-white text-4xl md:text-6xl mb-6 font-bold">
              Tin tức & Hoạt động
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl text-[16px]">
              Cập nhật tin tức mới nhất từ ToppiCare và những hoạt động cộng đồng ý nghĩa
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white/50 backdrop-blur-sm sticky top-16 md:top-20 z-40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {newsCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#2dbdb6] text-white shadow-lg'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'Tất cả' && featuredArticles.length > 0 && (
        <section className="py-8 md:py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#2dbdb6]" />
              <h2 className="text-3xl md:text-4xl bg-[#2dbdb6] to-teal-600 bg-clip-text text-transparent font-bold">
                Tin nổi bật
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
  {featuredArticles.map((article) => (
    <div
      key={article.id}
      className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden group">
        <ImageWithFallBack
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category (Góc trái trên - Giữ nguyên) */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#2dbdb6] text-white rounded-full text-sm flex items-center gap-2 shadow-sm">
          <Tag className="w-4 h-4" />
          {article.category}
        </div>

        {/* --- MỚI: Mắt xem (Góc phải trên) --- */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full text-sm flex items-center gap-2 shadow-sm">
          <Eye className="w-4 h-4" />
          {/* Bạn thay 'article.views' bằng biến chứa lượt xem thực tế */}
          <span>{article.views || '1.2k'}</span>
        </div>
        {/* ----------------------------------- */}
        
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          <span>{article.date}</span>
        </div>
        <h3 className="text-2xl mb-3 text-gray-800 text-[18px] font-bold">{article.title}</h3>
        <p className="text-gray-600 line-clamp-3 text-[16px] text-[15px]">{article.excerpt}</p>
      </div>
    </div>
  ))}
</div>
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section className="py-8 md:py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-[#2dbdb6] bg-clip-text text-transparent font-bold">
            {selectedCategory === 'Tất cả' ? 'Tất cả bài viết' : selectedCategory}
          </h2>
          {/* edit here */}
          {regularArticles  .length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles_2?.map((article) => (
                <div
                  key={article._id}
                  className="backdrop-blur-lg bg-white/60 border border-white/20 rounded-3xl overflow-hidden hover:shadow-xl transition-all hover:scale-105 cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallBack
                      src={ASSET_URL+article.img}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category (Góc trái trên - Giữ nguyên) */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-[#2dbdb6] text-white rounded-full text-sm flex items-center gap-2 shadow-sm">
          <Tag className="w-4 h-4" />
          {article.category_id.name}
        </div>

        {/* --- MỚI: Mắt xem (Góc phải trên) --- */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white rounded-full text-sm flex items-center gap-2 shadow-sm">
          <Eye className="w-4 h-4" />
          {/* Bạn thay 'article.views' bằng biến chứa lượt xem thực tế */}
          <span>{article.views || '120'}</span>
        </div>
        {/* ----------------------------------- */}
                    
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(article.createdAt)}</span>
                    </div>
                    <h3 className="text-lg mb-3 text-gray-800 text-[18px] font-bold">{article.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2 text-[16px]">{article.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Không có bài viết nào trong danh mục này</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#2dbdb6]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-white text-3xl md:text-4xl mb-4 font-bold">
            Đăng ký nhận tin
          </h2>
          <p className="text-white/90 text-lg mb-8 text-[16px]">
            Nhận thông tin mới nhất về dịch vụ, khuyến mãi và mẹo chăm sóc sức khỏe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
  type="email"
  placeholder="Email của bạn"
  className="flex-1 px-6 py-3 rounded-full outline-none bg-white text-gray-900 placeholder-gray-500"
/>
            <button className="px-8 py-3 bg-white text-purple-600 rounded-full hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap">
              Đăng ký
            </button>
          </div>
        </div>
      </section>
    </div>
    )
}

export default News;