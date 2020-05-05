/** Las funcionalidades definidas aquí generalmente son consumidas por las vistas/components */
import { 
    ADD_PRODUCT, SUCCESSFULLY_ADDED_PRODUCT, ERROR_ADDING_PRODUCT,
    GET_PRODUCTS, GET_PRODUCTS_SUCCESSFULLY, ERROR_GETTING_PRODUCTS,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESSFULLY, ERROR_DELETING_PRODUCT,
    SELECT_PRODUCT_TO_EDIT, EDIT_PRODUCT, EDIT_PRODUCT_SUCCESSFULLY, PRODUCT_EDIT_ERROR
} from '../types';

import clientAxios from '../config/axios';  // Client Axios
import Swal from 'sweetalert2';             // Dependency

/** Crea un producto nuevo */
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

/** Obtiene los productos */
export const actionGetProducts = () => {

    return async ( dispatch ) => {
        dispatch( getAll() );

        try {
            const response = await clientAxios .get( '/products' );
            dispatch( getAllSuccessfully( response .data ) );
        } catch ( error ) {
            console .log( error );
            dispatch( errorGettingAll() );
        }
    }
}

/** Actions */
const getAll = () => ({
    type: GET_PRODUCTS,
    payload: true
});

const getAllSuccessfully = products => ({
    type: GET_PRODUCTS_SUCCESSFULLY,
    payload: products
});

const errorGettingAll = () => ({
    type: ERROR_GETTING_PRODUCTS,
    payload: true
});

/** Elimina un producto seleccionado */
export const actionDeleteProduct = productId => {
    return async ( dispatch ) => {
        dispatch( deleteById( productId ) );

        try {
            const response = await clientAxios .delete( `/products/${ productId }` );
            dispatch( deleteByIdSuccessfully() );

            Swal .fire(
                'Eliminado!',
                'Producto eliminado exitosamente.',
                'success'
            );

        } catch ( error ) {
            console .log( error );
            dispatch( errorDeletingById() );
        }
    }
}

/** Actions */
const deleteById = id => ({
    type: DELETE_PRODUCT,
    payload: id
});

const deleteByIdSuccessfully = () => ({
    type: DELETE_PRODUCT_SUCCESSFULLY
});

const errorDeletingById = () => ({
    type: ERROR_DELETING_PRODUCT,
    payload: true
});

/** Seleccionar un producto para Editar */
export const actionSelectProductToEdit = product => {
    return ( dispatch ) => {
        dispatch( getProductToEdit( product ) );
    }
}

/** Actions */
const getProductToEdit = product => ({
    type: SELECT_PRODUCT_TO_EDIT,
    payload: product
});

/** Editar un producto seleccionado */
export const actionEditProduct = product => {
    return async ( dispatch ) => {
        dispatch( edit( product ) );

        try {
            const product = await clientAxios .put( `/product/edit/${ product .id }`, product );
            console .log( product );

        } catch ( error ) {
            console .log( error );
        }
    }
}

/** Actions */
const edit = product => ({
    type: EDIT_PRODUCT,
    payload: product

});