import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  // root: {
  //   width: "100%",
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper
  // },
  // inline: {
  //   display: "inline",
  //   color: "#000411"
  // }
}));

export default function ItemsList({ speakersData }) {
  const classes = useStyles();
console.log(speakersData)
  return (
    <List className={classes.root}>
      {speakersData
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
                    <Link to={`/stage/${e._id}`}>
                      <Typography
                        component="span"
                        variant="body2"
                       style={{color:"#000411"}}
                      >
                        {e.name}
                      </Typography>
                    </Link>
                    <span style={{ color: "white", paddingLeft:"2%" }}>
                     {e.occupation}
                    </span>
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
    </List>
  );
}
