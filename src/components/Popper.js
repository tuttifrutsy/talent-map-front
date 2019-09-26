import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popper from "@material-ui/core/Popper";
import Typography from "@material-ui/core/Typography";
import BtnLand from './BtnLand';
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";
import Iconbtn from '../components/Iconbtn';


const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(4),
    color: "white",
    fontSize: "1em",
    textAlign: "center"
  },
  logo: {
    width: "30%",
    padding: theme.spacing(2)
  },
  papper: {
    display: "flex",
    backgroundColor: "#001355",
    justifyContent: "center",
    alignItems: "center"
  }
}));

 const PopperLand = (props) => {
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
              <Typography className={classes.typography}>
                {props.title}
              </Typography>
              <Iconbtn />
            </Paper>
          </Fade>
        )}
      </Popper>
    </div>
  );
}

export default PopperLand;