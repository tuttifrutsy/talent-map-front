import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  fade,
  Theme,
  makeStyles
} from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },

    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block"
      }
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto"
      }
    },
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    inputRoot: {
      color: "inherit"
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 120,
        "&:focus": {
          width: 200
        }
      }
    }
  })
);

const SearchBar = ({dataSections}) => {
  const misDatos = dataSections;
  
  let landsName = misDatos.map(land => {
    return land.title;
  });

  let events = [];
   misDatos.map((land, i)=> {
    events.push(land.events)
  })

  let eventsNames = events.map((event, i)=>{
    return event.title
  })
  
  let speakers = misDatos.map((speaker, i) => {
    return speaker.speakers;
  });

  let stages = misDatos.map((stage, i) => {
    return stage.stages;
  });

  

//   let allNames =[]; 

//  const getMeTheNames = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let childArray = arr[i];
//     for (let j = 0; j < childArray.length; j++) {
//       allNames.push({ [j]: childArray[j].title });
//     }
//   }
//  }

//  getMeTheNames(landEvents); 
 //getMeTheNames(landSpeakers);
//  for(let i = 0; i < landEvents.length; i++){
//    let childArray = landEvents[i];
//    for(let j = 0; j < childArray.length; j++){
//      landEventsNames.push( {[j]:childArray[j].title})
//    }
//  }



  console.log(events, "nada");
  const classes = useStyles();
  const [search, setSearch] = useState("");
  //Options
  //[0] -> Events
  //[1] -> Lands
  //[2] -> Speakers
  //[3] -> Sponsor
  //[4] -> Stages
  const getSearch = e => {
    setSearch(e.target.value);
  };
  const getAllData = () => {
    fetch("url", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        search: search,
        searchIn: ["0", "1", "2"]
      }
    })
      .then(resp => {
        resp.json().then(results => {
          console.log(results);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  const options = [
    [
      {
        name: "Freddy Vega",
        empresa: "Platzi",
        cargo: "CEO"
      }
    ]
  ];
 
  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={getSearch}
        />
        <button onClick={getAllData}>Search</button>
      </div>
     <li>mhkh</li>
    </div>
  );
};

export default SearchBar;
