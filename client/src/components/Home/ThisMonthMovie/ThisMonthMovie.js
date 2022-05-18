import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import EventIcon from '@mui/icons-material/Event';

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const ItemCard = ({movie}) => {
  const classes = useStyles();
  
  return (
    
    <Card className={classes.card}>
      {/* <img src={IMG_API + movie.poster_path} alt={movie.title}/> */}
      <CardMedia className={classes.media} image={`${IMG_API}${movie.poster_path}`} title={movie.title}/>
      <Typography className={classes.title} variant="h6">{movie.title}</Typography>
      <div className={classes.details}>
        <Typography  variant="body2"> <EventIcon /> {movie.release_date}</Typography>
        <Typography variant="body2">{`🍅 ${movie.vote_average}`}</Typography>
      </div>

    </Card>
  )
}

export default ItemCard