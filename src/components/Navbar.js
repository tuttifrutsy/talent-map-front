import React from "react";
import {Link} from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import talentLogo from "../images/TL2019.png";
import Swipeable from './SideMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
     
    },
    title: {
      flexGrow: 1
    }
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar className="toolbar">
          <Link to="/">
            <img src={talentLogo} alt="logo" className="logoPrincipal" />
          </Link> 
            <Swipeable/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
