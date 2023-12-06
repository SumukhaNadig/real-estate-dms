import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // User not authenticated
        return <Navigate to="/signin" />;
    }

    return children; // User authenticated
}

export default ProtectedRoute;
