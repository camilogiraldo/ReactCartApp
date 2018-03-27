import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Signup.css";
import { signupUserReq } from "../../Store/actions/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCountriesReq } from "../../Store/actions/index";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";

class Signup extends Component {
  state = {
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: ''
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
  componentDidMount = () => {
    this.props.getCountries();
  };

  render() {
    let redirectOnSignup = null;
    if (this.props.redirectAfterSignupSuccesfull) {
      redirectOnSignup = <Redirect to="/" />;
    }
    let countries = [];
    if (this.props.countries) {
      countries = this.props.countries.map(country => (
        <MenuItem key={country.name} value={country.name}>
          {country.name}
        </MenuItem>
      ));
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
              required
              />
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              className={classes.input}
              onChange={this.onChangeHandler}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className={classes.input}
              onChange={this.onChangeHandler}
              required
            />
            <input
              type="text"
              placeholder="email address"
              className={classes.input}
              name="email"
              onChange={this.onChangeHandler}
              required
            />
            <input
              type="password"
              placeholder="password"
              className={classes.input}
              name="password"
              onChange={this.onChangeHandler}
              required
            />
            <TextField
              id="location"
              name="location"
              select
              label="Select a location"
              onChange={this.onChangeHandler}
              className={classes.input}
              SelectProps={{
                MenuProps: {
                  className: classes.menu
                }
              }}
              value={this.state.location}
              margin="normal"
              required
            >
              {countries}
            </TextField>
            <button style={{ cursor: 'pointer' }}>create</button>
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
    redirectAfterSignupSuccesfull: state.auth.userCreated,
    countries: state.auth.countriesFilter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signupUserReq: signupData => dispatch(signupUserReq(signupData)),
    getCountries: () => dispatch(getCountriesReq())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
