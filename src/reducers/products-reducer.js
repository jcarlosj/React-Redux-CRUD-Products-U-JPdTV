import { 
    ADD_PRODUCT, SUCCESSFULLY_ADDED_PRODUCT, ERROR_ADDING_PRODUCT,
    GET_PRODUCTS, GET_PRODUCTS_SUCCESSFULLY, ERROR_GETTING_PRODUCTS,
    DELETE_PRODUCT, DELETE_PRODUCT_SUCCESSFULLY, ERROR_DELETING_PRODUCT,
    EDIT_PRODUCT, EDIT_PRODUCT_SUCCESSFULLY, PRODUCT_EDIT_ERROR
} from '../types';

/** Cada Reducer tiene su propio State */
const initialState = {
    products: [],
    error: null,
    loading: false,
    selectedProductId: null,
    selectedProduct: null
}

export default ( state = initialState, action ) => {
    console .log( 'products-reducer', action );
    switch( action .type ) {
        /** Create */
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true
            }
        case SUCCESSFULLY_ADDED_PRODUCT:
            return {
                ...state,
                loading: false,
                products: [ ...state .products, action .payload ]
            }
        case ERROR_ADDING_PRODUCT:
            return {
                ...state,
                loading: false,
                error: action .payload
            }
        /** Read */
        case GET_PRODUCTS:
            return {
                ...state,
                loading: action .payload
            }
        case GET_PRODUCTS_SUCCESSFULLY:
            return {
                ...state,
                products: action .payload,
                loading: false,
                error: null
            }
        case ERROR_GETTING_PRODUCTS:
            return {
                ...state,
                loading: false,
                error: action .payload
            }
        /** Update */
        case EDIT_PRODUCT:
            return {
                ...state,
                selectedProduct: action .payload
            }
        /** Delete */
        case DELETE_PRODUCT:
            return {
                ...state,
                selectedProductId: action .payload
            }
        case DELETE_PRODUCT_SUCCESSFULLY:
            return {
                ...state,
                products: state .products .filter( product => state .selectedProductId !== product .id ),
                selectedProductId: null
            }
        case ERROR_DELETING_PRODUCT:
            return {
                ...state,
                loading: false,
                error: action .payload
            }
        default: 
            return state;
    }
}