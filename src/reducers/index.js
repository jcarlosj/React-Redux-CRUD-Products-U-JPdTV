import { combineReducers } from 'redux';      // Official React bindings for Redux

/** Reducers */
import productsReducer from './products-reducer';   
import alertReducer from './alert-reducer';   

export default combineReducers({
    products: productsReducer,           // products será el nombre del State para el Reducer de Productos
    alerts: alertReducer
});