import React, { Component } from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import classes from "./Cart.css";
import { connect } from "react-redux";
import { getItemsInCartReq, removeFromCartReq } from "../../Store/actions/index";
import Loader from "../Loader/Loader";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

class Cart extends Component {
  componentDidMount() {
    this.props.getItemsInCart();
  }

  removeFromCart = (id) => {
    this.props.removeFromCart(id)
  }

  render() {
    let cart = <Loader />;
    let totalPrice = 0;
    if (this.props.itemsInCart.length !== 0) {
      cart = this.props.itemsInCart.map(item => {
        totalPrice = totalPrice + (item.price * item.count);
        return (
          <Card key={item.createdAt} className={classes.Card}>
            <CardMedia>
              <img
                className={classes.Cover}
                src={
                  "data:" +
                  item.images.filetype +
                  ";base64," +
                  item.images.value
                }
                alt={item.name}
              />
            </CardMedia>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Chip label={item.status} className={classes.Right} />
                <Typography variant="headline">{item.name}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  Description: {item.description}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                  Price: $ {item.price} x {item.count}
                </Typography>
                <Button variant="raised" color="secondary" onClick={() => this.removeFromCart(item._id)}>Remove</Button>
                <div className={classes.PriceLabel}>
                  <Divider />

                  <Typography variant="headline">
                    Total price: $ {item.price * item.count}
                  </Typography>
                </div>
              </CardContent>
            </div>
          </Card>
        );
      });
    } else {
      cart = <h2>No items in cart</h2>
    }
    return (
      <div className={classes.Container}>
        <div>
          <Card className={classes.CardCart}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <CardMedia>
                  <i className="fas fa-shopping-cart" />
                </CardMedia>
                <Typography variant="headline">Items in Cart</Typography>
                <Typography variant="subheading" color="textSecondary">
                  Total: $ {totalPrice}
                </Typography>
              </CardContent>
              <Link to="/checkout" className={classes.Link}>
                <Button
                  variant="raised"
                  color="primary"
                  className={classes.CheckoutButton}
                >
                  Continue to Checkout
                </Button>
              </Link>
            </div>
          </Card>
        </div>
        {cart}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state.user.itemsInCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItemsInCart: () => dispatch(getItemsInCartReq()),
    removeFromCart: (id) => dispatch(removeFromCartReq(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
