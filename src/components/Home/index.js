import { Link, useParams } from 'react-router-dom';
import Products from '../Products';
import useFetch from '../../useFetch';
import { InputLabel, Select, MenuItem } from '@material-ui/core';

function Home() {
  const { category, sort } = useParams();
  const [products, isLoading] = useFetch([category, sort]);

  return (
    <>
      <InputLabel id="label">Sort</InputLabel>
      <Select labelId="label" id="select" value={sort}>
        <Link to={`/${category ? category : 'all'}/asec`}>
          <MenuItem>Ascending</MenuItem>
        </Link>
        <Link to={`/${category ? category : 'all'}/desc`}>
          <MenuItem>Descending</MenuItem>
        </Link>
      </Select>

      <InputLabel id="cat">Category</InputLabel>
      <Select labelId="cat" id="select" value={category}>
        {[
          'all',
          'electronics',
          'jewelery',
          "men's clothing",
          "women's clothing",
        ].map((e) => (
          <Link to={`/${e.slice(0, 3)}/${sort ? sort : 'asec'}`}>
            <MenuItem>{e[0].toUpperCase() + e.slice(1)}</MenuItem>
          </Link>
        ))}
      </Select>
      {isLoading && <h4>Loading</h4>}
      <Products payload={products} isLoading={isLoading} />
    </>
  );
}

export default Home;
