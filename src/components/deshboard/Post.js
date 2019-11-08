import React from "react";

import  { Link } from  "react-router-dom";

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
    },
    link : {
       textDecoration: "none",
    },
}));

const PostCard = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card} key={props.key}>
            <Link to={`/category/${props.post.user.uId}`} className={classes.link} >
                <CardHeader
                    avatar={
                        <Avatar  alt="alt" src={props.post.user.profileImage} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={props.post.user.name}
                    subheader={props.post.createdAt}
                />
            </Link>
            <CardMedia
                className={classes.media}
                image={props.post.media[0].image}
                title="Paella dish"
            />
            {
                props.discription ?
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.post.content}
                        </Typography>
                    </CardContent>
                    : null
            }

            {
                props.actions?
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

                    : null
            }

        </Card>
        )

}
const Post = (props) => {


    return (
          <>
              {
                  props.grid ?
                      <Grid container spacing={4}>
                          {
                              props.data.map((post, index) => {
                                  return (
                                      <Grid item md={6} >
                                          <PostCard {...props} post={post} key={index} />
                                      </Grid>

                                  )
                              })
                          }
                      </Grid>
                      :
                      props.data.map((post, index) => {
                          return (
                              <PostCard {...props} post={post} key={index} />
                           )
                      })
              }


          </>

    );
};

PostCard.defaultProps = {
    discription:true,
    actions: true,
    grid: false
};
export default Post;
