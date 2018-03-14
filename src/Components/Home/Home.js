import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
import classes from './Home.css';
import Navigation from '../../Components/Navigation/Navigation';
import HomePage from '../../Containers/HomePage/HomePage';
import Product from '../../Containers/Product/Product';
import Cart from '../Cart/Cart';

const home = () => {
  return (
    <div>
      <Navigation />
      <div className={classes.Container}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </div>
  );
};

export default home;
