import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EventNoteIcon from "@material-ui/icons/EventNote";

import '../App.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 800,
    margin:"auto",
  },
  
}));

export default function EventsList({ eventsData }) {
  const classes = useStyles();

  return (

    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
     
      className={classes.root}
    >
      {eventsData.sort((a,b)=>{
        if(a.title > b.title) {
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
            <ListItemIcon style={{ color: "#000411" }}>
              <Link to={`/events/${e._id}`}>
                <EventNoteIcon />
              </Link>
            </ListItemIcon>
            <ListItemText primary={`${e.title}`} style={{ color: "#000411" }} />
          </ListItem>
        );
      })}
    </List>
  );
 }