import axios from 'axios';
const ASSET_URL = window.__ENV__.API_URL;
console.log('log api ', ASSET_URL);
const api = axios.create({
    baseURL: ASSET_URL+'api' , //ASSET_URL+'api',//'http://localhost:3500/api',
    timeout: 10000,
});

api.interceptors.request.use((config)=>{
    // const token = 
    return config;
})

export default api;