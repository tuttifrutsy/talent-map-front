import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import "../App.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "600vh",
    backgroundColor: "#000415",
    justifyContent: "flex-start",
    flexFlow: "column",
    color: "white",
    padding: "2%"
  },
  fullList: {
    width: "auto"
  }
});

export default function Swipeable() {
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <Link to="/user">
          <ListItem button>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Usuario" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/lands">
          <ListItem button>
            <ListItemIcon>
              <ImageSearchIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Lands" />
          </ListItem>
        </Link>
        <Link to="/stages">
          <ListItem button>
            <ListItemIcon>
              <CropOriginalIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Stages" />
          </ListItem>
        </Link>
        <Link to="/speakers">
          <ListItem button>
            <ListItemIcon>
              <RecordVoiceOverIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Speakers" />
          </ListItem>
        </Link>
        <Link to="/events">
          <ListItem button>
            <ListItemIcon>
              <RecentActorsIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
        </Link>
        <Link to="/settings">
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: "#23ca0f" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <MenuIcon className="icon" />
      </Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {sideList("right")}
      </SwipeableDrawer>
    </div>
  );
}
