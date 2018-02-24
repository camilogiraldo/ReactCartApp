import React, { Component } from "react";

import Card from "material-ui/Card";
import CardActions from "material-ui/Card";

import CardMedia from "material-ui/Card";

import CardText from "material-ui/Card";

import Button from "material-ui/Button";
import classes from "./Products.css";
import { Link } from "react-router-dom";

class Products extends Component {

    
  render() {
    return (
      <Card className={classes.Card}>
        <Link to={"/product/" + this.props.productId}>
          <CardMedia>
            <img
              src={
                "data:" +
                this.props.productImage.fileType +
                ";base64," +
                this.props.productImage.value
              }
              align="center"
              className={classes.Image}
              alt={this.props.productName}
            />
          </CardMedia>
        </Link>

        <CardText>{this.props.productDescription}</CardText>
        <CardActions>
          <Button>Buy</Button>
          <Button>Share</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Products;
