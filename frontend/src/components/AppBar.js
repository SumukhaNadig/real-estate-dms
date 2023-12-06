import React from 'react';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

function AppBar() {
    return (
        <MuiAppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    MaxHome
                </Typography>
            </Toolbar>
        </MuiAppBar>
    );
}

export default AppBar;
