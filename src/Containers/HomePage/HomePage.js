import React, { Component } from "react";
import Products from "../../Components/Products/Products";
import Loader from "../../Components/Loader/Loader";

import { getProductsReq, addItemToBuy } from "../../Store/actions/index";
import { connect } from "react-redux";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import classes from "./HomePage.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  componentDidMount() {
    //check
    if (!this.props.products) {
      this.props.getProducts();
    }
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
      <div>
        {products}
        <div className={classes.FloatButton}>
          <Link to="/publish">
            <Button variant="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
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
    addItemToBuy: itemId => dispatch(addItemToBuy(itemId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
