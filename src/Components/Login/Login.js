import React, { Component } from 'react';
import classes from './Login.css';
import { Link } from 'react-router-dom';
import axios from '../../axiosInstance';

class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = event => {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  loginUser = event => {
    event.preventDefault();
    console.log(this.state);
    let httpPostConfig = {
      httpHeaders: {
        'Content-type': 'application/json'
      },
      body: {
        email: this.state.email,
        password: this.state.password
      }
    };
    axios
      .post('api/authenticate', httpPostConfig.body, httpPostConfig.httpHeaders)
      .then(data => {
        console.log(data);
        //TODO: Save in the local/session storage
        sessionStorage.setItem('currentUser', data.data.token);
      })
      .catch(error => {
        console.log('an error occurred');
      });
  };

  render() {
    return (
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
            <button>login</button>
            <p className={classes.message}>
              Not registered? <Link to="/signup">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
