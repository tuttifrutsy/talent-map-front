import React from "react";
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
  fab: {
    color: "#9FA7BF",
    background: "none",
    margin: "2%"
  },
  header: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "2%"
  },
  content: {
    width: "80%",
    margin: "auto"
  }
});

const SpeakerDetail = ({ name, resume, occupation, avatar, land }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid style={{ height: "90vh" }}>
        <h3 style={{ textAlign: "center", color: "#9FA7BF" }}>{name}</h3>
        <Grid container justify="center" alignItems="center">
          <Avatar
            alt={`${name}`}
            src={`${avatar}`}
            className={classes.bigAvatar}
          />
        </Grid>
        <div style={{ textAlign: "center", color: "#23ca0f" }}>
          <p>{occupation}</p>

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
            <p style={{ textAlign: "justify", color: " #9FA7BF" }}>
              {" "}
              {resume}{" "}
            </p>
          </div>
          <span style={{ textAlign: "center", color: "#23ca0f" }}>{land}</span>
        </div>
      </Grid>
    </div>
  );
};

export default SpeakerDetail;
