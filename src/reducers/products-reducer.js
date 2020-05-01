import { 
    ADD_PRODUCT, SUCCESSFULLY_ADDED_PRODUCT, ERROR_ADDING_PRODUCT,
    GET_PRODUCTS, GET_PRODUCTS_SUCCESSFULLY, ERROR_GETTING_PRODUCTS
} from '../types';

/** Cada Reducer tiene su propio State */
const initialState = {
    products: [],
    error: null,
    loading: false
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
        default: 
            return state;
    }
}