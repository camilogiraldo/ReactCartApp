import React from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.css";

const signup = () => {
  return (
    <div className={classes.loginPage}>
      <div className={classes.form}>
        <form className={classes.registerForm}>
          <input type="text" placeholder="name" className={classes.input}/>
          <input type="password" placeholder="password" className={classes.input}/>
          <input type="text" placeholder="email address" className={classes.input}/>
          <button>create</button>
          <p className={classes.message}>
            Already registered? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signup;
