import { combineReducers } from 'redux';      // Official React bindings for Redux

import productsReducer from './products-reducer';   // Reducer

export default combineReducers({
    products: productsReducer
});