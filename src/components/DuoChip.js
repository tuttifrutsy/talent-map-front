import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5)
    }
  }
}));

export default function DuoChips({ speaker, stage }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link to={`/speakers/${speaker._id}`}>
        <Chip
          avatar={<Avatar alt={`${speaker.name}`} src={`${speaker.avatar}`} />}
          label={`${speaker.name}`}
          color="primary"
        />
      </Link>
      <Link to={`/stages/${stage._id}`}>
        <Chip
          avatar={<Avatar>S</Avatar>}
          label={`${stage.name}`}
          clickable
          color="primary"
          deleteIcon={<DoneIcon />}
        />
      </Link>
    </div>
  );
}
