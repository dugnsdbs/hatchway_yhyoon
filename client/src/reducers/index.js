import { combineReducers } from "redux";

import fetchApi from './fetchApi';
import auth from './auth'
import post from './post'

export default combineReducers ({ fetchApi, auth, post }) 