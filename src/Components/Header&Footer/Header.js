import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import logo from '../../Assest/images/logo.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Banner } from './Banner';
import { Link } from "react-router-dom";
import ClientsCarousel from '../Landing-pages/ClientsCarousel'
import MapAddress from '../Landing-pages/MapAddress';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    drawer: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        backgroundColor: '#17444e',
        width: `100% !important`,
        marginLeft: '0px !important',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
    pagelisting: {
        display: 'flex',
    },
    pagelistingitem: {
        width: 'auto',
        textDecoration: 'none',
        textTransform: 'uppercase',
        display: 'block',
        fontWeight: '600',
        fontSize: '12px',
        padding: '10px',
        cursor:'pointer',
        "&:hover": {
            color: '#f8efa7',
        }
    },
    logoimg:{
        width:'130px',
        padding:theme.spacing(1,1),
    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['NEWS', 'REGISTER EARN', 'STORES', 'DISCOUNTS', 'GASTRONOMY', 'SOCIAL RESPONSABILITY', 'COMMERCIAL CONTACT'].map((text, index) => (
                    <ListItem button key={text}>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container direction="row" justifyContent="center" alignItems="center">

                        <Grid direction="row" justifyContent="flex-start" alignItems="flex-start" xs={12} sm={12} lg={2} md={2} xl={2} >
                            
                                <Typography component={Link} to="/"><img src={logo} alt='Logo'  className={classes.logoimg} /></ Typography>
                        </Grid>

                        <Grid container direction="row" justifyContent="center" alignItems="center" xs={12} sm={12} lg={8} md={8} xl={8} >
                            <List className={classes.pagelisting}>
                                {['NEWS', 'REGISTER EARN', 'STORES', 'DISCOUNTS', 'GASTRONOMY', 'SOCIAL RESPONSABILITY', 'COMMERCIAL CONTACT'].map((text, index) => (
                                    <ListItem className={classes.pagelistingitem} key={text}>
                                        <ListItemText className='pagelistingtext' primary={text} />
                                    </ListItem>
                                ))}
                            </List>
                            
                        </Grid>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start" xs={12} sm={12} lg={2} md={2} xl={2}>
                        <Button className='login-button'>Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <Grid className={classes.toolbar} >
                <Banner/> 
                </Grid>
                <Grid>
                <ClientsCarousel/>
                </Grid>
                <Grid>
                    <MapAddress/>
                </Grid>
                
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
