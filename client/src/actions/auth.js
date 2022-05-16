import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // watch 4:23:53  for redux flow => formdata 4:36
    const { data } = await api.signIn(formData)
    dispatch({ type: AUTH, data })
     
    history.push('/')
  } catch (error) {
    console.log(error);
  }
}
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData)
    dispatch({ type: AUTH, data })

    history.push('/')
  } catch (error) {
    console.log(error);
  }
}