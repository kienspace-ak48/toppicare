import api from "./axios";

export const getArticleByType = ()=>api.get(`/help-center/get-article/`);
export const getArticleBySlug = (slug)=>api.get(`/help-center/get-article-by-slug/${slug}`)