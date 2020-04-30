import { ADD_PRODUCT, SUCCESSFULLY_ADDED_PRODUCT, ERROR_ADDING_PRODUCT } from '../types';

/** Las funcionalidades definidas aquí generalmente son consumidas por las vistas/components */
export const actionCreateProduct = ( product ) => {

    console .log( 'product', product );
    
    return ( dispatch ) => {      
        dispatch( add() );

        try {
            dispatch( addedSuccessfully( product ) );
        } catch ( error ) {
            dispatch( errorAdding( true ) );
        }
    }
}

/** Actions */
const add = () => ({                        // Cambia estado del State del Reducer
    type: ADD_PRODUCT
}); 

const addedSuccessfully = product => ({     // Agrega producto al State del Reducer
    type: SUCCESSFULLY_ADDED_PRODUCT,
    payload: product
});

const errorAdding = stateError => ({        // Cambia estado del State del Reducer
    type: ERROR_ADDING_PRODUCT,
    payload: stateError
});