import React, {useState, useEffect } from 'react'
import useStyles from './styles';

import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/post'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Form = ({ setCurrentId, currentId }) => {
  const [postData, setPostData] = useState({title:"", rate:"", comment:"", selectedFile:""})
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem('profile'))

  const post = useSelector((state) => currentId ? state.post.posts.find((p) => p._id === currentId) : null);

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(currentId ) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
      clear()
    } else {
      dispatch(createPost({...postData, name: user?.result?.name}))
      clear()
    
    }
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({title:"", rate:"", comment:"", selectedFile:""})
  }

  return (
    <Paper className={classes.paper}>
      <form autocompelte="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Your Favorite Movie?</Typography>
       
        <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=> setPostData({...postData, title: e.target.value})}/>
        <TextField name="rate" variant="outlined" label="rate" fullWidth value={postData.rate}
        onChange={(e)=> setPostData({...postData, rate: e.target.value})}/>
        <TextField name="comment" variant="outlined" label="comment" fullWidth value={postData.comment} onChange={(e)=> setPostData({...postData, comment:e.target.value})}/>
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData, selectedFile: base64})}/>
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>clear</Button>
      </form>
    </Paper>
  )
}

export default Form