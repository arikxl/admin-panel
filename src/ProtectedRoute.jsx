import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from './components/login/Login';

const ProtectedRoute = () => {
    const user = useSelector((state) => state.userLogin).userInfo;
    return (
        user && user.isAdmin
            ? (<Outlet />)
            : (<Login />)
    );
};

export default ProtectedRoute;