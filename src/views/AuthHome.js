/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from 'axios';
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
import '../App.css'

class AuthHome extends Component {
    state = {
      username: "",
      password:"", 
      user:[],
      loggedin: false
    };

    
    onSubmit =  async (e) => {
      //console.log(this.state)
      e.preventDefault();
      const user = {
        username: this.state.username,
        password: this.state.password
      };
      await axios.post("https://imap-talent.herokuapp.com/api/login",user)

      .then(res => {
        if (res.status === 200) {
            this.setState({user: res.data,
            loggedin: true})
            console.log(res)
            alert(`Bienvenid@${res.data.username}😃`)
          this.props.history.push('/lands')
          
        }
        else {
          const error = new Error(res.error);
          throw error;
        }
      })
     .catch(err => {
       alert('Errror 🤯')
     });
    }

    onSelectedChange = (e) => {
      console.log(e.target.value, e.target.name);
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    render() { 
      const user = this.state.user;
      console.log(user)
  return (
    <div className="container">
      <h2>Ingresa tus datos</h2>
      <form onSubmit={this.onSubmit} className="form-login">
        <Grid container alignItems="center">
          <Grid item>
            <AccountCircle className="icon" />
          </Grid>
          <Grid item>
            <TextField
              name="username"
              required
              id="standard-required"
              label="Required"
              defaultValue="Ingresa tu usuario"
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                width: 200
              }}
              margin="normal"
              onChange={this.onSelectedChange}
            />
          </Grid>
        </Grid>
        <Grid container  alignItems="flex-end">
          <Grid item>
            <LockOutlinedIcon className="icon" />
          </Grid>
          <Grid item>
            <TextField
              required
              name="password"
              id="standard-password-input"
              label="Password"
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                width: 200
              }}
              type="password"
              autoComplete="current-password"
              margin="normal"
              onChange={this.onSelectedChange}
            />
          </Grid>
        </Grid>
          <Fab
            variant="extended"
            aria-label="delete"
            type="submit"
            style={{ margin: "2%" }}
          >
            <NavigationIcon style={{ marginRight: "2%" }} />
            Login
          </Fab>
      </form>

      <div className="social-btn icons">
        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-google"></i>
      </div>
      <div></div>
    </div>
  );
  }
};

export default AuthHome;