
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, error } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        if (error === '') {
            navigate('/EventList');
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>Username:</label>
            <input type="text" onChange={(e) => setUsername(e.target.value)} required />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
        </div>
    );
};

export default Login;
