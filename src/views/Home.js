import React from "react";
import logo from "../images/logo.png";
import "../App.css";
import jaliscoLogo from "../images/jalisco-logo.png";
import talentLogo from "../images/talent-logo.png";
import Btn from "../components/btn";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App-header">
      <div className="home">
        <img className="logos" src={jaliscoLogo} alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img className="logos" src={talentLogo} alt="logo" />
      </div>
      <Link to="/login">
        <Btn>Login</Btn>
      </Link>
      
    </div>
  );
}

export default Home;
