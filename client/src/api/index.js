import axios from "axios"

const API = axios.create({ baseURL: 'http://localhost:5000'});

//fetch api call 
export const getApiPost = () => API.get('/api/ping');
