import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.css';
import axios from 'axios';

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

    let httpPostConfig = {
      httpHeaders: {
        'Content-type': 'application/json'
      },
      body: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    };
    console.log(httpPostConfig.body);
    axios
      .post(
        'https://stage-bkbackend.herokuapp.com/api/signup',
        httpPostConfig.body,
        httpPostConfig.httpHeaders
      )
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        console.log('error');
      });
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

export default Signup;
