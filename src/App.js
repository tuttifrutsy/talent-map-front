import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Home from './views/Home';
import AuthHome from "./views/AuthHome";
import Mapi from "./views/Mapi";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={AuthHome} />
        <Route path="/mapi"  component={Mapi} />
       </Switch>
    </div>
  );
}

export default App;
