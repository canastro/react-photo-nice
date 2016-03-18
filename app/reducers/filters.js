import {
    ADD_FILTER,
    REMOVE_FILTER,
    TOGGLE_FILTER
} from '../actions/filters';

import { findIndex, remove } from 'lodash';

const defaultState = {
    selectedList: [],
    dataURL: null
};

function addFilter(state, action) {
    return {
        ...state,
        selectedList: [
            ...state.selectedList,
            {
                isActive: true,
                key: action.key,
                modifiers: action.modifiers
            }
        ]
    };
}

function removeFilter(state, action) {

    const selectedList = [... state.selectedList];
    remove(selectedList, (item) => {
        return item.key === action.key;
    });

    return {
        ...state,
        selectedList
    };
}

function toggleFilter(state, action) {

    const selectedList = [... state.selectedList];
    const index = findIndex(selectedList, (item) => item.key === action.key);
    selectedList[index].isActive = !selectedList[index].isActive;

    return {
        ...state,
        selectedList
    };
}

export default function filters(state = defaultState, action) {

    switch (action.type) {
        case ADD_FILTER:
            return addFilter(state, action);
        case REMOVE_FILTER:
            return removeFilter(state, action);
        case TOGGLE_FILTER:
            return toggleFilter(state, action);
        default:
            return state;
    }
}
