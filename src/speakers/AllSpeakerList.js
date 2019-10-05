import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import EcoIcon from "@material-ui/icons/Eco";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import CodeIcon from "@material-ui/icons/Code";
const useStyles = makeStyles(theme => ({
  icon: {
    color: "#23ca0f"
  }
}));

export default function ItemsList({ speakersData }) {
  const classes = useStyles();
   const [speakers, setSpeakers] = useState(speakersData);

    const filterLandIronHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredI = speakersFilter.filter(speaker => {
        return speaker.land === "IronLand";
      });
      setSpeakers([...filteredI]);
    };

    const filterLandCreaHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredC = speakersFilter.filter(speaker => {
        return speaker.land === "CreativeLand";
      });
      setSpeakers([...filteredC]);
    };

    const filterLandAgroHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredA = speakersFilter.filter(speaker => {
        return speaker.land === "AgroLand";
      });
      setSpeakers([...filteredA]);
    };

    const filterGamerHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredG = speakersFilter.filter(speaker => {
        return speaker.land === "GamerLand";
      });
      setSpeakers([...filteredG]);
    };

    const filterDevHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredD = speakersFilter.filter(speaker => {
        return speaker.land === "DevLand";
      });
      setSpeakers([...filteredD]);
    };

    const filterBlockHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredB = speakersFilter.filter(speaker => {
        return speaker.land === "BlockchainLand";
      });
      setSpeakers([...filteredB]);
    };

    const filterBsHandler = () => {
      const speakersFilter = [...speakersData];
      let filteredBs = speakersFilter.filter(speaker => {
        return speaker.land === "BusinessLand";
      });
      setSpeakers([...filteredBs]);
    };

  return (
    <React.Fragment>
      <BottomNavigation
        showLabels
        className={classes.root}
        style={{ background: "none" }}
      >
        <BottomNavigationAction
          onClick={filterLandIronHandler}
          label="Iron Land"
          className={classes.icon}
          icon={<FitnessCenterIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          onClick={filterLandCreaHandler}
          label="Creative Land"
          className={classes.icon}
          icon={<StarHalfIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Agro Land"
          onClick={filterLandAgroHandler}
          icon={<EcoIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Gamer Land"
          icon={<VideogameAssetIcon className={classes.icon} />}
          onClick={filterGamerHandler}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Developer Land"
          icon={<CodeIcon className={classes.icon} />}
          onClick={filterDevHandler}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Blockchain Land"
          icon={<MonetizationOnIcon className={classes.icon} />}
          onClick={filterBlockHandler}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Bussines Land"
          icon={<BusinessCenterIcon className={classes.icon} />}
          onClick={filterBsHandler}
        />
      </BottomNavigation>
      <List className={classes.root}>
        {speakers
          .sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            return 0;
          })
          .map((e, i) => {
            return (
              <ListItem key={i} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={`${e.name}`} src={`${e.avatar}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${e.name}`}
                  secondary={
                    <React.Fragment>
                      <Link to={`/speakers/${e._id}`}>
                        <Typography
                          component="span"
                          variant="body2"
                          style={{ color: "#000411" }}
                        >
                          {e.name}
                        </Typography>
                      </Link>
                      <span style={{ color: "white", paddingLeft: "2%" }}>
                        {e.occupation}
                      </span>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
      </List>
    </React.Fragment>
  );
}
