import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import BtnLand from "./BtnLand";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Iconbtn from "../components/Iconbtn";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(4),
    color: "white",
    fontSize: "1em",
    textAlign: "center"
  },
  logo: {
    width: "50%",
    padding: theme.spacing(2)
  },
  papper: {
    display: "flex",
    backgroundColor: "#293149",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const PopperLand = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <BtnLand click={handleClick} url={props.url} title={props.title} />
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement="top"
        disablePortal={false}
        modifiers={{
          flip: {
            enabled: false
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: "undefined"
          },
          arrow: {
            enabled: true
          }
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.papper}>
              <img src={props.url} alt="logo" className={classes.logo} />
              <Link to={`/lands/${props.id}`}>
                <Iconbtn />
              </Link>
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
};

export default PopperLand;
