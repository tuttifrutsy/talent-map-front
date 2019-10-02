import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CardB from "./CardB";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Chips from "./Chip";
import IconBtn from "./Iconbtn";
import CardS from "./CardS";
import Zone from "./Zone";
import Chip from "@material-ui/core/Chip";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  subtitle: {
    fontWeight: "bold",
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(5),
    paddingBottom: "3%"
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems:"center"
  },
  zones: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  chip: {
    widht: "100%",
    margin: "1%"
  },
  icon:{
    margin: "auto"
  },

}));

const ViewDetail = ({ title, description, stages, speakers, events, logoUrl, imageBg, imageDetail }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center", padding: "1%" }}>{title}</h2>
        </Grid>
        <Grid item xs={7}>
          <CardB
            title={title}
            description={description}
            logoUrl={logoUrl}
            imageBg={imageBg}
            imageDetail={imageDetail}
          />
          <Container className={classes.contain}>
            <h5 className={classes.subtitle}>Speakers</h5>
            {speakers
              .sort(() => Math.random() - 0.5)
              .map((e, i) => {
                return (
                  <Link key={i} to={`/speakers/${e._id}`}>
                    <Chips
                      name={`${e.name}`}
                      id={`${e._id}`}
                      avatar={e.avatar}
                    />
                  </Link>
                );
              })}
          </Container>
        </Grid>
        <Grid item xs={5}>
          <CardS imageDetail={imageDetail} />
          <Container>
            <h5 className={classes.subtitle} style={{ color: "#23ca0f" }}>
              Stages
            </h5>
            <div className={classes.zones}>
              {stages
                .sort(() => Math.random() - 0.5)
                .slice(-0, 3)
                .map((e, i) => {
                  return <Zone key={i} name={`${e.name}`} id={`${e._id}`} />;
                })}
            </div>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.contain}>
            <h5 className={classes.subtitle}>Eventos</h5>
            {events
              .sort(() => Math.random() - 0.5)
              .slice(-0, 3)
              .map((e, i) => {
                return (
                  <Link id={`/events/${e._id}`}>
                    <Chip label={`${e.title}`} className={classes.chip} />
                  </Link>
                );
              })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewDetail;
