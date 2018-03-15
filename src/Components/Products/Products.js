import React from 'react';
import classes from './Products.css';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';
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

const products = props => {
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
        title={props.productName}
        subheader={props.productcreatedAt}
      />
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
      <CardContent>
        <Typography variant="headline" component="h2">
          {props.productValue}{' '}
          <Chip label={props.productStatus} className={classes.Right} />
        </Typography>
        <Typography component="p">{props.productDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Buy
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default products;
