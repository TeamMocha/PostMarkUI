import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './About.css';

// Import Redux Store
import { resetStore } from "../../store/postmark";
const mapDispatchToProps = { resetStore };

const useStyles = makeStyles({
  cardRoot: {
    maxWidth: 400,
  },
  gridRoot: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
});

function About(props) {
  const classes = useStyles();

  return (
    <div id="appAbout" className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="aboutTitle">
            About
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/public/headshots/Matt_ravenmoore.jpg"
                title="Matt Ravenmore"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Matt Ravenmoore
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Greetings, my name is Matt Ravenmoore. I am a software designer with a background in theater, art, metal fabrication and design. That is to say i am an innovative and creative thinker and will find unique way of approaching a problem. I strive to learn 3- 5 new things every day, with an emphasis on skills both physical and mental
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/public/headshots/Jeremy_penning.jpg"
                title="Jeremy Penning"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Jeremy Penning
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/public/headshots/Jeremy_penning.jpg"
                title="Ander Oliver Martin"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ander Oliver Martin
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Experienced Creative Specialist with a demonstrated history of working in the Fine Art industry. Skilled in Photography, Art Education, Barista, Concept Development, and Art. Strong marketing professional with a Bachelor's Degree focused in Fine/Studio Arts, General from Willem De Kooning Academy of Visual Arts.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/public/headshots/Jeremy_penning.jpg"
                title="Sowmya Billakanti"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Sowmya Billakanti
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                My name is Sowmya Billakanti, I am from India. I'm relatively new to the US, having come here just a year months ago. I enjoy pencil sketching, outdoor summer games and visiting new places like Paris, Rome, Hawaii, Santorini and many more in my list. While I wouldn't say I love cooking, I do enjoy it to an extent. I am looking forward to finishing the Bootcamp and landing a good role at a Tech company.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
