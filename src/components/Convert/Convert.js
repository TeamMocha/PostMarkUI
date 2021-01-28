import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Convert.css';
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

let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non lectus et enim vehicula tincidunt in id justo. Aliquam nunc mauris, porttitor at vulputate ac, cursus non nibh. Morbi ut tincidunt libero, ut tincidunt mauris. Aenean pulvinar dolor sed lacus pulvinar, vel volutpat orci tristique. Maecenas eget tellus quis odio tincidunt pretium eu auctor nisi. Curabitur quis ipsum nibh. Sed vel condimentum libero. Nam cursus pharetra nunc, quis euismod metus condimentum vel. Ut bibendum nulla et ultricies rhoncus. Nulla sollicitudin convallis sem, in auctor sem facilisis sed. Phasellus auctor convallis diam et tincidunt. Nam libero libero, interdum et consectetur vel, dapibus id purus. Morbi mattis metus sed porta consequat. Proin tempor at felis nec consectetur. In consequat nisl in neque euismod volutpat. Mauris lacinia urna volutpat ipsum vulputate elementum. Mauris vestibulum ipsum sem, ut fringilla erat condimentum a. Integer sed aliquam mauris. Ut risus dui, faucibus sit amet venenatis nec, consequat non ipsum. Curabitur placerat neque non metus sodales, eu placerat urna hendrerit. In porta tincidunt varius. Sed condimentum, ante eu euismod imperdiet, diam felis consequat leo, vel iaculis lectus quam et neque. Integer egestas congue condimentum. Sed semper orci neque, vitae ullamcorper nibh posuere vitae. Integer sodales ipsum nec leo scelerisque, non semper tellus fermentum. Aenean ut tincidunt tellus. Nunc efficitur magna velit, ut viverra mi placerat ut. Proin quis feugiat magna. Morbi ac neque dolor. Aliquam porttitor euismod nisi eget porttitor. Integer mollis venenatis lorem. Pellentesque et pellentesque augue, quis fringilla nulla. Maecenas augue enim, placerat eu odio vitae, suscipit fermentum urna. Nulla facilisi. Mauris id nisi at sapien pretium dictum a at turpis. In nec nunc cursus, rutrum urna non, malesuada nisl. Suspendisse et semper felis, non faucibus augue. Donec posuere interdum ligula, sit amet sagittis augue consectetur a. Etiam tempor sodales sem, a varius massa iaculis sit amet. Morbi suscipit, quam in tincidunt accumsan, velit magna accumsan lectus, sit amet lobortis mi dui ac lacus. Pellentesque auctor condimentum ullamcorper. `;

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
        height="100%"
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="homeTitle">
            POSTMARK
          </Typography>
        </Grid>
        <Grid item container
          xs={12} sm={5}
          direction="row"
          justify="flex-start"
          alignitems="stretch"
          spacing={2}
          height="100%"
        >
          <Grid item xs={12}>
            <Typography paragraph={true} align='center' component="h2" className="sectionTitle">
              POSTMARK COLLECTION
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ height: '100%' }}>
            <FormControl width={1} style={{ height: '100%' }}>
              <TextField
              id="postCollectBigField"
              label="Paste your Postmark collection here..."
              multiline
              variant="filled"
              width={1}
              />
              <FormHelperText id="my-helper-text">Information you enter into this form is never stored.</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container xs={12} sm={2} direction="row">
          <Grid item align="center" justify="center">
            <Typography paragraph={true} component="h2" className="sectionTitle">
              <IconButton aria-label="delete" className={classes.margin}>
                <SendIcon fontSize="large" />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography paragraph={true} align='center' component="h2" className="sectionTitle">
            MARKDOWN
          </Typography>
          { lorem }
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
