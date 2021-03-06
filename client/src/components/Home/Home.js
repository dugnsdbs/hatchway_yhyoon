import React, { useEffect } from 'react'
import { Container, Grid, Grow, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import useStyles from "./styles";
import { fetchApi } from '../../actions/fetchApi.js'
import ThisMonthMovie from './ThisMonthMovie/ThisMonthMovie'


const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  
  useEffect(()=> {
    dispatch(fetchApi())
  }, [dispatch])

  const movieApi = useSelector(  (state) =>  state?.fetchApi)

  const movieData = movieApi?.results

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today = `${yyyy}-${mm}-${dd}`;
  // const movieRealseMonth = movieData.release_date.getMonth()
  const thisMonth = today.at(6)

  const thisMonthMovie = movieData &&  movieData.filter((movie)=> movie.release_date.at(6) == thisMonth)
  
  return (
    thisMonthMovie && ( 
      <>
      <Typography variant="h5" style={{padding:"20px"}}>MOVIE HATCHWAY</Typography>
      <div>
      <Grid  container alignItems="stretch" spacing={3}>
      {thisMonthMovie.map((movie) => (
        <Grid className={classes.grid} key={movie.id} item xs={12} sm={12} md={6} lg={3}>
          <ThisMonthMovie movie={movie}/>
        </Grid>
      ))}
    </Grid>
    </div>
    </>
  )
  )
}

export default Home

