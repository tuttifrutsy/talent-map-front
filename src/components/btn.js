import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      background: "#23CA0F",
      width: 200,
    },
    input: {
      display: "none"
    },
    
  })
);

const Btn = (props) =>{
   const classes = useStyles();

  return (
    <div>
      <Fab
          variant="extended"
          aria-label="add"
          className={classes.margin}
        >{props.children}</Fab>
    </div>
  );
}

export default Btn;