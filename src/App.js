import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import { connect } from 'react-redux';
import { authCheck } from './Store/actions/index';

class App extends Component {
  componentDidMount() {
    this.props.tryAutoAuthCheck();
  }
  render() {
    return <Home />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    tryAutoAuthCheck: () => dispatch(authCheck())
  };
};

export default withRouter(connect(null, mapDispatchToProps)(App));
