/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Mapa from "./mapa";
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
    fetch("https://imap-talent.herokuapp.com/api/lands")
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
          <div>           
              {/* <div className="searches">
                <SearchBar dataSections={dataSections} />
                <Switches dataSections={dataSections} />
              </div> */}
              <Mapa dataSections={dataSections} />
          </div>
        )} 
      </div>
    );
  }
}

export default Mapi;
