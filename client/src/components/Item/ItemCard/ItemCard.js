import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core';
import EventIcon from '@mui/icons-material/Event';
import { useHistory } from 'react-router-dom'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

const ItemCard = ({movie}) => {
  const classes = useStyles();
  const history = useHistory()

  return (
      <Card className={classes.card}>
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