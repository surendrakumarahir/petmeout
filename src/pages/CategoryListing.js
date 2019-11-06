import React, {useEffect, useState} from "react";
import  { Link, useParams } from  'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Header, Footer} from "../layouts";
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import  categoryList  from '../data/categorylisting';



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

const CategoryListing = () => {
    const classes = useStyles();
    let { id } = useParams();
    const [categoryData, setCategoryData] = useState([])
    useEffect(() => {
        //console.log(id);

        if(id) {
            let postFilter = categoryList.filter((item)=> {
                return item.cat === id
            })
            setCategoryData(postFilter)
        } else {
            setCategoryData(categoryList)
        }
        // console.log(postFilter);

    },[])
    //console.log('working');
    // console.log(postData);
    return (
        <>
            <Header/>
            <div className='main'>

                <Grid container >
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={4} className="category">
                            {categoryData.map(tile => (

                                <Grid item md={3} key={tile.img}>
                                    <Link to={`/category/${tile.petId}`}>
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
};

export default CategoryListing;










