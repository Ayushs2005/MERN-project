import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-project-1-k1s9.onrender.com/' });

export const uploadImage = (data) => API.post('/upload/', data);
export const uploadPost = (data) => API.post('/post', data);