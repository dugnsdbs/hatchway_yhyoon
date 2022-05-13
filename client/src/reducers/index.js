import { combineReducers } from "redux";

import fetchApi from './fetchApi';
import auth from './auth'

export default combineReducers ({ fetchApi, auth }) 