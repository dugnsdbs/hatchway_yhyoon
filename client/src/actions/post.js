import * as api from '../api/index.js';
import { GET_ALL, CREATE, UPDATE, DELETE, FETCH_POST, COMMENT } from "../constants/actionTypes"



export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id)
    dispatch({ type: FETCH_POST, payload: data})
  } catch (error) {
    console.log(error);
  }
}
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: GET_ALL, payload: data })
    
  } catch (error) {
    console.log(error);
  }
}

export const createPost = (post) => async (dispatch) =>{
  try {
    const { data } = await api.createPost(post);


    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
}

export const updatePost = (id, post) => async(dispatch) => {
  try{
    const { data } = await api.updatePost(id, post)
    dispatch({ type: UPDATE, payload: data})
  }catch (error) {
    console.log(error);
  }
}

export const deletePost = (id) => async(dispatch) => {
  try {
    await api.deletePost(id)
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.log(error);
  }
}

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);

  dispatch({type: COMMENT, payload:data});
    return data.comments;
  } catch (error) {
    console.log(error);
  }
}