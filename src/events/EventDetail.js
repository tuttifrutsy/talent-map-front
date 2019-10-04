import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TodayIcon from "@material-ui/icons/Today";
import DuoChip from './DuoChip';
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import {Link} from 'react-router-dom';
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles({
  card: {
    maxWidth: 600,
    height: "90vh"
  }
});

const EventDetail = ({title, description, type, scheduledFor, speaker, stage, id, click}) => {
  const classes = useStyles();
  return (
    <div>
      <Grid>
        <Grid container justify="center" alignItems="center">
          <Card className={classes.card}>
            <CardActionArea>
              <TodayIcon />
              <Typography variant="overline" display="block" gutterBottom>
                {new Date(scheduledFor).toDateString()}
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                {type}
              </Typography>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  style={{ textAlign: "justify" }}
                >
                  {description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <DuoChip stage={stage} speaker={speaker} />
              <Link to={`/events/edit/${id}`}>
                <EditIcon color="secondary" />
              </Link>
              <IconButton onClick={click}>
              <DeleteForeverIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default EventDetail;
