import React, { Component } from 'react';
import classes from './Products.css';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Products extends Component {
  render() {
    return (
      <Card className={classes.Card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.productName}
          subheader={this.props.productcreatedAt}
        />
        <Link to={'/product/' + this.props.productId}>
          <CardMedia>
            <img
              src={
                'data:' +
                this.props.productImage.filetype +
                ';base64,' +
                this.props.productImage.value
              }
              align="center"
              className={classes.Image}
              alt={this.props.productName}
            />
          </CardMedia>
        </Link>
        <CardContent>
          <Typography variant="headline" component="h2">
            {this.props.productValue}
            <Chip label={this.props.productStatus} className={classes.Right} />
          </Typography>
          <Typography component="p">{this.props.productDescription}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => this.props.onBuyClicked(this.props.productId)}>
            {this.props.isUserLoggedIn ? 'Add to cart' : 'Log in to buy'}
          </Button>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Products;
