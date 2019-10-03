/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Mapa from "../components/mapa";
import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import Switches from "../components/switch";
import Loading from '../components/Loading';

class Mapi extends Component {
  state = {
    loading: true,
    sections: []
  };

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/lands")
      .then(res => res.json())
      .then(data => {
        this.setState({
          sections: data.sections,
          loading: false
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const dataSections = [...this.state.sections];
    return (
      <div>
        {this.state.loading || !this.state.sections ? (
          <Loading/>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className="searches">
                <SearchBar dataSections={dataSections} />
                <Switches dataSections={dataSections} />
              </div>
            </Grid>
            <Grid item xs={9}>
              <Mapa dataSections={dataSections} />
            </Grid>
          </Grid>
        )}
      </div>
    );
  }
}

export default Mapi;
