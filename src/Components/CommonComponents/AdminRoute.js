import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {

    const auth = localStorage.getItem('user-type'); 
    
    return auth == 1 ? <Outlet /> : <Navigate to="/" />;
}

export default AdminRoute