import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './components/Routes';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <NavBar style={{ position: 'static', top: 0 }} />
      <Routes />
    </Router>
  );
}

export default App;
