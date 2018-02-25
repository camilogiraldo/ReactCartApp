import React, { Component } from "react";
import Navigation from "../../Components/Navigation/Navigation";
import classes from "./HomePage.css";
import Cart from "../../Components/Cart/Cart";
import Product from "../Product/Product";
import Products from "../Products/Products";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import Loader from "../../Components/Loader/Loader";

class HomePage extends Component {
  state = {
    products: null
  };

  componentDidMount() {
    axios
      .get("https://stage-bkbackend.herokuapp.com/products")
      .then(response => {
        this.setState({ products: response.data });
        console.log(this.state.products);
      });
  }

  render() {
    let products = <Loader />;

    if (this.state.products) {
      products = this.state.products.map(el => {
        return (
          <Products
            productTitle={el.name}
            productDescription={el.description}
            productImage={el.images}
            productName={el.name}
            productId={el._id}
            key={el._id}
          />
        );
      });
    }
    return (
      <div>
        <Navigation />
        <div className={classes.Container}>
          <Switch>
            <Route path="/" exact render={() => products} />
            <Route path="/product/:id" exact component={Product} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default HomePage;
