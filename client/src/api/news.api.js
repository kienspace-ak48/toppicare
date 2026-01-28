// import axios from 'axios';
import api  from './axios';

export const getNews = ()=>api.get('/news');
export const getThreeBlogHomepage = ()=>api.get('/blog/homepage/get-three-blog');
