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
  //   width: "60%",
  //   maxWidth: 360,
  //   backgroundColor: theme.palette.background.paper
  // },
  // inline: {
  //   display: "inline"
  // }
}));

export default function ItemsList({ stagesData }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {stagesData
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
  );
}
