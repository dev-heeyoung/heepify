import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, requireAdmin }) {
    const { user } = useAuthContext();

    if (!user) return <p className='text-center my-10'>Loading...</p>

    if ((requireAdmin && !user.isAdmin)) {
        return <Navigate to='/' replace />;
    }

    return children;
}

