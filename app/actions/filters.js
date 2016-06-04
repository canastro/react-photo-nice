export const ADD_FILE = 'ADD_FILE';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const SORT_FILTER = 'SORT_FILTER';

import Filters from '../utils/filters';

export function addFile(file) {
    return (dispatch) => {
        return Filters.addFile(file)
            .then((image) => {
                return dispatch({
                    type: ADD_FILE,
                    image
                });
            });
    };
}

export function addFilter(key, modifiers) {
    return (dispatch, getState) => {
        return Filters.addFilter(key, modifiers)
            .then((image) => {
                return dispatch({
                    type: ADD_FILTER,
                    key,
                    modifiers,
                    image
                });
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

export function sortFilter(fromIndex, toIndex) {
    return (dispatch, getState) => {
        return dispatch({
            type: SORT_FILTER,
            fromIndex,
            toIndex
        });
    };
}
