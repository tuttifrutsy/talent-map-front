import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventNoteIcon from "@material-ui/icons/EventNote";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import EventIcon from '@material-ui/icons/Event';
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 800,
    margin: "auto"
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    color: "#23ca0f"
  }
}));

export default function EventsList({ eventsData }) {
  const classes = useStyles();
  const [events, setEvents] = useState(eventsData);


    const filterConferenceHandler = () => {
    const eventsFilter = [...eventsData];
    let filteredC = eventsFilter.filter(function(event) {
      return event.type === "Conferencia";
    });
    setEvents([...filteredC]);
   
  };

  const filterShowHandler = () => {
    const eventsFilter = [...eventsData];
    let filteredShow = eventsFilter.filter(function(event) {
      return event.type === "Show";
    });
    setEvents([...filteredShow]);
   
  };

  const filterLabHandler = () => {
    const eventsFilter = [...eventsData];
    let filteredC = eventsFilter.filter(function(event) {
      return event.type === "Lab";
    });
    setEvents([...filteredC]);
    
  };
  const filterCHandler = () => {
    const eventsFilter = [...eventsData];
    let filteredT = eventsFilter.filter(function(event) {
      return event.type === "Competencia";
    });
    setEvents([...filteredT]);
    
  };
  return (
    <div>
      <BottomNavigation showLabels className={classes.root} style={{background:"none"}}>
        <BottomNavigationAction
          onClick={filterConferenceHandler}
          label="Conferancia"
          className={classes.icon}
          icon={<StarHalfIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          onClick={filterShowHandler}
          label="Show"
          className={classes.icon}
          icon={<EventIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Lab"
          onClick={filterLabHandler}
          icon={<AssignmentIndIcon className={classes.icon} />}
        />
        <BottomNavigationAction
          className={classes.icon}
          label="Competencia"
          icon={<FitnessCenterIcon className={classes.icon} />}
          onClick={filterCHandler}
        />
      </BottomNavigation>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        {events
          .sort((a, b) => {
            if (a.title > b.title) {
              return 1;
            }
            if (a.title < b.title) {
              return -1;
            }
            return 0;
          })
          .map((e, i) => {
            return (
              <ListItem
                key={i}
                button
                style={{
                  backgroundColor: "#9FA7BF",
                  marginTop: "2%",
                  color: "#000411"
                }}
              >
                <ListItemIcon style={{ color: "#001355" }}>
                  <Link to={`/events/${e._id}`}>
                    <EventNoteIcon />
                  </Link>
                </ListItemIcon>
                <ListItemText
                  primary={`${e.title}`}
                  style={{ color: "#001355" }}
                />
              </ListItem>
            );
          })}
      </List>
    </div>
  );
 }