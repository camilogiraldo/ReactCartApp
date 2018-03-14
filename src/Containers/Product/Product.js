import React, { Component } from "react";

import Card from "material-ui/Card";
import CardActions from "material-ui/Card";

import CardMedia from "material-ui/Card";

import CardText from "material-ui/Card";
import Button from "material-ui/Button";
import classes from "./Product.css";
import axios from "../../axiosInstance";
import Loader from "../../Components/Loader/Loader";
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
            "products/" +
              this.props.match.params.id
          )
          .then(response => {
            console.log(response)
            this.setState({ loadedProduct: response.data });
          });
      }
    }
  }

  render() {
    let post = <Loader />;
    if (this.state.loadedProduct) {
      post = (
        <Card className={classes.Card}>
          <CardMedia>
            <img
              src={
                "data:" +
                this.state.loadedProduct.images.filetype +
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
      );
    }

    return post;
  }
}

export default Product;
