import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            // console.log(username, password)
            const response = await fetch('http://localhost:5000/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({username : username, password : password})
            });
            const data = await response.json();

            if (data.token) {
                localStorage.setItem('token', data.token); 
                navigate('/admin-dashboard');
            } else {
                alert(data.message)
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        }
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4">Admin Sign In</Typography>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSignIn}
            >
                Sign In
            </Button>
        </Box>
    );
}

export default SignIn;
