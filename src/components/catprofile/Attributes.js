import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Attributes() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
           <ListItemText primary="AKC Breed Popularity" secondary="Ranks 190 of 191" />
           <ListItemText primary="Height" secondary="24-26 inches (male), 22-24 inches " />
           <ListItemText primary="Weight" secondary="55-90 pounds (male), 50-65 pounds " />
           <ListItemText primary="Life Expectancy" secondary="12-15 years" />
           <ListItemText primary="Group" secondary=" Working Group  " />
        </List>
    );
}
