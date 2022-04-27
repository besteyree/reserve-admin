import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const user_type = localStorage.getItem('user-type'); 

    return user_type == 2 ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute