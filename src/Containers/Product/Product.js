import React, { Component } from 'react';

import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import classes from './Product.css';
import Loader from '../../Components/Loader/Loader';
import { getProductByIdReq } from '../../Store/actions/index';
import { connect } from 'react-redux';
import Chip from 'material-ui/Chip';
class Product extends Component {
  componentDidMount() {
    this.props.loadProduct(this.props.match.params.id);
  }

  render() {
    let post = <Loader />;
    if (this.props.loadedProduct) {
      const fechaCreacion = this.props.loadedProduct.createdAt;
      post = (
        <div className={classes.Center}>
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
              title={this.props.loadedProduct.name}
              subheader={fechaCreacion}
            />
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
            <CardContent>
              <Typography variant="headline" component="h2">
                $ {this.props.loadedProduct.price}  <Chip label={this.props.loadedProduct.status} className={classes.Right}/>
              </Typography>
              <Typography component="p">
                {this.props.loadedProduct.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.Center}>
              <Button size="small" color="primary">
                Buy
              </Button>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
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
