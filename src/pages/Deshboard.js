import React,  { useEffect, useState } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import { Header , Footer } from "../layouts"
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from  "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';

import loginLeftImage from "../assets/login-left.jpg"


import Container from '@material-ui/core/Container';
import post from  "../data/post";

import Post from  "../components/deshboard/Post";
import  SelectCat from "../components/deshboard/SelectCat";
import SliderDistance from "../components/deshboard/SliderDistance";
import SignUp from "../components/SignUp";
// import  SignIn from  "../components/SignIn";

const useStyles = makeStyles(theme => ({
    root: {
        height: '80vh',
    },
    image: {
        backgroundImage: `url(${loginLeftImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    cardGrid: {
        marginTop:"40px",
    },
    filterBox: {
        padding: theme.spacing(3, 2),
        background: "#fef7da",
    }

}));

const Deshboard = () => {
    const classes = useStyles();
    let { id } = useParams();
    const [postData, setPost] = useState([])
    useEffect(() => {
        //console.log(id);

          if(id) {
              let postFilter = post.filter((post)=> {
                  return post.cat === id
              })
              setPost(postFilter)
          } else {
              setPost(post)
          }
            // console.log(postFilter);

        },[])
    //console.log('working');
    // console.log(postData);

    return (
        <>
            <Header/>
                <div className='main'>
                   <Grid container component="main" className={classes.root}>
                        <CssBaseline />
                        <Grid item xs={false} sm={4} md={7} className={classes.image} />
                        <SignUp/>
                        {/*<SignIn/>*/}
                     </Grid>
                    <Container className={classes.cardGrid} maxWidth="lg">

                        <Grid container spacing={8}>
                            <Grid  item md={8} >
                                {
                                    postData && postData.length > 0 ? <Post data={postData} /> : null
                                }
                            </Grid>
                            <Grid item md={4} >
                                <Paper className={classes.filterBox}>
                                    <Typography variant="h4" component="h2" >
                                        Filters By Distance
                                    </Typography>
                                    <SliderDistance/>
                                </Paper>

                                <Paper className={classes.filterBox} style={{ marginTop: "40px"}}>
                                    <Typography variant="h4" component="h2" >
                                        Category Filter
                                    </Typography>
                                    <SelectCat/>
                                </Paper>


                            </Grid>
                        </Grid>


                    </Container>
                </div>
            <Footer/>
        </>
    );
};

export default Deshboard;
