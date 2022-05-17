
import { GET_ALL, CREATE, UPDATE, DELETE, FETCH_POST } from "../constants/actionTypes"

export default (state = {posts: []}, action ) => {
  switch (action.type) {
      case GET_ALL:
        return {...state, posts: action.payload}
        case CREATE:
          return { ...state, posts:[...state.posts, action.payload]};
      case FETCH_POST:
        return {...state, post: action.payload}
      case UPDATE:
        return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))}
      case DELETE:
        return {...state, posts: state.posts.filter((post)=> post._id !== action.payload)}
      default:
        return state;
    }
  }