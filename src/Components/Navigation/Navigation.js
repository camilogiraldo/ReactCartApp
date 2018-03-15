import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { userLoggedOutProcess } from '../../Store/actions/index';


class navigation extends Component {

  onLogout = () => {
    this.props.logOut();
    console.log(this.props)
    // this.props.history.push('/')
  };

  render() {
    const rightButtons = [classes.Link, classes.Right].join(' ');
    return (
      <AppBar position="static">
        <nav>
          <Link to="/" className={classes.Link}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/cart" className={classes.Link}>
            <Button color="inherit">Cart</Button>
          </Link>
          {!this.props.isLoggedIn ? (
            <Link to="/login" className={rightButtons}>
              <Button color="inherit" onClick={this.onLogout}>Login</Button>
            </Link>
          ) : (
            <Link to="/" className={rightButtons}>
              <Button color="inherit" onClick={this.onLogout}>
                Logout
              </Button>
            </Link>
          )}
          {!this.props.isLoggedIn ? (
            <Link to="/signup" className={rightButtons}>
              <Button color="inherit">Signup</Button>
            </Link>
          ) : null}
        </nav>
      </AppBar>
    );
  }
}

const mapStateToprops = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToprops = dispatch => {
  return {
    logOut: () => dispatch(userLoggedOutProcess())
  };
};

export default connect(mapStateToprops, mapDispatchToprops)(navigation);
