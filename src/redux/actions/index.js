import { SET_USERS, SET_SELECT_OPTION, SET_SEARCH_VALUE, SET_SORT_CONFIG, SET_USER, SET_CURRENT_PAGE } from '../types';

export const setUsers = (payload) => ({type:SET_USERS, payload});

export const getUsers = () => {
    return async (dispatch) => {
        const response = await (await fetch(
            `https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`))
            .json();
        dispatch(setUsers(response));
        }   
};

export const setSelectOption = (payload) => ({type: SET_SELECT_OPTION, payload });

export const setSearchValue = (payload) => ({type: SET_SEARCH_VALUE, payload});

export const setSortConfig = (payload) => ({type: SET_SORT_CONFIG, payload});

export const setUser = (payload) => ({type: SET_USER, payload});

export const setCurrentPage = (payload) => ({type: SET_CURRENT_PAGE, payload})