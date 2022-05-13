import React, { useEffect } from 'react'
import { Container, Grow, Grid, CircularProgress } from '@material-ui/core';
import ItemCard from './ItemCard/ItemCard.js';
import useStyles from './styles';

import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from '../../actions/fetchApi.js'

const Item = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchApi())
  },[dispatch])

  const api = useSelector( (state)=>  state?.fetchApi);
  const movieInfo = api.results
  console.log(movieInfo)
  
  return (
    movieInfo && (
     <Grid container alignItems="stretch" spacing={3}>
       {movieInfo.map((movie) => (
         <Grid key={movie.id} item xs={12} sm={3}>
           <ItemCard movie={movie}/>
         </Grid>
       ))}
     </Grid>
    )
  )
}

export default Item