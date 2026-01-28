import { getNews, getThreeBlogHomepage } from "../api/news.api";
import { useFetch } from "./useFetch";

export const useNews = () => useFetch(getNews);

export const useThreeBlogHomePage = () => useFetch(getThreeBlogHomepage);
