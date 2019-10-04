import React from "react";
import GroupBtn from "./GroupBtn";
import mapa from "../images/t-map.png";
import "../App.css";

const Mapa = props => {
  const sections = props.dataSections;

  return (
    <div className="map">
      <img src={mapa} alt="mapa" className="mapr" />
      <GroupBtn sections={sections} />
    </div>
  );
};

export default Mapa;

