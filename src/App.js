import React from 'react';

/** Dependencies */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/** Components */
import Header from './components/Header';
import Products from './components/products/Products';
import CreateProduct from './components/products/CreateProduct';
import EditProduct from './components/products/EditProduct';

function App() {
  return (
    <Router>
        <Header />
        <div className="container mt-5">
            <Switch>
                <Route exact path="/" component={ Products } />
                <Route exact path="/product/new" component={ CreateProduct } />
                <Route exact path="/product/edit" component={ EditProduct } />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
