import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from './views/Home';
import AuthHome from "./views/AuthHome";
import Mapi from "./views/Mapi";
import Navbar from "./components/Navbar";
import ViewDetail from './views/ViewDetail';
import SpeakerDetail from './views/SpeakerDetail';
import AlignItemsList from './views/AllContet';

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AuthHome} />
        <Route path="/mapi" component={Mapi} />
        <Route path="/detail" component={ViewDetail} />
        <Route path="/speaker" component={SpeakerDetail} />
        <Route path="/speakers" component={AlignItemsList} />
        <Route path="/lands" component={AlignItemsList} />
        <Route path="/events" component={AlignItemsList}/>
      </Switch>
    </div>
  );
}

export default App;
