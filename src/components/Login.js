import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import '../App.css';
import { red } from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  root: {
    "& > .fa": {
      margin: theme.spacing(2)
    }
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));



export default function InputWithIcon() {  

  const classes = useStyles();


  return (
    <div className={classes.margin}>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item>
          <AccountCircle className="icon" />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Usuario" />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item>
          <MailOutlineIcon className="icon" />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Email" />
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid item>
          <LockOutlinedIcon className="icon" />
        </Grid>
        <Grid item>
          <TextField id="input-with-icon-grid" label="Password" />
        </Grid>
      </Grid>
    </div>
  );
}
