import React from "react";

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const useStyles = makeStyles(theme => ({
   card: {
        marginBottom: "40px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },

    commentIcons: {
        textAlign: "center",
    }

}));

const Post = (props) => {
    const classes = useStyles();
    return (
          <>

            {
                props.data.map((post, index) => {
                    return (

                        <Card className={classes.card} key={index}>
                            <CardHeader
                                avatar={
                                    <Avatar  alt="alt" src={post.user.profileImage} />
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={post.user.name}
                                subheader={post.createdAt}
                            />
                            <CardMedia
                                className={classes.media}
                                image={post.media[0].image}
                                title="Paella dish"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.content}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Grid container spacing={2}
                                      direction="row"
                                      justify="center"
                                      alignItems="center" >
                                    <Grid  item md={6} className={classes.commentIcons} >
                                        <IconButton aria-label="like">
                                            <ThumbUpIcon/>
                                        </IconButton>
                                    </Grid>
                                    <Grid  item md={6} className={classes.commentIcons}>
                                        <IconButton aria-label="comment">
                                            <ChatBubbleOutlineIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>

                            </CardActions>
                        </Card>


                    )
                })
            }

         </>

    );
};

export default Post;
