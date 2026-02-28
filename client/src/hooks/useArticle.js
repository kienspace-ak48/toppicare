import { getArticleBySlug, getArticleByType } from "../api/article.api";
import { useFetch } from "./useFetch";

export const useGetArticleByType = ()=>useFetch(getArticleByType);
export const useGetArticleBySlug = (slug)=>useFetch(getArticleBySlug, slug, [slug]);