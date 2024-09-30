import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme,makeStyles } from '@mui/material/styles';


import { Drawer, List, ListItem, ListItemText } from '@mui/material';
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

    function Nav() {
        const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const [drawerOpen, setDrawerOpen] = useState(false);

        const toggleDrawer = (open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }
            setDrawerOpen(open);
        };

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        {isSmallScreen ? (
                            <>
                                <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                                    <List>
                                        <ListItem button>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="About" />
                                        </ListItem>
                                        <ListItem button>
                                            <ListItemText primary="Contact" />
                                        </ListItem>
                                    </List>
                                </Drawer>
                            </>
                        ) : (
                            <Typography variant="h6" className={classes.title}>
                                Rigos Blog
                            </Typography>
                        )}
                        <Button className={classes.loginButton}>Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Nav;