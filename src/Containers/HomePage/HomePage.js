import React, { Component } from 'react';
import Products from '../Products/Products';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';

class HomePage extends Component {
  state = {
    products: null
  };

  componentDidMount() {
    axios
      .get('https://stage-bkbackend.herokuapp.com/products')
      .then(response => {
        this.setState({ products: response.data });
        console.log(this.state.products);
      });
  }

  render() {
    let products = <Loader />;

    if (this.state.products) {
      products = this.state.products.map(el => {
        return (
          <Products
            productTitle={el.name}
            productDescription={el.description}
            productImage={el.images}
            productName={el.name}
            productId={el._id}
            key={el._id}
          />
        );
      });
    }
    return <div>{products}</div>;
  }
}

export default HomePage;
