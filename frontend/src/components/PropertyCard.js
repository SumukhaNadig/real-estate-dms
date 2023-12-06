import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function PropertyCard({ property }) {
    const navigate = useNavigate(); 

    const handleViewMore = () => {
        navigate(`/property/${property._id}`); 
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={property.imageURL || 'default-image-url.jpg'}
                alt={property.title}
                sx={{ width: '100%', objectFit: 'contain' }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {property.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {property.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleViewMore}>View More</Button>
            </CardActions>
        </Card>
    );
}

export default PropertyCard;
