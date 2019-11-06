import React from  'react';

import {Container, makeStyles, Typography} from "@material-ui/core";
import { Header, Footer } from  '../layouts'
import UserMeta from  "../components/user/UserMeta";


const useStyles = makeStyles(theme => ({
    root: {

   }
}));
const User = () => {

    return (
        <>
            {/*<Header/>*/}
            <Container fixed >
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
            </Container>
            <UserMeta/>
            <Footer/>
        </>
    )
}

export  default  User;
