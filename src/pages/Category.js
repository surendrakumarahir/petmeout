import React from 'react';
import  { Link } from  'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {categoryData as tileData } from '../data';
import {Header, Footer} from "../layouts";
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {

    },
    cardGrid: {
        marginTop:"50px",
        marginBottom:"50px",
    },
    card: {
        maxWidth: 345,
    },
}));

export default function Category() {
    const classes = useStyles();

    return (
        <>
            <Header/>
            <div className='main'>

                <Grid container >
                    <Container className={classes.cardGrid} maxWidth="lg">
                     <Grid container spacing={4} className="category">
                        {tileData.map(tile => (

                            <Grid item md={3} key={tile.img}>
                                <Link to={`/category/listing/${tile.url}`}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={tile.title}
                                            height="250"
                                            image={tile.img}
                                            title={tile.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h5">
                                                {tile.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                                </Link>
                            </Grid>
                         ))}
                    </Grid>
                    </Container>
                </Grid>

            </div>
            <Footer/>
            </>

    );
}
