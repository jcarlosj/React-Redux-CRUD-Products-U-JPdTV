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