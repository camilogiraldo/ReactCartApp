import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.css";
import { signupUserReq } from "../../Store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  onChangeHandler = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.signupUserReq(this.state);
  };

  render() {
    let redirectOnSignup = null;
    if (this.props.redirectAfterSignupSuccesfull) {
      redirectOnSignup = <Redirect to="/" />;
    }
    return (
      <div className={classes.loginPage}>
        {redirectOnSignup}
        <div className={classes.form}>
          <form
            className={classes.registerForm}
            onSubmit={this.onSubmitHandler}
          >
            <input
              type="text"
              placeholder="name"
              className={classes.input}
              name="name"
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              className={classes.input}
              onChange={this.onChangeHandler}
            />{" "}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className={classes.input}
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="email address"
              className={classes.input}
              name="email"
              onChange={this.onChangeHandler}
            />
            <input
              type="password"
              placeholder="password"
              className={classes.input}
              name="password"
              onChange={this.onChangeHandler}
            />
            <input
              type="text"
              placeholder="location"
              className={classes.input}
              name="location"
              onChange={this.onChangeHandler}
            />
            <button>create</button>
            <p className={classes.message}>
              Already registered? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    redirectAfterSignupSuccesfull: state.auth.userCreated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUserReq: signupData => dispatch(signupUserReq(signupData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
