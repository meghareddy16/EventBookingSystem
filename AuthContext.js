
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const validCredentials = {
    user1: 'password123',
    admin: 'password123',
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const login = (username, password) => {
        if (validCredentials[username] === password) {
            setUser({ username });
            setError('');
            navigate('/event'); 
        } else {
            setError('Invalid username or password');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
