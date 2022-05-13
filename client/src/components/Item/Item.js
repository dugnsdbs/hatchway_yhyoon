import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import Posts from '../Posts/Posts.js';

const Item = () => {
  return (
    <Grow in>
    <Container> 
      <Grid container justfiycontent="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={7}>
          <Posts/>
        </Grid>
      </Grid>
    </Container>
  </Grow>
  )
}

export default Item