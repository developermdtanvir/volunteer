import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

export const PraivetRouter = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);
    console.log(user);
    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace />
}