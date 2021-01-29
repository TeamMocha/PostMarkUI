import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Convert.css';

// Import Redux Store
import { post, setFieldState } from "../../store/postmark";
const mapDispatchToProps = { post, setFieldState };

const useStyles = makeStyles((theme) => ({
  gridRoot: {
    flexGrow: 1,
    padding: theme.spacing(4),
    height: '100%',
  },
  gridSub: {
    padding: theme.spacing(2),
    height: '100%',
  },
}));

function Convert(props) {
  const classes = useStyles();

  const updateStorePostman = (e) => {
    let collectionBodyUpdate = e.target.value
    props.setFieldState(collectionBodyUpdate);
  }

  const doPostmark = () => {
    // console.log(`props.collectionBody before calling post`, props.postmark);
    props.post(props.postmark.collectionBody);
  }

  // useEffect(() => {
  //   console.log(`The collectionBody was changed to: ${props.postmark.collectionBody} in the app.`);
  // }, [props.postmark.collectionBody])

  return (
    <div id="appConvert" className={classes.gridRoot}>
      <Grid container spacing={2}>

        <Grid item xs={12} textAlign='center' className={classes.gridSub}>
          <Typography paragraph={true} align='center' component="h2" className="homeTitle">
            POSTMARK
          </Typography>
        </Grid>

        {/* The main form element for the user to input a Postman Collection */}
        <Grid container alignItems="stretch">
          <Grid item xs={12} sm={5} className={classes.gridSub}>
            <Typography paragraph={true} align='center' component="h3" className="sectionTitle">
              Paste your Postman Collection
            </Typography>
            <Paper className={classes.paper} height="100%">
              <TextField
                id="postCollectJson"
                label="Postman Collection JSON"
                multiline
                variant="outlined"
                fullWidth={true}
                onBlur={(event) => updateStorePostman(event)}
              />
            </Paper>
          </Grid>

          {/* The send icon - Should fire the fetch using a POST */}
          <Grid item xs={12} sm={2} justify="center" alignItems='center' className={classes.gridSub}>
            <Typography paragraph={true} align='center' component="h3" className="sectionTitle">
              Click
            </Typography>
            <Typography align='center'>
              <IconButton aria-label="Do Conversion" className={classes.margin} onClick={() => doPostmark()}>
                <SendIcon fontSize="large" />
              </IconButton>
            </Typography>
          </Grid>

          {/* Another form element with the converted Markdown */}
          <Grid item xs={12} sm={5} className={classes.gridSub}>
            <Paper className={classes.paper} height="100%">
              <Typography paragraph={true} align='center' component="h3" className="sectionTitle">
                Get Formatted Markdown
              </Typography>
              <TextField
                id="markdownResult"
                label="Formatted Markdown"
                multiline
                rows={4}
                variant="outlined"
                fullWidth={true}
                value={props.postmark.responseMarkdown}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(Convert);
