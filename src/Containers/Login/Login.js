import React, { Component } from "react";
import classes from "./Login.css";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { loginReq } from "../../Store/actions/index";
import Button from "material-ui/Button";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  loginUser = event => {
    event.preventDefault();
    this.props.loginUserReq(this.state.email, this.state.password);
  };

  render() {
    let loginForm = (
      <div className={classes.loginPage}>
        <div className={classes.form}>
          <form className={classes.loginForm} onSubmit={this.loginUser}>
            <input
              type="email"
              placeholder="email"
              className={classes.input}
              value={this.setState.username}
              onChange={this.handleChange}
              name="email"
            />
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="password"
              className={classes.input}
            />
            <Button type="submit" variant="raised" color="primary" style={{ cursor: 'pointer' }}>
              login
            </Button>
            <p className={classes.message}>
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );

    if (this.props.token) {
      if (this.props.itemToBuy) {
        loginForm = <Redirect to={"/product/" + this.props.itemToBuy} />;
      } else {
        loginForm = <Redirect to="/" />;
      }
    }

    return loginForm;
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    itemToBuy: state.user.itemToBuy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUserReq: (email, password) => dispatch(loginReq(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
