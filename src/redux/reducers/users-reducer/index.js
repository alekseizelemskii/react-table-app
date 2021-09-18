import {SET_USERS, SET_USER} from '../../types';

const initState = {
    users: null,
    selectedUser: null
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_USERS:
            return ({
                ...state,
                users: action.payload
            })
        case SET_USER:
            return({
                ...state,
                selectedUser: action.payload
            })
        default: {
            return state;
        }
    }
}