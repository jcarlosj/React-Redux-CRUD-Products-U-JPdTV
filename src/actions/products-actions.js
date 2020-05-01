import { 
    ADD_PRODUCT, SUCCESSFULLY_ADDED_PRODUCT, ERROR_ADDING_PRODUCT,
    GET_PRODUCTS, GET_PRODUCTS_SUCCESSFULLY, ERROR_GETTING_PRODUCTS
} from '../types';

import clientAxios from '../config/axios';  // Client Axios
import Swal from 'sweetalert2';             // Dependency

/** Las funcionalidades definidas aquí generalmente son consumidas por las vistas/components */
export const actionCreateProduct = ( product ) => {
    
    return async ( dispatch ) => {      
        dispatch( add() );

        try {
            await clientAxios .post( '/products', product );
            dispatch( addedSuccessfully( product ) );

            /** Implementa Alerta */
            Swal .fire(
                'Correcto!',
                'El producto agregó exitosamente',
                'success'
            ); 
        } catch ( error ) {
            console .log( error );
            dispatch( errorAdding( true ) );

            /** Implementa Alerta */
            Swal .fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Fallo al agregar el producto. Intentalo de nuevo.'
            });
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

export const actionGetProducts = () => {

    return async ( dispatch ) => {
        dispatch( getAll() );
    }
}

/** Actions */
const getAll = () => ({
    type: GET_PRODUCTS,
    payload: true
});