import { createStore, applyMiddleware, compose } from 'redux';      // Official React bindings for Redux
import thunk from 'redux-thunk';        // Function to perform asynchronous dispatch (Permite usar funciones Asincronas entre otras ventajas)
import reducer from './reducers'

/** Store */
const store = createStore(
    reducer,                                        // Todos los reducers
    compose( 
        applyMiddleware( thunk ),                   // Implementa 'thunk' como Middleware del Store
        window .__REDUX_DEVTOOLS_EXTENSION__        // Detecta si estamos usando Redux DevTools
        && window .__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
