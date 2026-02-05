import { getNews, getThreeBlogHomepage, getAllServiceBlog,getOneServiceBlog,getOneBlogBySlug, GetAllNewsBlog, getAllTrainingBlog,  } from "../api/news.api";
import { useFetch } from "./useFetch";

export const useNews = () => useFetch(getNews);

export const useThreeBlogHomePage = () => useFetch(getThreeBlogHomepage);
export const useGetAllServiceBlog = ()=> useFetch(getAllServiceBlog);
export const useGetOneServiceBlog =(id)=>useFetch(getOneServiceBlog, id, [id]);
export const useGetOneBlogBySlug = (slug)=>useFetch(getOneBlogBySlug, slug, [slug]);
export const useGetAllNewsBlog = ()=>useFetch(GetAllNewsBlog);
export const useGetAllTrainingBlog = ()=>useFetch(getAllTrainingBlog);
// export const useIncreaseBlogView = (slug)=>useFetch(IncreaseBlogView, slug, [slug])

//

