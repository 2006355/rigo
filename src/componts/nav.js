import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme,makeStyles } from '@mui/material/styles';
const classes = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    loginButton: {
        color: '#fff',
    },
}));

function Nav() {
    const theme = useTheme( );
   
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <AppBar position="static" className={classes.AppBar}>
               
            <Toolbar>
                {isSmallScreen ? (
                    <IconButton edge="start" color="inherit" aria-label="menu"onClick={}>
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <Typography variant="h6" className={classes.title}>
                        Rigos Blog
                    </Typography>
                )}
                <Button className={classes.loginButton}>Login</Button>

             
            </Toolbar>
        </AppBar>
    );
}

export default Nav;