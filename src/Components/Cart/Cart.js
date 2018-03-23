import React, { Component } from "react";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import classes from "./Cart.css";
import { connect } from "react-redux";
import { getItemsInCartReq } from "../../Store/actions/index";
import Loader from "../Loader/Loader";
import Chip from "material-ui/Chip";
import Divider from "material-ui/Divider";
import Button from "material-ui/Button";
import { Link } from 'react-router-dom';

class Cart extends Component {
  componentDidMount() {
    this.props.getItemsInCart();
  }

  render() {
    let cart = <Loader />;
    if (this.props.itemsInCart.length !== 0) {
      cart = this.props.itemsInCart.map(item => {
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
                <div className={classes.PriceLabel}>
                  <Divider />

                  <Typography variant="headline">
                    Total price: $ {item.price}
                  </Typography>
                </div>
              </CardContent>
            </div>
          </Card>
        );
      });
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
                  Total:
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
    getItemsInCart: () => dispatch(getItemsInCartReq())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
