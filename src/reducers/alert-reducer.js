import { SHOW_ALERT, HIDE_ALERT } from '../types';

/** Cada Reducer tiene su propio State */
const initialState = {
    alert: null
}

export default ( state = initialState, action ) => {
    console .log( 'alert-reducer', action );
    switch( action .type ) {
        default: 
            return state;
    }
}

