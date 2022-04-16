import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, combineReducers, applyMiddleware} from 'redux';

import { userListReducer, userLoginReducer } from './reducers/userReducers';


const reducer = combineReducers({
    userLogin : userLoginReducer, 
    userList: userListReducer,
});

// LOGIN
const userInfoFromLocalStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null;

const initialState = {
    userLogin : { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
