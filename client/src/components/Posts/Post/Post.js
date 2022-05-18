import React from 'react'
import useStyles from './styles';

import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { deletePost } from '../../../actions/post';
import { useDispatch } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'))
  const history = useHistory();

  const openPost = () => history.push(`/posts/${post._id}`)

  console.log(post.name)
  console.log(user.result.name)
  
  return (
    <>
    <Card className={classes.card}  >
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} onClick={openPost}/>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.title.toUpperCase()}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.detailsOne}>
        <Typography variant="body2" color="textSecondary">Rate: {post.rate}</Typography>
        </div>
        <div className={classes.detailsTwo}>
        <Typography variant="body2" color="textSecondary">User: {user.result.name}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.genre.toUpperCase()}</Typography>
        
        <CardActions className={classes.cardActions}>
          {(user?.result?.name === post?.name ) && (
            <>
          <Button size="small" color="primary" onClick={()=> dispatch(deletePost(post._id))}>
            <DeleteIcon fontSize="small"/>
            &nbsp;Delete
          </Button>
            <Button color="primary" size="small" onClick={()=> setCurrentId(post._id)}>
            <EditIcon/>
            &nbsp; Edit
          </Button>
          </>
          )}
        </CardActions>
    </Card>
    </>
  )
}

export default Post