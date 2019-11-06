import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Attributes() {
    const classes = useStyles();

    return (

            <List className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <ListItemText primary="AKC Breed Popularity" secondary="Ranks 190 of 191" />
                        <ListItemText primary="Height" secondary="24-26 inches (male), 22-24 inches " />
                    </Grid>
                    <Grid item xs={4}>
                        <ListItemText primary="Weight" secondary="55-90 pounds (male), 50-65 pounds " />
                        <ListItemText primary="Life Expectancy" secondary="12-15 years" />
                    </Grid>
                    <Grid item xs={4}>
                        <ListItemText primary="Gender" secondary="Male" />
                        <ListItemText primary="Color" secondary="12-15 years" />
                    </Grid>
                </Grid>
             </List>

    );
}
