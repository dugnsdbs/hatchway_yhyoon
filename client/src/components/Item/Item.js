import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, CircularProgress, TextField } from '@material-ui/core';
import ItemCard from './ItemCard/ItemCard.js';
import useStyles from './styles';

import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from '../../actions/fetchApi.js'

const Item = () => {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  
  const classes = useStyles();

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(()=> {
    dispatch(fetchApi())
  },[dispatch])

  const api = useSelector( (state)=>  state?.fetchApi);
  const movieInfo = api.results?.filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <>
    <TextField   className={classes.search} label="Search" variant="outlined" type="text" value={search} onChange={handleSearch}></TextField>
    {movieInfo ?  (
     <Grid container alignItems="stretch" spacing={3}>
       {movieInfo.map((movie) => (
         <Grid key={movie.id} item xs={12} sm={3}>
           <ItemCard movie={movie}/>
         </Grid>
       ))}
     </Grid>
    ): <CircularProgress/> }
    </>
  )
}

export default Item