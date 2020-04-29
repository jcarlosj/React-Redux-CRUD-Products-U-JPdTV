/** Cada Reducer tiene su propio State */
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default ( state = initialState, action ) => {
    switch( action .type ) {
        default: 
            return state;
    }
}