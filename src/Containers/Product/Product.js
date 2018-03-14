import React, { Component } from 'react';

import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card';

import CardMedia from 'material-ui/Card';

import CardText from 'material-ui/Card';
import Button from 'material-ui/Button';
import classes from './Product.css';
import Loader from '../../Components/Loader/Loader';
import { getProductByIdReq } from '../../Store/actions/index';
import { connect } from 'react-redux';

class Product extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.match.params.id);
  }


      
   
  render() {
    let post = <Loader />;

    if (this.props.loadedProduct) {
      post = (
        <Card className={classes.Card}>
          <CardMedia>
            <img
              src={
                'data:' +
                this.props.loadedProduct.images.filetype +
                ';base64,' +
                this.props.loadedProduct.images.value
              }
              align="center"
              className={classes.Image}
              alt={this.props.loadedProduct.name}
            />
          </CardMedia>

          <CardText>{this.props.loadedProduct.description}</CardText>
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

const mapStateToProps = state => {
  return {
    loadedProduct: state.products.loadedProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadProduct: id => dispatch(getProductByIdReq(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
