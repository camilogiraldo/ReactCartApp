import React, { Component } from "react";
import Products from "../../Components/Products/Products";
import Loader from "../../Components/Loader/Loader";

import {
  getProductsReq,
  addItemToBuy,
  removeCreateProductRedirect,
  signupReset
} from "../../Store/actions/index";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import classes from "./HomePage.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
class HomePage extends Component {
  componentDidMount() {
    //check
    this.props.removeCreateProductRedirect();
    this.props.getProducts();
    this.props.signupReset();
  }

  render() {
    let products = <Loader />;

    if (this.props.products) {
      products = this.props.products.map(el => {
        return (
          <Products
            productTitle={el.name}
            productDescription={el.description}
            productImage={el.images}
            productName={el.name}
            productId={el._id}
            productcreatedAt={el.createdAt}
            productValue={el.value}
            productStatus={el.status}
            onBuyClicked={this.props.onBuyClicked}
            isUserLoggedIn={this.props.isLoggedIn}
            key={el._id}
          />
        );
      });
    }
    return (
      <div className={classes.Container}>
        <div className={classes.SearchBarPos}>
          <SearchBar />
        </div>
        {products}
        <div className={classes.FloatButton}>
          {this.props.isLoggedIn ? (
            <Link to="/publish">
              <Button variant="fab" color="secondary" aria-label="add">
                <AddIcon />
              </Button>
            </Link>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProductsReq()),
    addItemToBuy: itemId => dispatch(addItemToBuy(itemId)),
    removeCreateProductRedirect: () => dispatch(removeCreateProductRedirect()),
    signupReset: () => dispatch(signupReset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
