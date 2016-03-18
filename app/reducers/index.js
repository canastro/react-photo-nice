import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import filters from './filters';

const rootReducer = combineReducers({
    routing: routeReducer,
    filters
});

export default rootReducer;
