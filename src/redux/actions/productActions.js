import axios from 'axios';
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS,
         PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS,
         PRODUCT_EDIT_FAIL, PRODUCT_EDIT_REQUEST, PRODUCT_EDIT_SUCCESS,
         PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
        PRODUCT_UPDATE_FAIL, PRODUCT_UPDATE_REQUEST, PRODUCT_UPDATE_SUCCESS 
} from '../constants/productsConstants';


// GET PRODUCTS LIST -ADMIN
export const listProducts = () => async (dispatch, getState) => {
    try {
        dispatch({type : PRODUCT_LIST_REQUEST});

        const { userLogin: { userInfo } } = getState(); 

        const config = {
            headers : {
                Authorization : `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.get(`/products/all`, config);

        dispatch({type : PRODUCT_LIST_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// DELETE PRODUCT -ADMIN
export const deleteProduct = (id) => async (dispatch, getState) => {
    try {
        dispatch({type : PRODUCT_DELETE_REQUEST});

        const { userLogin: { userInfo } } = getState(); 

        const config = {
            headers : {
                Authorization : `Bearer ${userInfo.token}`
            }
        };
        
        await axios.delete(`/products/${id}`, config);

        dispatch({type : PRODUCT_DELETE_SUCCESS});
    } catch (error) {
            dispatch({
                type: PRODUCT_DELETE_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// CREATE PRODUCT -ADMIN
export const createProduct = (
    title, price, img, description, stock 
) => async (dispatch, getState) => {
    try {
        dispatch({type : PRODUCT_CREATE_REQUEST});

        const { userLogin: { userInfo } } = getState(); 

        const config = {
            headers : {
                Authorization : `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.post(`/products/`,
        {title, price, img, description, stock }, config);

        dispatch({type : PRODUCT_CREATE_SUCCESS, payload : data});

    } catch (error) {
            dispatch({
                type: PRODUCT_CREATE_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// Edit PRODUCT -ADMIN
export const editProduct = (id) => async (dispatch) => {
    try {
        dispatch({type : PRODUCT_EDIT_REQUEST});
        
        const {data} = await axios.get(`/products/${id}`);
        dispatch({type : PRODUCT_EDIT_SUCCESS, payload : data});
    } catch (error) {
            dispatch({
                type: PRODUCT_EDIT_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};

// UPDATE PRODUCT -ADMIN
export const updateProduct = (product) => async (dispatch, getState) => {
    try {
        dispatch({type : PRODUCT_UPDATE_REQUEST});

        const { userLogin: { userInfo } } = getState(); 

        const config = {
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${userInfo.token}`
            }
        };
        
        const {data} = await axios.put(`/products/${product._id}`, product, config);

        dispatch({type : PRODUCT_UPDATE_SUCCESS, payload : data});
        dispatch({type : PRODUCT_EDIT_SUCCESS, payload : data});

    } catch (error) {
            dispatch({
                type: PRODUCT_UPDATE_FAIL,
                payload : error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            });
    };
};