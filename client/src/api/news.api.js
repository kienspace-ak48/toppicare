// import axios from 'axios';
import api  from './axios';

export const getNews = ()=>api.get('/news');
export const getThreeBlogHomepage = ()=>api.get('/blog/homepage/get-three-blog');
export const getAllServiceBlog = ()=>api.get('/blog/services/get-all');
export const getOneServiceBlog =(id)=>api.get(`/blog/services/get-one/${id}`);
export const getOneBlogBySlug = (slug)=>api.get(`/blog/get-one/${slug}`);
