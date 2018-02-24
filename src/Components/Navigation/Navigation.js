import React from "react";
import AppBar from "material-ui/AppBar";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.css";

const navigation = () => {
  return (
    <AppBar className={classes.AppBar}>
      <nav>
        <NavLink className={classes.NavBar} to="/">
          Home
        </NavLink>
        <NavLink className={classes.NavBar} to="/cart">
          Cart
        </NavLink>
        <NavLink className={classes.NavBar} to="/login">
          Login
        </NavLink>
        <NavLink className={classes.NavBar} to="/Signup">
          Signup
        </NavLink>
      </nav>
    </AppBar>
  );
};

export default navigation;
