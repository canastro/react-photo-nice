import {
    ADD_FILTER,
    REMOVE_FILTER,
    TOGGLE_FILTER
} from '../actions/filters';

import {
    TOGGLE_FILTERS_BAR_VISIBILITY,
    TOGGLE_STACK_BAR_VISIBILITY
} from '../actions/tools';

import { findIndex, remove } from 'lodash';

const defaultState = {
    selectedList: [],
    areFiltersVisible: false,
    isStackVisible: false
};

function toggleFiltersBarVisibility(state, action) {
    return {
        ...state,
        areFiltersVisible: !state.areFiltersVisible
    };
}

function toggleStackBarVisibility(state, action) {
    return {
        ...state,
        isStackVisible: !state.isStackVisible
    };
}

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
        case TOGGLE_FILTERS_BAR_VISIBILITY:
            return toggleFiltersBarVisibility(state, action);
        case TOGGLE_STACK_BAR_VISIBILITY:
            return toggleStackBarVisibility(state, action);
        default:
            return state;
    }
}
