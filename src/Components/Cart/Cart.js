import React, { Component } from "react";

import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";
import classes from "./Cart.css";
import { connect } from "react-redux";
import { getItemsInCartReq } from "../../Store/actions/index";
import Loader from "../Loader/Loader";

class Cart extends Component {
  componentDidMount() {
    this.props.getItemsInCart();
  }

  render() {
    let cart = <Loader />;

    if (this.props.itemsInCart) {
      console.log(this.props.itemsInCart);
      cart = this.props.itemsInCart.map(item => {
        return (
          <Card key={item.createdAt} className={classes.Card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography variant="headline">{item.name}</Typography>
                <Typography variant="subheading" color="textSecondary">
                  {item.description}
                </Typography>
              </CardContent>
              <div className={classes.controls} />
            </div>
            <CardMedia
              className={classes.cover}
              src={
                "data:" + item.images.filetype + ";base64," + item.images.value
              }
            />
          </Card>
        );
      });
    }
    return cart;
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
