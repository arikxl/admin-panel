import axios from 'axios';

import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LOGIN_FAIL,
        USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,
        USER_LOGOUT,
} from "../constants/userConstants";


// LOGIN
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({type : USER_LOGIN_REQUEST});

        const config = {
            headers : {
                "content-type": "application/json"
            }
        }
        
        const {data} = await axios.post(`/users/login`,
        {email, password},
        config,
        );

        dispatch({type : USER_LOGIN_SUCCESS, payload : data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// LOGOUT
export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({type: USER_LOGOUT});
    // window.location.reload();

    // document.location.href= '/login';
};

// GET USERS LIST -ADMIN
export const userList = () => async (dispatch, getState) => {
    try {
        dispatch({type : USER_LIST_REQUEST});

        const { userLogin: { userInfo } } = getState(); 

        const config = {
            headers : {
                Authorization : `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.get(`/users`, config);

        dispatch({type : USER_LIST_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: USER_LIST_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};