import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";
const useStyles = makeStyles(theme => ({
  icon: {
    color: "#23ca0f"
  },
  root:{
    position:"absolute",
    left: "38%"
  }
}));

export default function ButtonBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <BottomNavigation
        showLabels
        className={classes.root}
        style={{ background: "none" }}
      >
        <Tooltip title="Speakers">
          <Link to="/speakers">
            <BottomNavigationAction
              label="Speakers"
              className={classes.icon}
              icon={<RecordVoiceOverIcon className={classes.icon} />}
            />
          </Link>
        </Tooltip>
        <Link to="/stages">
          <Tooltip title="Stages">
            <BottomNavigationAction
              label="Stages"
              className={classes.icon}
              icon={<CropOriginalIcon className={classes.icon} />}
            />
          </Tooltip>
        </Link>
        <Tooltip title="Lands">
          <Link to="/lands">
            <BottomNavigationAction
              className={classes.icon}
              label="Lands"
              icon={<ImageSearchIcon className={classes.icon} />}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Events">
          <Link to="/events">
            <BottomNavigationAction
              className={classes.icon}
              label="Events"
              icon={<RecentActorsIcon className={classes.icon} />}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Search">
          <Link to="/search">
            <BottomNavigationAction
              className={classes.icon}
              label="Search"
              icon={<SearchIcon className={classes.icon} />}
            />
          </Link>
        </Tooltip>
      </BottomNavigation>
    </React.Fragment>
  );
}
