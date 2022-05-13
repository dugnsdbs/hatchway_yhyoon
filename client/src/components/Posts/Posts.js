import React, { useEffect } from 'react'
import Post from './Post/Post'

import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from '../../actions/fetchApi.js'

const Posts = () => {

  const api = useSelector((state)=> state?.fetchApi);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchApi())
  },[dispatch])

  console.log(api)
  
  return (
    <div>
      Posts
      <Post/>
    </div>
  )
}

export default Posts