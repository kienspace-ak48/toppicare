import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetOneBlogBySlug, useGetOneServiceBlog } from "../../hooks/useNews";
function BlogDetail() {
  const ASSET_URL =  window.__ENV__.API_URL;
  const { slug } = useParams();
  console.log('slug ',slug)


  // const {data: dataB, loading: loadingB, error: errorB} = useGetOneServiceBlog(slug);
  const {data: dataB, loading: loadingB, error: errorB} = useGetOneBlogBySlug(slug);

  const blogData = dataB?.data;
  console.log(blogData)
  //
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const mockBlogDetail = {
    _id: "6979d003c03ddc3311410d26",
    title: "ToppiCare khai trương chi nhánh thứ 15 tại Hà Nội",
    desc: "Chúng tôi vui mừng thông báo về sự ra mắt chi nhánh mới tại Hà Nội, mang đến dịch vụ chăm sóc sức khỏe chất lượng cao.",
    slug: "toppicare-khai-truong-chi-nhanh-thu-15-tai-ha-noi",
    status: true,
    content: `
    <p><strong>ToppiCare</strong> chính thức khai trương chi nhánh thứ 15 tại Hà Nội.</p>
    <p>Sự kiện đánh dấu bước phát triển mạnh mẽ của hệ thống chăm sóc sức khỏe toàn diện.</p>
    <h2>Dịch vụ nổi bật</h2>
    <ul>
      <li>Massage trị liệu chuyên sâu</li>
      <li>Chăm sóc người cao tuổi</li>
      <li>Gói phục hồi sau chấn thương</li>
    </ul>
    <p>Chúng tôi cam kết mang đến trải nghiệm tốt nhất cho khách hàng.</p>
  `,
    img: "/uploads/imgs/img-slider_3-335895728.webp",
    category_id: {
      _id: "6978462fbbf9329335142983",
      name: "Tin tức",
      slug: "tin-tuc",
      category_root: "news",
    },
    isFeatured: false,
    views: 128,
    author: "ToppiCare Admin",
    createdAt: "2026-01-28T08:59:47.399Z",
    updatedAt: "2026-01-29T08:09:15.699Z",
  };
  //fx tang view
  const increaseView = async (slug) => {
  try {
    console.log('processing inscrease view ');
    console.log(`${ASSET_URL}api/blog/${slug}/view`)
    await fetch(`${ASSET_URL}api/blog/${slug}/view`, { //${'http://localhost:3500'}
    method: "POST",
  });
  } catch (error) {
    console.error('failed to increase view')
  }
};
  useEffect(() => {
    setTimeout(() => {
      setBlog(blogData);
      setLoading(false);
    }, 300);
  }, [blogData]);
  //
  useEffect(() => {
  if (!blogData?.slug) return;

  const viewedKey = `viewed_blog_${blogData?.slug}`;

  // nếu chưa từng xem bài này trên trình duyệt này
  if (!localStorage.getItem(viewedKey)) {
    increaseView(blogData.slug);
    localStorage.setItem(viewedKey, "1");
  }
}, [blogData?.slug]);



  if (!blogData) {
    return <div className="text-center py-20">Bài viết không tồn tại</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* CATEGORY */}
      <div className="mb-3">
        <span className="text-sm text-blue-600 font-medium uppercase">
          {blogData?.category_id?.name}
        </span>
      </div>

      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        {blogData?.title}
      </h1>

      {/* META */}
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
        <span>{blogData?.author || "Admin"}</span>
        <span>•</span>
        <span>{new Date(blogData?.createdAt).toLocaleDateString()}</span>
        <span>•</span>
        <span>{blogData?.views} lượt xem</span>
      </div>

      {/* IMAGE */}
      {blogData?.img && (
  <div className="mb-8">
    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
      <img
        src={`${ASSET_URL + blogData?.img}`}
        alt={blogData?.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </div>
)}

      {/* CONTENT */}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blogData?.content }}
      />
    </div>
  );
}

export default BlogDetail;
