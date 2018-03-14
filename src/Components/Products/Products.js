import React from 'react';

import Card from 'material-ui/Card';
import CardActions from 'material-ui/Card';

import CardMedia from 'material-ui/Card';

import CardText from 'material-ui/Card';

import Button from 'material-ui/Button';
import classes from './Products.css';
import { Link } from 'react-router-dom';

const products = props => {
  return (
    <Card className={classes.Card}>
      <Link to={'/product/' + props.productId}>
        <CardMedia>
          <img
            src={
              'data:' +
              props.productImage.filetype +
              ';base64,' +
              props.productImage.value
            }
            align="center"
            className={classes.Image}
            alt={props.productName}
          />
        </CardMedia>
      </Link>

      <CardText>{props.productDescription}</CardText>
      <CardActions>
        <Button>Buy</Button>
        <Button>Share</Button>
      </CardActions>
    </Card>
  );
};

export default products;
