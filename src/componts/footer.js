//make a footer component
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
function Footer() {
    return (
        <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" >
            News
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
    );
    }
    export default Footer;