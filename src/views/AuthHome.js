/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Login from '../components/Login';
import Btn from "../components/btn";
import {Link} from "react-router-dom";

const AuthHome = () => {
  return (
    <div className="container">
      <h2>Ingresa tus datos</h2>
      <Login />
      <div className="social-btn icons">
        <i className="fa fa-facebook-official"></i>
        <i className="fa fa-google"></i>
      </div>

      <div>
        <Link to="/mapi">
          <Btn>Login</Btn>
        </Link>
        <div className="container">
          <p className="small">¿Problemas con tu cuenta? </p>
          <Link to="/help" className="link">
            Resuelvelos aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthHome;