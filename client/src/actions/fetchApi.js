import * as api from '../api/index.js';
import { GET_API } from "../constants/actionTypes"

export const fetchApi = () => async (dispatch) => {
  try {
    const { data } = await api.getApiPost();
    dispatch({ type: GET_API, payload: data })
  } catch (error) {
    console.log(error);
  }

}