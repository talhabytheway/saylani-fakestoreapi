import { Grid } from '@material-ui/core';
import ProductCard from './Card';

function Products({ payload, isLoading }) {
  console.log(payload, isLoading, 'users from products');
  return (
    <Grid container justify="center">
      {!isLoading &&
        payload.map((data) => <ProductCard key={data.id} {...data} />)}
    </Grid>
  );
}

export default Products;