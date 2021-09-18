import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";

// const SET_USERS = 'SET_USERS';
// const SET_SELECT_OPTION = 'SET_SELECT_OPTION';
// const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';
// const SET_SORT_CONFIG = 'SET_SORT_CONFIG';
// const SET_USER = 'SET_USER';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'; 


// const initState = {
//     users: null,
//     searchValue: '',
//     selectOption: 'All States',
//     selectedUser: null,
//     sortConfig: {},
//     currentPage: 1,
//     usersPerPage: 20,

// }

// const reducer = (state = initState, action) => {
//     switch (action.type) {
        
//         case SET_USERS:
//             return({
//                 ...state,
//                 users: action.payload,
//             });
        
//         case SET_SELECT_OPTION:
//             return ({
//                 ...state,
//                 selectOption: action.payload
//             });
//         case SET_SEARCH_VALUE:
//             return ({
//                 ...state,
//                 searchValue: action.payload
//             });
//         case SET_SORT_CONFIG :
//             return {
//                 ...state,
//                 sortConfig: action.payload
//             }

//         case SET_USER:
//             return {
//                 ...state,
//                 selectedUser: action.payload
//             }
//         case SET_CURRENT_PAGE: 
//             return({
//                 ...state,
//                 currentPage: action.payload
//             })
//         default: {
//             return state;
//         }
//     }
// }

export const store = createStore(reducer, applyMiddleware(thunk));


//action
// export const setUsers = (payload) => ({type:SET_USERS, payload})

// export const setSelectOption = (payload) => ({type: SET_SELECT_OPTION, payload });

// export const setSearchValue = (payload) => ({type: SET_SEARCH_VALUE, payload});

// export const setSortConfig = (payload) => ({type: SET_SORT_CONFIG, payload});

// export const setUser = (payload) => ({type: SET_USER, payload});

