import React, {useEffect} from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles';

import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../actions/post';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state?.post)
 
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])

console.log(posts)

  return (
    !posts ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post)=> (
          <Grid key ={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts