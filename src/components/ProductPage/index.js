import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useFetch from './usefetch';

const useStyles = makeStyles({
  root: {
    display: 'block',
    position: 'relative',
    margin: 15,
  },
  media: {
    height: 600,
    width: 400,
  },
});

export default function ProductPage() {
  const classes = useStyles();
  const { ident } = useParams();
  const [{ title, price, category, description, image }, isLoading] =
    useFetch(ident);
  return (
    <>
      <br />
      <Button size="small" color="primary">
        <Link to="/">Go to Home</Link>
      </Button>
      {isLoading && (
        <Typography variant="h1" color="primary" component="h3">
          Loading
        </Typography>
      )}

      {!isLoading && (
        <Paper className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={image} title={title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                {title}
              </Typography>
              <Typography gutterBottom variant="subtitle1" component="h3">
                {category}
              </Typography>
              <Typography varient="h6">${price}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions id="sds">
            <Button size="small" color="primary">
              Add to Cart
            </Button>
            <Button size="small" color="primary">
              Add to Favourites
            </Button>
          </CardActions>
        </Paper>
      )}
    </>
  );
}
