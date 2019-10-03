import React from "react";
import logo from "../images/logo.png";
import "../App.css";


const Loading = () => {
  return (
    <div className="App-Loading">
      <div className="home">
        <img src={logo} className="App-logo-loading" alt="logo" />
      </div>
      <p> Ya casi ...</p>
    </div>
  );
};

export default Loading;
