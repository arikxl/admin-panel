import axios from 'axios';
import { PRODUCT_CREATE_FAIL, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_DELETE_FAIL, PRODUCT_DELETE_REQUEST,
         PRODUCT_DELETE_SUCCESS, PRODUCT_LIST_FAIL,
        PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS 
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