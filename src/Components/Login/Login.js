import React, { Component } from 'react';
import classes from './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginReq } from '../../Store/actions/index';

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
    this.props.loginUserReq(this.state.email, this.state.password);
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

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginUserReq: (email, password) => dispatch(loginReq(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
