import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.css';
import { signupUserReq } from '../../Store/actions/index';
import { connect } from 'react-redux';

class Signup extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  onChangeHandler = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const signupData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.signupUserReq(signupData);
  };

  render() {
    return (
      <div className={classes.loginPage}>
        <div className={classes.form}>
          <form
            className={classes.registerForm}
            onSubmit={this.onSubmitHandler}
          >
            <input
              type="text"
              placeholder="name"
              name="name"
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

const mapDispatchToProps = dispatch => {
  return {
    signupUserReq: signupData => dispatch(signupUserReq(signupData))
  };
};

export default connect(null, mapDispatchToProps)(Signup);
