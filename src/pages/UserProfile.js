import React from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import Post from  "../components/deshboard/Post";

import {Footer, Header} from "../layouts";
import Grid from '@material-ui/core/Grid';
import Container from  '@material-ui/core/Container';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

import  Review from  "../components/svg";
import CustomerReview from "../components/client/Review";


import {catProfile, postDataDog} from "../data";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: "30px auto",
        width: 120,
        height: 120,
    },

    cardGrid : {
        marginTop: "50px",
        marginBottom: "50px",
    },
    userName: {
        textAlign: "center",
    },
    profileHead: {
        marginTop: '16px',
        marginBottom: '16px',
        borderBottomWidth: "1px !important",
        borderBottomColor: "#EBEBEB !important",
        borderBottomStyle: "solid",

    },
    postContainer: {
        marginTop: "50px",
        // maxWidth: 500,
    }

}));

const UserProfile = () => {
    let { id } = useParams();
    const classes = useStyles();
    return (
        <>
            <Header/>
            <div className='main'>

                <Grid container >
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={10} >

                            <Grid item md={5} >
                                <div style={{border:"1px solid #ccc", height:"auto", margin: "0px 40px"}}>
                                <Avatar alt="Remy Sharp" src={catProfile[0].user.image} className={classes.bigAvatar} />
                                    <div style={{margin:"20px"}}>
                                        <div className={classes.profileHead} ></div>

                                        <List  aria-label="main mailbox folders" style={{marginBottom:20}}>
                                            <ListItem button style={{padding:0}}>
                                                <ListItemIcon>
                                                    <Review/>
                                                </ListItemIcon>
                                                <ListItemText primary="2 reviews" />
                                            </ListItem>
                                            <ListItem button style={{padding:0}}>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon style={{color:"#009688"}} />
                                                </ListItemIcon>
                                                <ListItemText primary="Verified" />
                                            </ListItem>
                                        </List>
                                        <Divider  style={{margin:"20px 0"}}/>
                                        <Typography variant="h6" component="h2" >
                                            Harry has provided
                                        </Typography>
                                        <List  aria-label="main mailbox folders" style={{marginBottom:20}}>
                                            <ListItem button style={{padding:0}}>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon style={{color:"#009688"}} />
                                                </ListItemIcon>
                                                <ListItemText primary="Government ID" />
                                            </ListItem>
                                            <ListItem button style={{padding:0}}>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon style={{color:"#009688"}} />
                                                </ListItemIcon>
                                                <ListItemText primary="Email address" />
                                            </ListItem>
                                            <ListItem button style={{padding:0}}>
                                                <ListItemIcon>
                                                    <CheckCircleOutlineIcon style={{color:"#5d9684"}} />
                                                </ListItemIcon>
                                                <ListItemText primary="Phone number" />
                                            </ListItem>
                                        </List>
                                    </div>

                                </div>
                            </Grid>
                            <Grid item md={7} >


                                <Typography variant="h4" component="h2" >
                                    Hi, I’m Harry
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Joined in 2018
                                </Typography>
                                <div className={classes.profileHead}></div>
                                <Typography variant="body1" gutterBottom>
                                    {catProfile[0].des}
                                </Typography>
                                <div className={classes.profileHead}></div>
                                <div className={classes.postContainer}>
                                    <Typography variant="h5" component="h1" >
                                        Harry's listings
                                    </Typography>
                                    <div className={classes.profileHead}></div>
                                    <Post data={postDataDog} discription={false} actions={false} grid={true} />
                                </div>
                                <Typography variant="h5" component="h1">
                                    Customer Review
                                </Typography>
                                <CustomerReview/>


                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

            </div>
            <Footer/>
        </>
    );
};

export default UserProfile;
