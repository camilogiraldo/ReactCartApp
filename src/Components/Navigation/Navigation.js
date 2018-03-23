import React, { Component, Fragment } from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import classes from "./Navigation.css";
import Button from "material-ui/Button";
import { connect } from "react-redux";
import { userLoggedOutProcess } from "../../Store/actions/index";

class navigation extends Component {
  onLogout = () => {
    this.props.logOut();
  };

  render() {
    const rightButtons = [classes.Link, classes.Right].join(" ");

    return (
      <AppBar position="static" className={classes.AppBar}>
        <nav>
          <Link to="/" className={classes.Link}>
            <Button color="inherit">Home</Button>
          </Link>
          {!this.props.isLoggedIn ? (
            <Link to="/login" className={rightButtons}>
              <Button color="inherit" onClick={this.onLogout}>
                Login
              </Button>
            </Link>
          ) : (
            <Fragment>
              <Link to="/" className={rightButtons}>
                <Button color="inherit" onClick={this.onLogout}>
                  Logout
                </Button>
              </Link>
              <Link to="/cart" className={rightButtons}>
                <Button color="inherit">
                  <i className="fas fa-shopping-cart" style={{display: 'inline-block', marginRight: '0.5em'}}/>
                  Cart
                </Button>
              </Link>
              <Link to="/profile" className={rightButtons}>
                <Button color="inherit">
                  <i class="fas fa-user" style={{display: 'inline-block', marginRight: '0.5em'}}/>
                  <span />Profile
                </Button>
              </Link>
            </Fragment>
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
