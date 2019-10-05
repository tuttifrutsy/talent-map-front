import React, { useState } from "react";
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

export default function ItemsList({ stagesData }) {
  const classes = useStyles();
  const [stages, setStages] = useState(stagesData);

  const filterLandIronHandler = () =>{
    const stagesFilter = [...stagesData];
    let filteredI = stagesFilter.filter((stage)=> {
      return stage.land === "IronLand";
    });
    setStages([...filteredI])
  }

  const filterLandCreaHandler = () => {
    const stagesFilter = [...stagesData];
    let filteredC = stagesFilter.filter(stage => {
      return stage.land === "CreativeLand";
    });
    setStages([...filteredC]);
  };

  const filterLandAgroHandler = () => {
    const stagesFilter = [...stagesData];
    let filteredA = stagesFilter.filter(stage => {
      return stage.land === "AgroLand";
    });
    setStages([...filteredA]);
  };

   const filterGamerHandler = () => {
     const stagesFilter = [...stagesData];
     let filteredG = stagesFilter.filter(stage => {
       return stage.land === "GamerLand";
     });
     setStages([...filteredG]);
   };

    const filterDevHandler = () => {
      const stagesFilter = [...stagesData];
      let filteredD = stagesFilter.filter(stage => {
        return stage.land === "DevLand";
      });
      setStages([...filteredD]);
    };

     const filterBlockHandler = () => {
       const stagesFilter = [...stagesData];
       let filteredB = stagesFilter.filter(stage => {
         return stage.land === "BlockchainLand";
       });
       setStages([...filteredB]);
     };

      const filterBsHandler = () => {
        const stagesFilter = [...stagesData];
        let filteredBs = stagesFilter.filter(stage => {
          return stage.land === "BusinessLand";
        });
        setStages([...filteredBs]);
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
        {stages
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
                  <Avatar alt={`${e.name}`} src={`${e.image}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${e.name}`}
                  secondary={
                    <React.Fragment>
                      <Link to={`/stages/${e._id}`}>
                        <Typography
                          component="span"
                          variant="body2"
                          className={classes.inline}
                        >
                          {e.name}
                        </Typography>
                      </Link>
                      <span style={{ color: "white" }}>
                        — I'll be in your neighborhood doing errands this…
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
