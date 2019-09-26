import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";


const useStyles = makeStyles(theme => ({
  fab: { 
    backgroundColor: "#23ca0f",
    margin:"3%"
  },
 
}));

const IconBtn = () => {
  const classes = useStyles();

  return (
    <div style={{ margin: "auto" }}>
      <Fab aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default IconBtn;