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

function Convert(props) {
  const classes = useStyles();

  return (
    <div id="appConvert" className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="convertTitle">
            Convert
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);
