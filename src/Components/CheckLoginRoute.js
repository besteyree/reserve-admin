import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';


const CheckLoginRoute = () => {
    const auth = localStorage.getItem('auth-token'); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return !auth ? <Outlet /> : <Navigate to="/home" />;
}

export default CheckLoginRoute