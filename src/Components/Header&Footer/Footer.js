import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import { Container, List, ListItem, Typography, Button } from "@material-ui/core";
import footerlogo from '../../Assest/images/logo.png'

// import Routers from "../components/Routers";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(5, 5, 5, 5),
        backgroundImage: "linear-gradient(to right, #00444e , #00444e)",
        color: "#fff",
    },
    footerbox: { padding: theme.spacing(4, 0, 0, 0), fontSize: 12 },
    listitempadding: {
        padding: theme.spacing(0, 0, 2, 0),
        textTransform: "capitalize",
        fontSize: '15px',
        color: '#fff',
    },
    Linkitem: {
        textDecoration: "none !important",

        fontSize: 13,
        display: "contents",
        color: "#fff",
        cursor: "pointer",

        "&:hover": {
            color: "rgb(205 197 197 / 88%)",
        },
    },
    headingfooter: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
        position: 'relative',
        paddingBottom: '15px',
        marginBottom: 0,
    },
    addressimg: { paddingRight: 15, verticalAlign: "middle" },
    bordertop: {
        borderTop: "1px solid rgb(213 203 203 / 35%)",
    },
    columnfootersectioncolumn: { width: "100%" },
    Consultancybutton: {
        background: " #FFFFFF 0% 0% no-repeat padding-box !important",
        borderRadius: "5px !important",
        opacity: 1,
        fontSize: "13px !important",
        textTransform: " capitalize !important",

        "&:hover": {
            background: " rgb(205 200 200) 0% 0% no-repeat padding-box !important",
        },
    },
    mainhedingfooter: {
        fontSize: '18px',
        fontWeight: '700',
        color: '#fff',
        textTransform: 'uppercase',
        position: 'relative',
        paddingBottom: '15px',
        marginBottom: 0,
    },
    allparacontent: {
        fontSize: '15px',
        lineHeight: '24px',
        marginBottom: '15px',
        color: '#fff',
        wordBreak: 'break-word',
    },
    maincontentone: {
        padding: theme.spacing(2, 4, 2, 2),
        borderRight: '1px solid #ddd',
    },
    maincontenttwo: {
        padding: theme.spacing(2, 4, 2, 4),
    },
}));
const Footer = (props) => {
    const classes = useStyles();

    return (
        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.footer}>
            <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" className={classes.maincontentone}
                    xs={12}
                    sm={12}
                    lg={5}
                    md={5}
                    xl={5}>
                    <Grid className={classes.maincontentwo} container direction="row" justifyContent="center" alignItems="center">
                        <img src={footerlogo} alt="footer-logo" />
                    </Grid>
                    <Grid direction="row" justifyContent="flex-start" alignItems="flex-start">
                        <Typography variant="h5" className={classes.mainhedingfooter}>LOCATION</Typography>
                        <Typography variant="body" className={classes.allparacontent}>Quicentro Shopping is located in the executive and financial center of the city of Quito, surrounded by first-class hotels and other points of tourist interest.</Typography>
                        <Typography className={classes.allparacontent}>Direction:</Typography>
                        <Typography className={classes.allparacontent}>United Nations Avenue between December 6th Avenue and De Los Shyris Avenue.</Typography>
                        <Typography className={classes.allparacontent}>Phone: +59322464526</Typography>
                    </Grid>
                </Grid>
                <Grid className={classes.maincontenttwo} container direction="row" justifyContent="flex-start" alignItems="flex-start"
                    xs={12}
                    sm={12}
                    lg={7}
                    md={7}
                    xl={7}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        md={4}
                        xl={4}>
                        <div className={classes.columnfootersectioncolumn}>
                            <Typography variant="h5" className={classes.headingfooter}>
                                BUSINESS
                            </Typography>

                            <List>
                                <ListItem className={classes.listitempadding}>
                                    <Link to="/" className={classes.Linkitem}>About Us</Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to="/" className={classes.Linkitem}>Work with us</Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>Contact</Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to="/" className={classes.Linkitem}>Suggestions</Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        md={4}
                        xl={4}
                    >
                        <div className={classes.columnfootersectioncolumn}>
                            <Typography variant="h5" className={classes.headingfooter}>
                                SERVICES
                            </Typography>
                            <List>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>Free WIFI</Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>Parking</Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        md={4}
                        xl={4}
                    >
                        <div className={classes.columnfootersectioncolumn}>
                            <Typography variant="h5" className={classes.headingfooter}>
                                POLICIES

                            </Typography>
                            <List>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>Motorcycle and Bicycle Parking</Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>Pets and Environment</Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        md={4}
                        xl={4}
                    >
                        <div className={classes.columnfootersectioncolumn}>
                            <Typography variant="h5" className={classes.headingfooter}>
                                LEGAL WARNING

                            </Typography>
                            <List>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>

                                        Privacy

                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>
                                        Terms and Conditions
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        md={4}
                        xl={4}
                    >
                        <div className={classes.columnfootersectioncolumn}>
                            <Typography variant="h5" className={classes.headingfooter}>
                                WORK WITH US


                            </Typography>
                            <List>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>

                                        Telephone number : 022464526



                                    </Link>
                                </ListItem>
                                <ListItem className={classes.listitempadding}>
                                    <Link to='/' className={classes.Linkitem}>
                                        Email : info@quicentro.com
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default Footer;
