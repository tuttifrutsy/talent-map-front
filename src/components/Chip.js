import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  chip: {
    margin: "1.5%",
    width: 400,
    padding:"2%",
    color: "#001355",
    backgroundColor: "#23ca0f",
    justifyContent: "flex-start",
  }
}));

const Chips = (props) => {
  const classes = useStyles();

  const handleDelete = () => {
    alert("You clicked the delete icon.");
  };

  const handleClick = () => {
    alert("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        avatar={
          <Avatar alt="Natacha" src={`${props.avatar}`}/>
        }
        label={props.name}
        onClick={handleClick}
        className={classes.chip}
      />
    </div>
  );
}

export default Chips;