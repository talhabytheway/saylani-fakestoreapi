import Home from './Home';
import ProductP from './ProductPage';
import { Route, Switch } from 'react-router-dom';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" children={<Home />} />
      <Route path="/home/:category?/:sort?" children={<Home />} />
      <Route exact path="/product/:ident" children={<ProductP />} />
    </Switch>
  );
};

export default Routing;
