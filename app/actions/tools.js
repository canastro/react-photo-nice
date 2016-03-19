export const TOGGLE_FILTERS_BAR_VISIBILITY = 'TOGGLE_FILTERS_BAR_VISIBILITY';
export const TOGGLE_STACK_BAR_VISIBILITY = 'TOGGLE_STACK_BAR_VISIBILITY';

export function toggleStackBarVisibility() {
    return (dispatch, getState) => {
        return dispatch({
            type: TOGGLE_STACK_BAR_VISIBILITY
        });
    };
}

export function toggleFiltersBarVisibility() {
    return (dispatch, getState) => {
        return dispatch({
            type: TOGGLE_FILTERS_BAR_VISIBILITY
        });
    };
}
