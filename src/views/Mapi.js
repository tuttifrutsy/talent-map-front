/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Mapa from '../components/mapa';
import SearchBar from '../components/SearchBar'; 
import Grid from "@material-ui/core/Grid";
import '../App.css'
import Switches from "../components/switch";

const Mapi = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div className="searches">
            <SearchBar />
            <Switches />
          </div>
        </Grid>
        <Grid item xs={9}>
          <Mapa />
        </Grid>
      </Grid>
    </div>
  );
};

export default Mapi;