import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Nav from '../Nav/Nav';
import './Header.css';
// Import Redux Store
import { resetStore } from "../../store/postmark";
const mapDispatchToProps = { resetStore };

const useStyles = makeStyles((theme) => ({
  appHeader: {
    flexGrow: 1,
    width: '100%',
    position: 'sticky',
    top: '0px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <AppBar color="primary" className={classes.appHeader} id="appHeader">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h1" className="headerTitle">
          POSTMARK
        </Typography>
        <Nav />
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => ({
  postmark: state.postmark,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
