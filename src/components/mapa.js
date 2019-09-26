import React from 'react';
import GroupBtn from '../components/GroupBtn';
import mapa from '../images/t-map.png'
import '../App.css';


const Mapa = () => {
  return (
    <div className="map">
         <img src={mapa} alt="mapa" className="mapr" />   
        <GroupBtn />
        

    </div>
  );
};

export default Mapa;

