import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Paper, CardMedia, Container } from '@mui/material';

function PropertyDetail() {
    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchProperty = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:5000/properties/${id}`);
                const data = await response.json();
                setProperty(data);
            } catch (error) {
                console.error('Error fetching property:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!property) {
        return <Typography variant="h6" align="center">Property not found</Typography>;
    }

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ mt: 3, p: 3 }}>
                <Typography variant="h4" gutterBottom>
                    {property.title}
                </Typography>
                <CardMedia
                    component="img"
                    height="300"
                    image={property.imageURL || 'default-property-image.jpg'} 
                    alt={property.title}
                    sx={{ width: '100%', objectFit: 'contain' }}
                />
                <Typography variant="body1">
                    {property.description}
                </Typography>
            </Paper>
        </Container>
    );
}

export default PropertyDetail;
