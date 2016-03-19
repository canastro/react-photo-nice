export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export function addFilter(key, modifiers) {
    return (dispatch, getState) => {
        return dispatch({
            type: ADD_FILTER,
            key,
            modifiers
        });
    };
}

export function removeFilter(key) {
    return (dispatch, getState) => {
        return dispatch({
            type: REMOVE_FILTER,
            key
        });
    };
}

export function toggleFilter(key) {
    return (dispatch, getState) => {
        return dispatch({
            type: TOGGLE_FILTER,
            key
        });
    };
}
