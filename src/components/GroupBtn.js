import React from 'react';
import '../App.css';
import agroland from "../images/lands/tl2020-home-land-agro-B-210x310.png";
import blockLand from "../images/lands/tl2020-home-land-blockchain-b-210x310.png";
import busLand from "../images/lands/tl2020-home-land-business-b-210x310.png";
import creLand from "../images/lands/tl2020-home-land-creative-b-210x310.png";
import devLand from "../images/lands/tl2020-home-land-developer-b-210x310.png";
import gamLand from "../images/lands/tl2020-home-land-gamer-b-210x310.png";
import ironLand from "../images/lands/land-iron.png";

import PopperLand from "./Popper";

const GroupBtn = () => {
  return (
    <div >
      <div className="Ironbtn">
        <PopperLand  title="Ironland" url={ironLand} />
      </div>
      <div className="agrobtn">
        <PopperLand title="Agroland" url={agroland}/>
      </div>
      <div className="blkbtn">
        <PopperLand title="Blockchainland" url={blockLand}/>
      </div>
      <div className="creabtn">
        <PopperLand title="Creativeland" url={creLand}/>
      </div>
      <div className="devbtn">
        <PopperLand title="Developer" url={devLand}/>
      </div>
      <div className="gambtn">
        <PopperLand title="Gamerland" url={gamLand}/>
      </div>
      <div className="bsnbtn">
        <PopperLand title="Businessland" url={busLand}/>
      </div>
      <div className="wbtn">
        <PopperLand title="Talent Woman" url={ironLand}/>
      </div>
      <div className="hbtn">
        <PopperLand title="Talen Hackathon" url={ironLand}/>
      </div>
      <div className="mbtn">
        <PopperLand title="Talent Marketplace" url={ironLand}/>
      </div>
      <div className="jbtn">
        <PopperLand title="Talent Jobs" url={ironLand}/>
      </div>
      <div className="ebtn">
        <PopperLand title="Talent Education" url={ironLand}/>
      </div>
      <div className="sbtn">
        <PopperLand title="Superpoderes" url={ironLand}/>
      </div>
      <div className="cbtn">
        <PopperLand title="Ciudad de los Niños" url={ironLand}/>
      </div>
      <div className="cbtn">
        <PopperLand title="Ciudad de los Niños" url={ironLand}/>
      </div>
      <div className="rbtn">
        <PopperLand title="Registro" url={ironLand}/>
      </div>
      <div className="rlbtn">
        <PopperLand title="Recrealand" url={ironLand}/>
      </div>
      <div className="mnbtn">
        <PopperLand title="Main Stage" />
      </div>
      <div className="batlebtn">
        <PopperLand title="Batle Arena" />
      </div>
      <div className="smartgbtn">
        <PopperLand title="Smart Games" />
      </div>
      <div className="colliseumbtn">
        <PopperLand title="Smart Colliseum" />
      </div>
      <div className="makerbtn">
        <PopperLand title="Feria Maker" />
      </div>
      <div className="dronebtn">
        <PopperLand title="Drone School"/>
      </div>
      <div className="gardenbtn">
        <PopperLand title="Startup Garden" />
      </div>
    </div>
  );
}

export default GroupBtn;