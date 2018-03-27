import React, { Component } from "react";
import { connect } from "react-redux";
import { verifyUserReq } from "../../Store/actions/index";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

class UserVerification extends Component {
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const token = query.get("token");
    this.props.verifyUser(token);
  }

  render() {
    let token = null;
    if (this.props.token) {
      token = <Redirect to="/" />;
    }
    return (
      <div>
        {token}
        <h1>Verifying user ...</h1>
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
    verifyUser: token => dispatch(verifyUserReq(token))
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserVerification)
);
