// import axios from 'axios';
import api  from './axios';


export const getNews = ()=>api.get('/news');
export const getThreeBlogHomepage = ()=>api.get('/blog/homepage/get-three-blog');
export const getAllServiceBlog = ()=>api.get('/blog/services/get-all');
export const getOneServiceBlog =(id)=>api.get(`/blog/services/get-one/${id}`);
export const getOneBlogBySlug = (slug)=>api.get(`/blog/get-one-slug/${slug}`);
export const GetAllNewsBlog = (slug)=>api.get('/blog/news/get-all');
export const getMenuByRoot = (root)=>api.get(`/menu/by-category-root/${root}`);
export const getAllTrainingBlog = ()=>api.get('/blog/training/get-all');
