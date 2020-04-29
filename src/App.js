import React from 'react';

/** Dependencies */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

/** Components */
import Header from './components/Header';
import Products from './components/products/Products';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';

function App() {
  return (
    <Router>
        <Provider store={ store }>
          <Header />
          <div className="container mt-5">
              <Switch>
                  <Route exact path="/" component={ Products } />
                  <Route exact path="/product/new" component={ CreateProduct } />
                  <Route exact path="/product/edit" component={ EditProduct } />
              </Switch>
          </div>
        </Provider>
    </Router>
  );
}

export default App;
