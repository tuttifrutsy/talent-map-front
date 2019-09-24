/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import mapa from '../images/mapa.png';
import SearchBar from '../components/SearchBar'; 
import Grid from "@material-ui/core/Grid";
import '../App.css'

const Mapi = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid container>
          <div className="mapi">
          <img src={mapa} alt="mapa" className="map"/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Mapi;