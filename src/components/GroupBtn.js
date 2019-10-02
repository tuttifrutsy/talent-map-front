import React from 'react';
import '../App.css';

import ironLand from "../images/lands/land-iron.png";
import PopperLand from "./Popper";

const GroupBtn = (props) => {
  const sections = props.sections;
 
  let landsName = sections.map((section) =>{
    return section.title
  });

  let landsImg = sections.map(section => {
    return section.logoUrl;
  });
  
  let landsId = sections.map((section)=>{
    return section._id
  });

  console.log(landsName)

  return (
    <div >
      <div className="Ironbtn">
        <PopperLand
          id={landsId[8]}
          title={landsName[8]}
          url={`${landsImg[8]}`}
        />
      </div>
      <div className="agrobtn">
        <PopperLand
          id={landsId[1]}
          title={landsName[1]}
          url={`${landsImg[1]}`}
        />
      </div>
      <div className="blkbtn">
        <PopperLand
          id={landsId[5]}
          title={landsName[5]}
          url={`${landsImg[5]}`}
        />
      </div>
      <div className="devbtn">
        <PopperLand
          id={landsId[0]}
          title={landsName[0]}
          url={`${landsImg[0]}`}
        />
      </div>
      <div className="gambtn">
        <PopperLand
          id={landsId[6]}
          title={landsName[6]}
          url={`${landsImg[6]}`}
        />
      </div>
      <div className="bsnbtn">
        <PopperLand
          id={landsId[9]}
          title={landsName[9]}
          url={`${landsImg[9]}`}
        />
      </div>
      <div className="wbtn">
        <PopperLand
          id={landsId[12]}
          title={landsName[12]}
          url={`${landsImg[12]}`}
        />
      </div>
      <div className="hbtn">
        <PopperLand
          id={landsId[11]}
          title={landsName[11]}
          url={`${landsImg[11]}`}
        />
      </div>
      <div className="jbtn">
        <PopperLand
          id={landsId[4]}
          title={landsName[4]}
          url={`${landsImg[4]}`}
        />
      </div>
      <div className="mbtn">
        <PopperLand
          title="Talent Marketplace"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-talent-marketplace_ac5zdh.png"
          }
        />
      </div>
      <div className="ebtn">
        <PopperLand
          id={landsId[13]}
          title={landsName[13]}
          url={`${landsImg[13]}`}
        />
      </div>
      <div className="sbtn">
        <PopperLand
          id={landsId[2]}
          title={landsName[2]}
          url={`${landsImg[2]}`}
        />
      </div>

      <div className="cbtn">
        <PopperLand
          id={landsId[3]}
          title={landsName[3]}
          url={`${landsImg[3]}`}
        />
      </div>
      <div className="rbtn">
        <PopperLand
          title="Registro"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-registro_kuk2n4.png"
          }
        />
      </div>
      <div className="rlbtn">
        <PopperLand
          id={landsId[10]}
          title={landsName[10]}
          url={`${landsImg[10]}`}
        />
      </div>
      <div className="creabtn">
        <PopperLand
          id={landsId[7]}
          title={landsName[7]}
          url={`${landsImg[7]}`}
        />
      </div>
      <div className="mnbtn">
        <PopperLand
          id={"5d8eb64e1c6bb53fb7ccb3b1"}
          title="Main Stage"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-escenario-jalisco_nidzl9.png"
          }
        />
      </div>
      <div className="batlebtn">
        <PopperLand
          id={"5d8eb64e1c6bb53fb7ccb3d6"}
          title="Batle Arena"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034428/talent-map/tl2019-logo-battle-arena_zr4eoj.png"
          }
        />
      </div>
      <div className="smartgbtn">
        <PopperLand
          id={"5d8eb64e1c6bb53fb7ccb3d7"}
          title="Smart Games"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034428/talent-map/tl2019-logo-smart-games_fpwvd9.png"
          }
        />
      </div>
      <div className="colliseumbtn">
        <PopperLand
          id={"5d8eb64e1c6bb53fb7ccb3d5"}
          title="Smart Colliseum"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034428/talent-map/tl2019-logo-smart-coliseum_gqmf8f.png"
          }
        />
      </div>
      <div className="makerbtn">
        <PopperLand
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-feria-maker_vvqddk.png"
          }
          id={"5d8eb64e1c6bb53fb7ccb3c3"}
          title="Feria Maker"
        />
      </div>
      <div className="dronebtn">
        <PopperLand
          id={"5d8eb64e1c6bb53fb7ccb3b3"}
          title="Drone School"
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-drone-school_py602n.png"
          }
        />
      </div>
      <div className="gardenbtn">
        <PopperLand
          url={
            "https://res.cloudinary.com/di4cdoua8/image/upload/v1570034427/talent-map/tl2019-logo-startup-garden_trlmsd.png"
          }
          id={"5d8eb64e1c6bb53fb7ccb3d1"}
          title="Startup Garden"
        />
      </div>
    </div>
  );
}

export default GroupBtn;