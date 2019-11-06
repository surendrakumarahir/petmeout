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

import PhotoGallary from "../components/sliders/PhotoGallary";
import CustomerReview from "../components/client/Review";
import Attributes from  "../components/catprofile/Attributes";
import {catProfile, postDataDog} from "../data";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
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
        maxWidth: 500,
    }

}));

const CategoryProfile = () => {
    let { id } = useParams();
    const classes = useStyles();
    return (
        <>
            <Header/>
            <div className='main'>

               <PhotoGallary data={catProfile[0].media}/>
                <Grid container >
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={4} >
                            <Grid item md={8} >
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Grid item md={9}  >
                                        <Typography variant="h4" component="h2" >
                                            { catProfile[0].name }
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            { catProfile[0].type }
                                        </Typography>
                                    </Grid>
                                    <Grid item md={3} className="catProfile-avatar" >
                                        <Avatar alt="Remy Sharp" src={catProfile[0].user.image} className={classes.bigAvatar} />
                                        <Typography variant="body2" component="h2" className={classes.userName} >
                                            { catProfile[0].user.name }
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <div className={classes.profileHead}></div>
                                <Attributes/>
                                <div className={classes.profileHead}></div>
                                <Typography variant="body1" gutterBottom>
                                    {catProfile[0].des}
                                </Typography>
                                <div className={classes.postContainer}>
                                    <Post data={postDataDog} />
                                </div>

                            </Grid>
                            <Grid item md={4}>
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

export default CategoryProfile;
