import { combineReducers } from "redux";
import { paginationReducer } from './pagination-reducer';
import { usersReducer } from './users-reducer';
import { filterReducer } from './filter-reducer';

export const reducer = combineReducers({
    usersReducer,
    paginationReducer,
    filterReducer
});