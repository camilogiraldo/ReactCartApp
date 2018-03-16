import React, { Component } from "react";
import classes from "./Products.css";
import { Link } from "react-router-dom";
import Chip from "material-ui/Chip";
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui-icons/MoreVert";

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
        <Link to={"/product/" + this.props.productId}>
          <CardMedia>
            <img
              src={
                "data:" +
                this.props.productImage.filetype +
                ";base64," +
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
            {this.props.productValue}{" "}
            <Chip label={this.props.productStatus} className={classes.Right} />
          </Typography>
          <Typography component="p">{this.props.productDescription}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => this.props.onBuyClicked(this.props.productId)}>
            { this.props.isUserLoggedIn ?  'Add to cart' : 'Log in to buy' }
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
