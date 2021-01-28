import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Home.css';
// Import Redux Store
import { resetStore } from "../../store/postmark";
const mapDispatchToProps = { resetStore };

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Home(props) {
  const classes = useStyles();

  return (
    <div id="appHome" className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="homeTitle">
            POSTMARK HOME
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph={true} align='center' component="h4" className="instructionsTitle">
            Instructions
          </Typography>
          <Typography paragraph={true} align='center' component="p" className="instructions">
            <List className={classes.root}>
              <ListItem>
                <ListItemText>
                  Step 1: Navigate to Convert page
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Step 2: Copy json
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Step 3: Click button
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Step 4: Download md file
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography paragraph={true} align='center' component="h4" className="pmTitle">
            About PostMark
          </Typography>
          <Typography paragraph={true} align='center' component="p" className="pmAbout">
            Auto-generating documentation for postman JSON collections: JSON files are huge and complex. Writing documentation is challenging. We want to solve this problem with our app.
            Why behind the project:
            1. Manual process is repetitive: Imagine you are having to write documentation for a JSON which has 1000 lines. You'd spend half the time in copy-pasting.
            2. It is also error prone: While copy-pasting such huge files, you will almost certainly make mistakes.
            3. Not a motivating or creative task!: Who likes to copy paste and write book manuals?
            We want to make JS programming a joy!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
