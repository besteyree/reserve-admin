import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const CheckBoth = () => {
    const auth = localStorage.getItem('auth-token'); 
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default CheckBoth


// check for both super admin and admin for home page 