import api from './axios';

export const getPageConfig =()=> api.get('/pageconfigs');