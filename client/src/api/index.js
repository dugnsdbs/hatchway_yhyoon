import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')){
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
})
//fetch api call 
export const getApiPost = () => API.get('/api/ping');
export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });