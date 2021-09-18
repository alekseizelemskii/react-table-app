import {SET_CURRENT_PAGE} from '../../types';

const initState = {
    currentPage: 1,
    usersPerPage: 20
}

export const paginationReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE:
            return ({
                ...state,
                currentPage: action.payload
            })
        default: {
            return state;
        }
    }
}