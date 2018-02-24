import React, { Component } from "react";

import Card from "material-ui/Card";
import CardActions from "material-ui/Card";

import CardMedia from "material-ui/Card";

import CardText from "material-ui/Card";
import Button from "material-ui/Button";
import classes from "./Product.css";
import axios from "axios";
class Product extends Component {
  state = {
    loadedProduct: null
  };
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedProduct ||
        (this.state.loadedProduct &&
          this.state.loadedProduct.id !== +this.props.match.params.id)
      ) {
        axios
          .get(
            "https://stage-bkbackend.herokuapp.com/products/" +
              this.props.match.params.id
          )
          .then(response => {
            this.setState({ loadedProduct: response.data });
            console.log(this.state.loadedProduct);
          });
      }
    }
  }

  render() {
      let post= ""
      if (this.state.loadedProduct) {
         post =  <Card className={classes.Card}>
          <CardMedia>
            <img
              src={
                "data:" +
                this.state.loadedProduct.images.fileType +
                ";base64," +
                this.state.loadedProduct.images.value
              }
              align="center"
              className={classes.Image}
              alt={this.state.loadedProduct.name}
            />
          </CardMedia>
  
          <CardText>{this.state.loadedProduct.description}</CardText>
          <CardActions>
            <Button>Buy</Button>
            <Button>Share</Button>
          </CardActions>
        </Card>
      }

    return post;
  }
}

export default Product;
