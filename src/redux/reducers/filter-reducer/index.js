import { SET_SELECT_OPTION, SET_SEARCH_VALUE, SET_SORT_CONFIG } from '../../types';

const initState = {
    searchValue: '',
    selectOption: 'All States',
    sortConfig: {}
}

export const filterReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SELECT_OPTION:
            return ({
                ...state,
                selectOption: action.payload
            });
        case SET_SEARCH_VALUE:
            return ({
                ...state,
                searchValue: action.payload
            });
        case SET_SORT_CONFIG:
            return {
                ...state,
                sortConfig: action.payload
            }
        default: {
            return state;
        }
    }
}