import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch , useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom'
import { getPost } from '../../actions/post'

import useStyles from './styles'
import CommentSection from './CommentSection';

// import CommentSection from './CommentSection';

const PostDetails = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const {post, posts } = useSelector((state)=> state?.post);
  const history  = useHistory();
  const { id } = useParams();
  const user =JSON.parse(localStorage.getItem('profile'))

  useEffect(()=> {
    dispatch(getPost(id));
  },[id])

  const openPost = () => history.push(`/posts`)

  return (
    <div>
      {post ? (
        <>
        <Paper style={{ padding: "20px", borderRadius: "15px"}} elevation={6} >
          <div className={classes.card}>
            <div className={classes.section}>
             <Typography variant="h3" component="h2">{post.title.toUpperCase()}</Typography>
             <Divider style={{ margin: '20px 0' }} />
             <Typography variant="body1">Creator: {(user.result.name.toUpperCase()) || (user.result.givenName.toUpperCase())}</Typography>
             <Typography gutterBottom variant="body1" component="p">Rate: {post.rate}</Typography>
             <Typography gutterBottom variant="body1" component="p">Genre: {post.genre.toUpperCase()}</Typography>
             <Divider style={{ margin: '20px 0' }} />
             <Typography gutterBottom variant="h4" component="h2">Comment</Typography>
             <Typography gutterBottom variant="body1" component="p">{post.comment}</Typography>
            {/* <Divider style={{ margin: '20px 0' }} /> */}
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile } alt={post.title} onClick={openPost}/>
          </div>
          </div>
        </Paper>

        <div> 
        <Paper style={{ padding: "50px", borderRadius: "15px", margin: "20px"}} elevation={6} >
          <CommentSection post={post}/>
          </Paper>
          </div>
       
        </>
      )
      : <CircularProgress/> }
    

   
    </div>
  )
}

export default PostDetails