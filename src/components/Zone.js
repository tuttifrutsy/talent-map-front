import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    width: 120,
    height: 180,
    fontSize: ".6em",
    textAlign: "Center",
    margin: "auto",
    marginRight: "5%",
    color: "#23ca0f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column"
  },
  fab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Zone = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>{props.name}</CardContent>
        </CardActionArea>
        <CardActions className={classes.fab}>
          <Fab color="primary" aria-label="add">
            <Link to={`/stages/${props.id}`}>
              <AddIcon />
            </Link>
          </Fab>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default Zone;
