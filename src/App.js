import React, {Component} from "react";
import "./App.css";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import Home from "./views/Home";
import AuthHome from "./views/AuthHome";
import Mapi from "./views/Mapi";
import Navbar from "./components/Navbar";
import LandDetail from "./views/LandDetail";
import SpeakerDetail from "./views/SpeakerDetail";
import AlignItemsList from "./views/AllContet";
import ZoneDetail from "./views/ZoneDetail";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route  
           exact 
           path="/" 
           component={withRouter(Home)} />
          <Route 
            path="/login" 
            component={withRouter(AuthHome)} />
          <Route 
            exact 
            path="/lands" 
            component={withRouter(Mapi)} />
          <Route 
            exact path="/lands/:id" 
            component={withRouter(LandDetail)} />
          <Route 
            exact path="/stages" 
            component={withRouter(AlignItemsList)} />
          <Route 
            exact 
            path="/stages/:id" 
            component={withRouter(ZoneDetail)} />
          <Route 
            exact 
            path="/speakers" 
            component={withRouter(ZoneDetail)} />
          <Route
            exact
            path="/speakers/:id"
            component={withRouter(SpeakerDetail)}
          />
          <Route 
           exact 
           path="/speakers" 
           component={withRouter(ZoneDetail)} />
          <Route
            exact
            path="/events"
            component={withRouter(SpeakerDetail)}
          />
          <Route 
            exact 
            path="/speakers" 
            component={withRouter(ZoneDetail)} />
          <Route
            exact
            path="/events/:id"
            component={withRouter(SpeakerDetail)}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
