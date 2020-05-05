import { SHOW_ALERT, HIDE_ALERT } from '../types';

/** Show Alert */
export const actionShowAlert = alert => {
    return ( dispatch ) => {
        dispatch( showMessageInsideAlert( alert ) );
    }
}

/** Actions */
const showMessageInsideAlert = alert => ({
    type: SHOW_ALERT,
    payload: alert
});

/** Hide Alert */
export const actionHideAlert = alert => {
    return ( dispatch ) => {
        dispatch( hideMessageInsideAlert() );
    }
}

/** Actions */
const hideMessageInsideAlert = _ => ({
    type: HIDE_ALERT
});