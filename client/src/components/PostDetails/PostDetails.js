import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch , useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom'
import { getPost } from '../../actions/post'

import useStyles from './styles'

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
        <Paper style={{ padding: "20px", borderRadius: "15px"}} elevation={6} >
          <div className={classes.card}>
            <div className={classes.section}>
             <Typography variant="h3" component="h2">{post.title}</Typography>
             <Divider style={{ margin: '20px 0' }} />
             <Typography variant="body1">Created by: {(user.result.name) || (user.result.givenName)}</Typography>
             <Typography gutterBottom variant="body1" component="p">RATE: {post.rate}</Typography>
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
      )
      : null }
    </div>
    // <Paper style={{ padding: "20px", borderRadius: "15px"}} elevation={6}>
    //   <div className={classes.card}>
    //       <div className={classes.section}>
    //         <Typography variant="h3" component="h2">{post.title}</Typography>
    //         {/* <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> */}
    //         <Typography gutterBottom variant="body1" component="p">{post.title}</Typography>
    //         {/* <Typography variant="h6">Created by: {post.name}</Typography> */}
    //         <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
    //         <Divider style={{ margin: '20px 0' }} />
    //         <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
    //         <Divider style={{ margin: '20px 0' }} />
    //         <Divider style={{ margin: '20px 0' }} />
    //       </div>
    //       <div className={classes.imageSection}>
    //         <img className={classes.media} src={post.selectedFile } alt={post.title} />
    //       </div>
    //     </div>
    //   </Paper>
  )
}

export default PostDetails