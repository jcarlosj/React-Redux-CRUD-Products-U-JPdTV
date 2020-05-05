import { SHOW_ALERT, HIDE_ALERT } from '../types';

/** Cada Reducer tiene su propio State */
const initialState = {
    alert: null
}

export default ( state = initialState, action ) => {
    console .log( 'alert-reducer', action );
    switch( action .type ) {
        case SHOW_ALERT:
            return {
                ...state,
                alert: action .payload
            }
        case HIDE_ALERT:
            return {
                ...state,
                alert: null
            }
        default: 
            return state;
    }
}

