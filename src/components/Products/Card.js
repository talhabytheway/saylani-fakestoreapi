import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    position: 'relative',
    maxWidth: 300,
    margin: 15,
    minHeight: 400,
  },
  media: {
    height: 300,
  },
  title: {
    height: 64,
  },
  actionArea: {
    height: 160,
  },
  link: {
    color: '#3f51b5',
    textDecoration: 'none',
  },
});

export default function ProductCard({ description, image, price, title, id }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent className={classes.actionArea}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            className={classes.title}
          >
            {title.length > 35 ? title.slice(0, 35) + '...' : title}
          </Typography>
          <Typography varient="h6">${price}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description.slice(0, 90) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions id="sds" className={classes.action}>
        <Button size="small" color="primary">
          <Link to={`/product/${id}`} className="link">
            View
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
