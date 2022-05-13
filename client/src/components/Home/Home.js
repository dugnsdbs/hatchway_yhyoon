import React, { useEffect } from 'react'
import { Container, Grid, Grow } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import useStyles from "./styles";
import { fetchApi } from '../../actions/fetchApi.js'
import ThisMonthMovie from './ThisMonthMovie/ThisMonthMovie'


const Home = () => {
  const dispatch = useDispatch()
  
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
  const thisMonth = today.at(6)-1

  const thisMonthMovie = movieData &&  movieData.filter((movie)=> movie.release_date.at(6) == thisMonth)
  
  console.log(thisMonth)
  console.log(thisMonthMovie)

  return (
    thisMonthMovie && ( 
    <Grid container alignItems="stretch" spacing={3}>
      {thisMonthMovie.map((movie) => (
        <Grid key={movie.id} item xs={1} sm={1}>
          <ThisMonthMovie movie={movie}/>
        </Grid>
      ))}
    </Grid>
  )
  )
}

export default Home