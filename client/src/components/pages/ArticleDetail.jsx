import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetOneBlogBySlug, useGetOneServiceBlog } from "../../hooks/useNews";
import { useGetArticleBySlug } from "../../hooks/useArticle";
// import use
function ArticleDetail() {
  const ASSET_URL = window.__ENV__.API_URL;
  console.log(ASSET_URL)
  const { slug } = useParams();
  console.log("slug ", slug);


  //eendfix
  const {
    data: dataA,
    loading: loadingA,
    error: errorA,
  } = useGetArticleBySlug(slug);

  const blogData = dataA?.data;
  //
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlog(blogData);
      setLoading(false);
    }, 100);
  }, [blogData]);
  //


  //end

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
        {/* <span>•</span> */}
        {/* <span>{blogData?.views} lượt xem</span> */}
      </div>

      {/* IMAGE */}
      {blogData?.image_url && (
        <div className="mb-8">
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-gray-100">
            bf
            <img
              src={`${ASSET_URL + blogData?.image_url}`}
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

export default ArticleDetail;
