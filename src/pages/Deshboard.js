import React from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import { Header , Footer } from "../layouts"
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import loginLeftImage from "../assets/login-left.jpg"
import  SignIn from  "../components/SignIn";

import Container from '@material-ui/core/Container';
import post from  "../data/post";

import Post from  "../components/deshboard/Post";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${loginLeftImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    cardGrid: {
        marginTop:"40px",
    }

}));

const Deshboard = () => {
    const classes = useStyles();
    let { id } = useParams();

    return (
        <>
            <Header/>
                <div className='main'>
                    <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={7} className={classes.image} />
                         <SignIn/>
                     </Grid>
                    <Container className={classes.cardGrid} maxWidth="lg">

                        <Grid container spacing={4}>
                            <Grid  item md={8} >
                                <Post data={post}/>
                            </Grid>
                            <Grid item md={4} >
                                <h1>filters</h1>
                            </Grid>
                        </Grid>


                    </Container>
                </div>
            <Footer/>
        </>
    );
};

export default Deshboard;
