import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import RatingStar from "./Rating";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function Review() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="https://a0.muscache.com/im/pictures/user/b86cb7c4-21cd-4e70-95c0-e05d1500c0d8.jpg?aki_policy=profile_x_medium" />
                </ListItemAvatar>
                <ListItemText
                    primary="Nice Pet ?"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Ali Connors

                                <RatingStar />
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}


                        </React.Fragment>
                    }
                />

            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="https://a0.muscache.com/im/pictures/user/893a0804-ad59-4906-837b-a2b6c0962747.jpg?aki_policy=profile_x_medium" />
                </ListItemAvatar>
                <ListItemText
                    primary="Facts You Need to Know about Pets"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                to Scott, Alex, Jennifer
                                <RatingStar />
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="https://a0.muscache.com/im/pictures/user/cb018ae8-bfaf-447f-8f96-8f68530c68ef.jpg?aki_policy=profile_x_medium" />
                </ListItemAvatar>
                <ListItemText
                    primary="Awesome Pet"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                Sandra Adams
                                <RatingStar />
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}
