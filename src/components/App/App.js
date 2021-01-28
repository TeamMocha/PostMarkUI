import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Home from '../Home/Home';
import './App.css';

function App() {
  return (
    <Container disableGutters={true}>
      <Paper elevation={10} className="appWrapper">
        <Grid container direction="row" justify="space-evenly" alignitems="stretch">
          <Grid container item xs={12} className="MuiAppBar-positionSticky" style={{ zIndex: 1100 }}>
            <Header />
          </Grid>
          <Grid container item xs={12}>
            <Home />
          </Grid>
          <Grid container item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
