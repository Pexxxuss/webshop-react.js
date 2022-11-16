import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './components/pages/Welcome';

import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs';
import Personality from './components/pages/Personality';
import Customers from './components/pages/Customers';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
      <Route path="/about">
        <AboutUs />
      </Route>
      <Route path="/personality">
        <Personality />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
    </div>
  );
}

export default App;
