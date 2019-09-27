import React from "react";
import Grid from "@material-ui/core/Grid";
import CardB from "../components/CardB";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Chips from '../components/Chip';
import IconBtn from '../components/Iconbtn';
import CardS from '../components/CardS';
import Zone from '../components/Zone';
import Chip from "@material-ui/core/Chip";

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
    width:"80%",
    display: "flex",
    justifyContent: "space-between",
  alignItems:"center"
  },
  chip:{
    widht:"80%",
    margin:"2%"
  }
}));

const ViewDetail = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h2 style={{ textAlign: "center", padding: "1%" }}>Land</h2>
        </Grid>
        <Grid item xs={8}>
          <CardB />
          <Container className={classes.contain}>
            <h5 className={classes.subtitle}>Speaker</h5>
            <Chips />
            <Chips />
            <Chips />
            <Chips />
            <IconBtn className={classes.icone} />
          </Container>
        </Grid>
        <Grid item xs={4}>
          <CardS />
          <h5 className={classes.subtitle}>Zonas</h5>
          <div className={classes.zones}>
            <Zone />
            <Zone />
            <Zone />
          </div>
          <h5 className={classes.subtitle}>Eventos</h5>
          <div className={classes.contain}>
            <Chip label="Basic Chip" className={classes.chip} />
            <Chip label="Basic Chip" className={classes.chip} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ViewDetail;
