import React from 'react'
import useStyles from './styles';

import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

import { deletePost } from '../../../actions/post';
import { useDispatch } from 'react-redux';

import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const history = useHistory();

  const openPost = () => history.push(`/posts/${post._id}`)

  console.log(post._id)
  
  return (
    <Card className={classes.card}  >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} onClick={openPost}/>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button style={{color:"white"}} size="small" onClick={()=> setCurrentId(post._id)}>
          <MoreHorizIcon fontSize="medium"/>
        </Button>
      </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">{post.rate}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        <CardContent>
          <Typography variant="h5" gutterBottom>{post.comment}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small"/>
            &nbsp;Delete
          </Button>
          )}
        </CardActions>
    </Card>
  )
}

export default Post