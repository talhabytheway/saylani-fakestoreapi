import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Products from '../Products';
import useFetch from '../../useFetch';
import { InputLabel, Select, MenuItem, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link: {
    color: '#000',
    textDecoration: 'none',
  },
});
function Home() {
  const { category, sort } = useParams();
  const [products, isLoading] = useFetch([category, sort]);
  const [s, setS] = React.useState('');
  const [c, setC] = React.useState('');
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <span>
          <InputLabel id="label">Sort</InputLabel>
          <Select
            labelId="label"
            id="S"
            value={s}
            onChange={(e) => setS(e.target.value)}
          >
            <MenuItem value={40}>
              <Link
                to={`/home/${category ? category : 'all'}/asec`}
                className={classes.link}
              >
                Ascending
              </Link>
            </MenuItem>
            <MenuItem value={50}>
              <Link
                to={`/home/${category ? category : 'all'}/desc`}
                className={classes.link}
              >
                Descending
              </Link>
            </MenuItem>
          </Select>
        </span>
        <span>
          <InputLabel id="cat">Category</InputLabel>
          <Select
            labelId="cat"
            id="C"
            value={c}
            onChange={(e) => setC(e.target.value)}
          >
            {[
              ['all', 10],
              ['electronics', 20],
              ['jewelery', 30],
              ["men's clothing", 40],
              ["women's clothing", 50],
            ].map(([e, val]) => (
              <MenuItem value={val}>
                <Link
                  to={`/home/${e.slice(0, 3)}/${sort ? sort : 'asec'}`}
                  key={e}
                  className={classes.link}
                >
                  {e[0].toUpperCase() + e.slice(1)}
                </Link>
              </MenuItem>
            ))}
          </Select>
        </span>
      </Grid>
      <Grid container direction="column" justify="center" alignItems="center">
        {isLoading && <h1>Loading...</h1>}
      </Grid>
      <Products payload={products} isLoading={isLoading} />
    </>
  );
}

export default Home;
