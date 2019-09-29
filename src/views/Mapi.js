/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Mapa from "../components/mapa";
import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import Switches from "../components/switch";

class Mapi extends Component {
  state = {
    sections: []
  };

  componentDidMount() {
    fetch("https://imap-talent.herokuapp.com/lands")
      .then(res => res.json())
      .then(data => {
        this.setState({
          sections: data.sections
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const dataSections = [...this.state.sections];

    return (
      <div>
        {dataSections.map((dato, i) => {
          return <li key={i}>{dato.title}</li>;
        })}
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
      </div>
    );
  }
}

export default Mapi;
