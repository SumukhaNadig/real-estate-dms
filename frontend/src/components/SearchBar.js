import React from 'react';
import { Box, TextField, Button } from '@mui/material';

function SearchBar({ onSearch, searchTerm, onSearchChange }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
            <TextField
                id="search-field"
                label="Search Properties"
                variant="outlined"
                value={searchTerm}
                onChange={onSearchChange}
                sx={{ mr: 1 }}
            />
            <Button variant="contained" onClick={onSearch}>
                Search
            </Button>
        </Box>
    );
}

export default SearchBar;
