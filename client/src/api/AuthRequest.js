import axios from 'axios';

const API = axios.create({ baseURL: 'https://mern-project-1-k1s9.onrender.com/' });

export const logIn = (formData) => API.post('/auth/login', formData); 

export const signUp = (formData) => API.post('/auth/register', formData);