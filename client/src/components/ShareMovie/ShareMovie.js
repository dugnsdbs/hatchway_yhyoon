import React, {useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';

import useStyles from './styles';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/post';

const ShareMovie = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=> {
    dispatch(getPosts())
  },[dispatch, currentId])

  return (
    <Grow in>
      <Container>
        <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={3} sm={3}>
            <Form setCurrentId={setCurrentId} currentId={currentId}/>
          </Grid>
          <Grid item xs={24} sm={12} md={8}>
            <Posts setCurrentId={setCurrentId}/> 
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default ShareMovie