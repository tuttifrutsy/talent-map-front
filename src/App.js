import React, {Component} from "react";
import "./App.css";
import {
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import{ TodoProvider} from './context/allDataT.js'
import Home from "./views/Home";
import AuthHome from "./views/AuthHome";
import Mapi from "./land/Mapi";
import Navbar from "./components/Navbar";
import LandDetail from "./land/LandDetail";
import SpeakerViewDetail from "./speakers/SpeakerViewDetail";
import AllSpeakers from "./speakers/AllSpeakers";
import AllStages from './stages/AllStages';
import ZoneDetail from "./stages/ZoneDetail";
import AllEvents from "./events/AllEvents";
import InfoEvent from './events/InfoEvent';
import EditEvent from './events/EditEvent';



class App extends Component {
  render() {
    return (
      <TodoProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/login" component={withRouter(AuthHome)} />
          <Route exact path="/lands" component={withRouter(Mapi)} />
          <Route exact path="/lands/:id" component={withRouter(LandDetail)} />
          <Route exact path="/stages" component={withRouter(AllStages)} />
          <Route exact path="/stages/:id" component={withRouter(ZoneDetail)} />
          <Route exact path="/speakers" component={withRouter(AllSpeakers)} />
          <Route
            exact
            path="/speakers/:id"
            component={withRouter(SpeakerViewDetail)}
          />
          <Route exact path="/events" component={withRouter(AllEvents)} />
          <Route exact path="/events/:id" component={withRouter(InfoEvent)} />
          <Route exact path="/events/edit/:id" component={withRouter(EditEvent)} />
        </Switch>
      </div>
      </TodoProvider>
    );
  }
}
export default App;
