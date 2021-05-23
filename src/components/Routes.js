import Home from './Home';
import ProductP from './ProductPage';
import { Route, Switch } from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/product/:ident" children={<ProductP />} />
    </Switch>
  );
};

export default Routing;
