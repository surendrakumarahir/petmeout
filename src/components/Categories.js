import React from 'react'
import { Link } from  'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { categoriesData } from '../data';



const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
      textDecoration: "none"
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTitle: {
        padding: '50px 0px',
    textAlign: "center"
  },
  cateogryBox: {
    marginBottom: "30px"
  },
  welcometopetmeout: {
    padding: "10px 0px",
  }

}));

const cards = [1, 2, 3];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Typography variant="h4" component="h4" className={classes.cardTitle}>
              WILD NATURE CHARITY & URGENT PROGRAM
              </Typography>
         <Grid container spacing={4} className={classes.cateogryBox}>
            {categoriesData.map((card, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} >
                <Card className={classes.card} component={Link} to="/category/1221">
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {card.title}
                    </Typography>
                    <Typography>
                     {card.discription}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" >
                      View
                    </Button>

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h4" component="h4" className={classes.cardTitle}>
              WELCOME TO PETMEOUT
        </Typography>
         <Typography variant="subtitle1"  className={classes.welcometopetmeout}>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </Typography>
        </Container>


      </main>

    </React.Fragment>
  );
}
