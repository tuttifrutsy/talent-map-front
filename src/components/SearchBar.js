import React, { useState, useContext, useEffect } from "react";
import datos from '../data.json';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    textField: {
      flexBasis: 200
    },
    title: {
      margin: theme.spacing(4, 0, 2)
    }
  })
);

const SearchBar = () => {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const [losdatos, setlosDatos] = useState(datos);


  console.log(losdatos)

  return (
    <div>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel htmlFor="adornment-amount">Search</InputLabel>
        <Input
          type="text"
          name="busqueda"
          value={searchText}
         
        />
      </FormControl>
      <Grid item xs={12} md={6}>
        <div className={classes.demo}>
          <List >
            {/* {
              losdatos.map((e, i)=> {
                return (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${e.title}`} secondary="link" />
                  </ListItem>
                );
              })
            } */}
              
          </List>
        </div>
      </Grid>
    </div>
  );
};

export default SearchBar;
