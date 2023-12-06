import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography } from '@mui/material';

function AdminDashboard() {
    const navigate = useNavigate();
    const [property, setProperty] = useState({
        title: '',
        description: '',
        location: { lat: '', lng: '' },
        imageURL: ''
    });
    const handleChange = (e) => {
        if (['lat', 'lng'].includes(e.target.name)) {
            setProperty(prevState => ({
                ...prevState,
                location: {
                    ...prevState.location,
                    [e.target.name]: e.target.value
                }
            }));
        } else {
            setProperty({ ...property, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/properties', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                },
                body: JSON.stringify(property)
            });
            if (response.ok) {
                setProperty({
                    title: '',
                    description: '',
                    location: { lat: '', lng: '' },
                    imageURL: ''
                });
                alert('Property added successfully!')
            } else {
                // Handle errors
            }
        } catch (error) {
            console.error('Error adding property:', error);
        }
    };

    const handleSignOut = () => {
        localStorage.removeItem('token'); 
        navigate('/signin'); 
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" mb={2}>Admin Dashboard</Typography>
            <TextField
                label="Title"
                name="title"
                value={property.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Description"
                name="description"
                value={property.description}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <TextField
                label="Latitude"
                name="lat"
                value={property.location.lat}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Longitude"
                name="lng"
                value={property.location.lng}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Image URL"
                name="imageURL"
                value={property.imageURL}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <Box mt={2}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Add Property
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleSignOut} sx={{ ml: 2 }}>
                    Sign Out
                </Button>
            </Box>
        </Box>
    );
}

export default AdminDashboard;
