import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../Containers/Login/Login";
import Signup from "../../Containers/Signup/Signup";
import classes from "./Home.css";
import Navigation from "../../Components/Navigation/Navigation";
import HomePage from "../../Containers/HomePage/HomePage";
import Product from "../../Containers/Product/Product";
import Cart from "../Cart/Cart";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addItemToBuy, addItemToCartReq } from "../../Store/actions/index";
import Snackbar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import UserProfile from "../../Components/UserProfile/UserProfile";
import checkout from "../Cart/Checkout/Checkout";
import CreateProduct from "../../Containers/CreateProduct/CreateProduct";
import UserVerification from "../UserVerification/UserVerification";

class Home extends Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onBuyClicked = productId => {
    if (this.props.isLoggedIn) {
      this.setState({ open: true });
      this.props.addItemToCart(productId);
    } else {
      this.props.history.push("/login");
      this.props.addItemToBuy(productId);
    }
  };

  render() {
    return (
      <div>
        <Navigation />
        <div className={classes.Container}>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <HomePage onBuyClicked={this.onBuyClicked} />}
            />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/checkout" component={checkout} />
            <Route path="/publish" component={CreateProduct} />
            <Route path="/verify_email" component={UserVerification} />
          </Switch>
          <Snackbar
            open={this.state.open}
            onClose={this.handleClose}
            transition={Fade}
            SnackbarContentProps={{
              "aria-describedby": "message-id"
            }}
            message={<span id="message-id">Added to cart</span>}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToBuy: id => dispatch(addItemToBuy(id)),
    addItemToCart: prodId => dispatch(addItemToCartReq(prodId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
