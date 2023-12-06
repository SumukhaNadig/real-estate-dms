import React, { useState, useEffect } from 'react';
import { Grid, Box, CircularProgress, Divider } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import MapComponent from '../components/MapComponent'; // Ensure the path is correct

function Home() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:5000/properties');
                const data = await response.json();
                setProperties(data);
                setFilteredProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, []);

    const handleSearch = () => {
        const filtered = properties.filter(property =>
            property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (property.description && property.description.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProperties(filtered);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <SearchBar onSearch={handleSearch} searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Divider sx={{ my: 2 }} />
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <div>
                    <MapComponent properties={filteredProperties} />
                    <Grid container spacing={3} sx={{ mt: 3 }}>
                        {filteredProperties.map(property => (
                            <Grid item key={property._id} xs={12} sm={6} md={4}>
                                <PropertyCard property={property} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            )}
        </Box>
    );
}

export default Home;
