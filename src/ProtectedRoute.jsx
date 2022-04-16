import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Login from './components/login/Login';

const useAuth = () => {
    const user = useSelector((state) => state.userLogin).userInfo;
    // const location = useLocation();
    useEffect(() => {
    },[user]);
    return (
        user && user.isAdmin
    );
};

const ProtectedRoute = () => {
    const isAuth = useAuth();
    return (
        isAuth
            ? (<Outlet />)
            : (<Login />)
    );
};

export default ProtectedRoute;