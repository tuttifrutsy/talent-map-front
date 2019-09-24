/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import agroland from '../images/lands/tl2020-home-land-agro-B-210x310.png';
import blockLand from '../images/lands/tl2020-home-land-blockchain-b-210x310.png';
import busLand from '../images/lands/tl2020-home-land-business-b-210x310.png';
import creLand from '../images/lands/tl2020-home-land-creative-b-210x310.png';
import devLand from '../images/lands/tl2020-home-land-developer-b-210x310.png';
import gamLand from '../images/lands/tl2020-home-land-gamer-b-210x310.png';
import ironLand from '../images/lands/tl2020-home-land-iron-b-210x310.png';

const lands = [
  {
    url: agroland,
    title: "Agro Land",
    width: "50%"
  },
  {
    url: blockLand,
    title: "Block Land",
    width: "50%"
  },
  {
    url: busLand,
    title: "Business Land",
    width: "50%"
  },
  {
    url: creLand,
    title: "Creative Land",
    width: "50%",
  },
  {
    url: devLand,
    title: "Dev Land",
    width: "50%"
  },
  {
    url: gamLand,
    title: "Gamer Land",
    width: "50%"
  },
  {
    url: ironLand,
    title: "Iron Land",
    width: "50%"
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 100,
      width: "55%",
      margin: "5%"
    },
    land: {
      position: "relative",
      height: 60,
      margin: "6%",
      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 60
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15
        },
        "& $imageMarked": {
          opacity: 0
        },
        "& $imageTitle": {
          border: "4px solid #3daf29"
        }
      }
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center 40%"
    },
    imageBackdrop: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: "#020247",
      opacity: 0.4,
      transition: theme.transitions.create("opacity")
    },
    imageTitle: {
      position: "relative",
      padding: 0
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity")
    }
  })
);

function Lands() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {lands.map(land => (
        <ButtonBase
          focusRipple
          key={land.title}
          className={classes.land}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: land.width
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${land.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
          
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
export default Lands;
