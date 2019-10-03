import React from "react";
import Grid from "@material-ui/core/Grid";
import CardB from "./CardB";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CardS from "./CardS";
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
    paddingLeft: theme.spacing(18),
    paddingTop: theme.spacing(2)
  },
  contain: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
  },
  zones: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  chip: {
    widht: "80%",
    margin: "2%"
  }
}));

const ZoneViewDetail = ({ name, description, events, zone }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center", padding: "1%" }}>{name}</h2>
        </Grid>
        <Grid item xs={8}>
          <CardB title={zone} description={description} />
          <Container className={classes.contain}>
            <h5 className={classes.subtitle}>Speakers</h5>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <CardS />
          <h5 className={classes.subtitle}>Eventos</h5>
          <div className={classes.contain}>
            {events
              .sort(() => Math.random() - 0.5)
              .slice(-0, 5)
              .map((e, i) => {
                return <Chip labe={`${e.name}`} className={classes.chip} />;
              })}
            <Chip label="Basic Chip" className={classes.chip} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ZoneViewDetail;
