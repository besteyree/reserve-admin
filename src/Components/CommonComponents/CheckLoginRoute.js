import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const CheckLoginRoute = () => {
    const auth = localStorage.getItem('auth-token');
    
    return !auth ? <Outlet /> : <Navigate to="/home" />;
}

export default CheckLoginRoute