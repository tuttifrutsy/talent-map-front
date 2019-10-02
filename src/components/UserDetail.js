import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150
  },
  fab:{
    color:"whithe",
    background:"none",
    margin:"2%"
  },
  header:{
    width:"80%",
    margin:"auto",
    display:"flex",
    justifyContent:"space-between",
    padding:"2%",
  },
  content:{
    width:"80%",
    margin:"auto"
  }
});

const SpeakerDetail = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.bigAvatar}
          />
        </Grid>
        <div style={{ textAlign: "center" }}>
          <h3>Name del speaker</h3>
          <p>Ocupacion del speaker</p>
          <p>Resumen del speaker</p>

          <Fab color="primary" aria-label="add" className={classes.fab}>
            <FacebookIcon />
          </Fab>
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <TwitterIcon />
          </Fab>
          <Fab color="primary" aria-label="add" className={classes.fab}>
            <LinkedInIcon />
          </Fab>
        </div>
        <div className={classes.content}>
          <div className={classes.header}>
            <h5>Conferencia Title</h5>
            <span>Date</span>
          </div>
          <p> resumensssssss </p>
        </div>
      </Grid>
    </div>
  );
};

export default SpeakerDetail;