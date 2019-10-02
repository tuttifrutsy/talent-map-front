/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import "../App.css";



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 47,
    width: '95%',
  },
  image: {
    position: 'relative',
    height: 68,
    [theme.breakpoints.down('xs')]: {
      width: '85% !important', // Overrides inline-style
      height: 68,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
    
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(6)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));
const  BtnLand = (props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <Tooltip  TransitionComponent={Zoom} title={props.title}>
          <ButtonBase
            focusRipple
            key={props.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            url={props.url}
            style={{
              width: "100%"
            }}
            onClick={props.click}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${props.url})`
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
               
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        </Tooltip>
    
    </div>
  );
}

export default BtnLand;